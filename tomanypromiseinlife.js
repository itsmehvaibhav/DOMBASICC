const posts=[
    {title:'Post one',body:'This is post one',createdAt: new Date().getTime()},
    {title:'Post two',body:'This is post two',createdAt: new Date().getTime()}
];
let intervalId=0;
function getPosts()
{
    clearInterval(intervalId);
    intervalId=setInterval(()=>{
        let output='';
        posts.map((post,index)=>{
            output+=`<li>${post.title} Last updated ${(new Date().getTime()-post.createdAt)/1000} seconds ago</li>`;
        })
        document.body.innerHTML=output;
    }
    ,1000)

}

function createPost(post)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt: new Date().getTime()});
            const error=false;
            if(!error)
            {
             resolve(posts);
            }
             else {
             reject('Error:Something went wrong');
             }
    
        },2000);

    });
   
}
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0)
            {
             resolve(posts.pop());
            }
             else {
             reject('Array is Empty Now');
             }
    
        },1000);

});
}
createPost({title:'Post three',body:'This is post three'})
.then(()=>{
     getPosts();
     deletePost().then((deletedpost)=>{
        console.log(deletedpost);
        getPosts();
        deletePost().then(()=>{
                getPosts();
                deletePost().then((deletedpost)=>{
                    getPosts();
                    deletePost().then(()=>{
                        getPosts();
                        deletePost().then(()=>{})
                        .catch(err=>console.log(`inside catch block ${err}`));


                    }).catch(err=>console.log(err));

                 }).catch(err=>console.log(err));


            }).catch(err=>console.log(err));


        }).catch(err=>console.log(err));

    }).catch(err=>console.log(err));

const user={
    username:"sumanth",
    lastactivitytime: "2nd sept 2023"
}

const updateLastUserActivityTime=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            user.lastactivitytime=new Date().getTime();
            resolve(user.lastactivitytime);

        }, 1000);

    })
}
    function userupdate(){
        Promise.all([createPost({title:'Post four',body:'This is post four'}),updateLastUserActivityTime()]).then(([createresolve,updateresolve])=>{
            console.log(updateresolve);
            console.log(createresolve);
        }).catch(err=>console.log(err));
    }
    userupdate();