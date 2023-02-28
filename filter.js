//add text node with input value
//li.appendChild(document.createTextNode(newitem.value));
//li.appendChild(document.createTextNode(newinput.value));

//creatte delete button
//const del=document.createElement('button');
//@@ -79,6 +80,80 @@ editbtn.className='btn btn-danger btn-sm float-right edit';
////edititem[i].appendChild(editbtn);
//}

/* itemlist.addEventListener('click',edititem);
function edititem(e)
{
    if(e.target.classList.contains('edit'))
    {
        if(confirm('Are you sure?'))
        {
        const li=e.target.parentElement;
    
        }
    }
} */

const filter=document.getElementById('filter');

//filter event
 filter.addEventListener('keyup',filteritems);

 function filteritems(e)
 {
    //convert text to lower case
    var text=e.target.value.toLowerCase();

    //get list
    var items=itemlist.getElementsByTagName('li');

    //convert to an array
    Array.from(items).forEach(function(item){
        var itemname=item.firstChild.textContent;

        var description=item.childNodes[1].textContent;
        if(itemname.toLowerCase().indexOf(text)!=-1)//it can be ==0 also
        {
            item.style.display='block';
        }
        else if(description.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block';
        } 
        else 
        {
            item.style.display='none';
        }
    });


 }

//add input before submit

//create element
 //const newinput=document.createElement('input');

 //add type
//newinput.type='text';

//add class
//newinput.className='form-control mr-2';

// get element to add before that element
//const newsubmit=document.getElementsByClassName('btn btn-dark');
////console.log(newsubmit);

//insert it 
////form.insertBefore(newinput,newsubmit[0]);

//li.appendChild(document.createTextNode(newinput.value));
//above code is pasted at line 25

//for search its pasted in if condition line 116 && 121