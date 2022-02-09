function repeatedString(s, n) {
let freq=0;
var str=s;
var c_a_singleStr=0;
for(var i=0;i<s.length;i++)
 {
     if(str[i]=="a")
     c_a_singleStr++;
 }
if(n>=s.length)
{
    var no_of_s_in_length_n=Math.floor(n/s.length);
    var remainder_tail_length=n%s.length;
    for(var i=0;i<remainder_tail_length;i++)
    if(str[i]=="a")
    freq++;
    freq=no_of_s_in_length_n*c_a_singleStr+freq;
}
if(n<s.length)
{
 for(var i=0;i<n;i++)
 if(str[i]=="a")
 freq++;
}
 
return freq;
}
