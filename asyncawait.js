console.log('person1:Shows Ticket');
console.log('person2:Shows Ticket');
const premovie=async()=>{
    const promisewifebringingticket= new Promise((resolve, reject) => {
        setTimeout(() =>resolve('ticket'),3000);
    })
   
    const getpopcorn= new Promise((resolve, reject) => {
       resolve('popcorn');
    });

    const getbutter=new Promise((resolve, reject) => {
        resolve('butter');
    })
    const getcolddrinks=new Promise((resolve, reject) => {
        resolve('colddrinks');
    })
    let ticket = await  promisewifebringingticket;
    console.log(`wife:i have bought ${ticket}`)
    console.log(`Husband:Shall we go in`)
    console.log(`wife:i have hungry`)
    let popcorn= await getpopcorn;

    console.log(`Husband:i have bought ${popcorn}`)
    console.log(`wife:i need some butter on it`)
    
    let butter=await getbutter;

    console.log(`Husband:i have bought ${butter}`)
    console.log(`Wife:i need some cold drinks too`)

    let colddrinks=await getcolddrinks;
    console.log(`Husband:i have bought ${colddrinks}`)
    console.log(`Husband:shall we move`)
    console.log(`wife:yes its getting late`)

    return ticket;
}
premovie().then((m)=>console.log(`Person3:Shows ${m}`));


console.log('person4:Shows Ticket');
console.log('person5:Shows Ticket');