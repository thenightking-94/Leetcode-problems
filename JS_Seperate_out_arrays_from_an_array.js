var a = [1,2,3,[4,5,[6,7,[8,9]]]];

//Output: [1,2,3,4,5,6,7,8,9]


var res=[],c=0,temp=[],flag=0;
while(true)
  {
    flag=0;
    for(var i=0;i<a.length;i++)
      {
        if(!Array.isArray(a[i]))
          res[c++]=a[i];
        else
         {
            temp=a[i];
           flag=1;
           break;
          } 
      }
  a=temp;
   if(flag==0)
     break;
  }
    console.log(res)