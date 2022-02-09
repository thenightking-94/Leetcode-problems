
function jclouds(c) {
var ar=[];
ar=[...c];
var i=0,count=0;
while(true)
{
     if(i==(ar.length-1))
      break;
     else if(i==(ar.length-2))
    {
      count++;
      break;
    }
   else if(ar[i]!=1&&ar[i+2]!=1)
    i+=2;
    else if(ar[i]!=1&&ar[i+2]==1)
    i+=1;
   
    count++;
 
  console.log(i+"index===jumps"+count);
  
}
console.log(count)
}

jclouds([0, 0 ,0, 1, 0, 0]);