'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
if(n>100||ar.length>100)
return 0;
var i,j,count=0;
ar.sort();
console.log(ar)
var str=0, val=0;
 
var dpr=[],r=0,c=0;
for(i=0;i<ar.length;i++)
  {
    r=0;
    for(j=0;j<=i;j++)
      {
        if(ar[j]==ar[i])
          r++;
      }
    if(r==1)
      dpr[c++]=ar[i];
      else
        continue;   
  }
r=0;
for(r=0;r<c;r++)
  {
    val=0;
    for(i=0;i<ar.length;i++)
      {
        if(dpr[r]==ar[i])
          val++;
      }
    if(val%2==0)
      str+=val;
    else
      str+=(val-1);
    
  }

console.log(str/2);
return(str/2)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
