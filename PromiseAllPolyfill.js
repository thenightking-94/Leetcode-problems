const p1 = Promise.resolve("hello");
const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'world');
});
const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("polyfill-1")
  }, 2000);
});
const p4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("polyfill-2")
  }, 2000);
});
const p5 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("polyfill-3")
  }, 2000);
})
const e1 = Promise.reject("test-rej");
Promise.myAll = (promises) =>
{
 return new Promise(async (resol, rejec) => {
  // async functions always returns a promise implicitly whether or not explicitly wrapped or not
    let responses = [];
    try {
      for await (const promise of promises) {
          const res = await promise;
          responses = [...responses, res];
        }
      if(responses.length === promises.length)
        return resol(responses);
    }
    catch(e) {
      return rejec(e);
    }
 })
}
Promise.myAll([p1,p2,p4,p5,p3]).then(
  function(data){console.log("Resolved", data)}
)
Promise.myAll([p1,p2,e1,p4,p5,p3]).then(
  function(data){console.log("My all resolved", data);},
  function(rej){console.log("My all rejected", rej);}
)
//best run on chrome v8 for better experience (error handling in edgy on node)