let p1 = Promise.resolve("hello");
let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'world');
});


Promise.myAll = (promises) =>
{
  //creating another promise object for the polyfill main resolving to the array of all the responses
 return new Promise((resol,rejec)=>{
    let totalPromises = promises.length;
    let responses=[]
    let resCount=0,rejCount=0; 
   
    promises.forEach(function countResolves (eachPromise, index){
      
   
    eachPromise.then(function(res)
         {
          resCount++;
          console.log(index,eachPromise)
          responses=[...responses,res];
          if(index===0)
              console.log("first one resolved")
          if( resCount===totalPromises){
              console.log("All of the promise objects resolved")
              resol(responses)
          }
         },
     function(rej)
        { rejCount++;}
                   )
 
  })
    
 })
                     
}

Promise.myAll([p1,p2]).then(
  function(data){console.log("My all resolved",data);},
  function(rej){console.log("My all rejected",rej);}
)
