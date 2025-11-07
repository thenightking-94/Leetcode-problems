// Polyfills
// on large scale production always use promise.allsettled or generators
//recursively to generate data packets at intervals instead loop based sols
const p = Promise.resolve('test');
const q = Promise.resolve('test-1');
const er = Promise.reject('err');
const er2 = Promise.reject('err2');
const t = new Promise((res) =>
  setTimeout(() => {
    res('time');
  }, 3000)
);
const p1 = Promise.resolve('recursiveIterator');

Promise.All = (promises) => {
  return new Promise(async (res, rej) => {
    const result = [];
    try {
      for await (const val of promises) {
        result.push(val);
      }
    } catch (e) {
      return rej(e);
    }
    if (promises.length === result.length) return res(result);
    return;
  });
};

Promise.AllSettled = (promises) => {
  return new Promise(async (r) => {
    return r(await recursiveIterator(promises, [], promises));
  });
};

const recursiveIterator = async (pList, masterList, orgList) => {
  console.log(pList, masterList, orgList);
  return new Promise(async (resolve) => {
    let acc = [];
    try {
      for await (const res of pList) {
        acc = [...acc, res];
        if ([...masterList, ...acc].length === orgList.length)
          return resolve([...masterList, ...acc]);
      }
    } catch (er) {
      acc = [...acc, er];
      return resolve(
        recursiveIterator(
          // discard the counts that have been processed
          orgList.slice([...masterList, ...acc].length),
          [...masterList, ...acc],
          orgList
        )
      );
    }
  });
};

const fn = () => {
  Promise.All([p, q, t]).then((data) => {
    console.log('all-polyfill-resolved', data);
  });
  Promise.All([p, q, er, t]).then(
    (data) => {
      console.log(data);
    },
    (er) => {
      console.log('all-polyfill-rejected', er);
    }
  );
};

const fn2 = () => {
  Promise.AllSettled([p, er, q, er, er2, t, p1]).then(
    (data) => {
      console.log('all-settled-polyfill', data);
    },
    (er) => {
      console.log(er);
    }
  );
};

fn2();
fn();
