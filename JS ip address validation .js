
var validIPAddress = function(IP) {
    var str1=IP;
    var str2=IP;
    
    //IP4 checking
    
    var res=[],c=0;var flag=0,f=0,fl=0;
    var res_st=str1.split('.');
    var IPV4="";
    
    
    
   for(var i=0;i<res_st.length;i++)//checking preceding zeroes
       res[c++]=res_st[i].toString().toLowerCase();
    
   if(res.length==4)
       f=1;
    else
        f=0;
    
  for(var i=0;i<res.length;i++)
      {
          if(res[i].length==1&&res[i]!=0)
                      continue;
          if(res[i].toString().length>1&& (res[i].toString())[0]=='0')
                     {flag=1;break;}
         
          if(res[i].toString()=="")
              {flag=1;break;}
              
      }
    
    for(var i=0;i<res.length;i++)
        {
            
    if(Number(res[i])>255)//checking range of x_subscript_i
             { fl=1;break;}
            
    
        }
    
    
    var isN=0;

   // res[0]=res[0].toString().toLowerCase();
    
    for(var i=0;i<res.length;i++)
        {
            for(var j=97;j<=122;j++)
                {
                    var ch=String.fromCharCode(j);
                    if((res[i]).includes(ch))
                        isN=1;
                }
        }

   
    
    if(flag==1||f==0||fl==1||isN==1)//checks whether IPV4 or not
        IPV4= "";
    else
        IPV4= "yes";
    
   var flagger=0;c=0;//re-using variables
    
    //IPv6 checking
    
    var pos,val=[],IPV6="",len_check=0;
        
        pos=str2.split(':');
    for(var i=0;i<pos.length;i++)
        val[c++]=pos[i].toString().toLowerCase();
    
    if(val.length==8)
        len_check=1;
    else
        len_check=0;
    
    for(var i=0;i<c;i++){
        if(val[i].length>=1&&val[i].length<=4)//performing length  check
            flagger++;
    }
    if(flagger==c)
        flagger=1;
    else
        flagger=0;
    
    var tr=0,char_check=0;
    for(var i=0;i<c;i++)
        {
            for(var j=103;j<=122;j++)
                {
                    var ch=String.fromCharCode(j);
                    if(val[i].includes(ch))
                        tr=1;
                }
        }
    
    if(tr==1)
        char_check=1;
    else
        char_check=0;
    
     if(char_check==1||flagger==0||len_check==0 )
         IPV6="";
    else
        IPV6="yes";
    
    if(IPV4=='yes'&&IPV6=="")
        return "IPv4";
    if(IPV4==""&&IPV6=="yes")
        return "IPv6";
    else
        return "Neither";
    
    
    
    
    
    
    
    
};