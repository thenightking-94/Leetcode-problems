class Solution {
public:
    int palin(long num)
    {
        long i=num,mod_part,palin_form=0;
        while(num>0)
        {
            mod_part=num%10;
            palin_form=palin_form*10+mod_part;
            num/=10;
        }
        
        if(palin_form==i)
            return 1;
        else
            return 0;
        
    }
    string nearestPalindromic(string n) {
        string val_st="",v_st="";
        if(n.size()>18)//edge cases for overflow string and single charcter integers
            return "";
        if(stoi(n)>0&&stoi(n)<=9)
        {
            int temp=stoi(n);
            temp=temp-1;
            string temp_st=to_string(temp);
            return temp_st;
        }
        
        
        long val,v,count_pos=0,count_neg=0;
            val=stol(n,nullptr,10);
            v=stol(n,nullptr,10);
       int flag=0,check=0;
        
                while(to_string(val).size()<=18)
                 {
                      val++;
                      count_pos++;
                    if(palin(val)==1)
                     {check=1;break;}
                 }
                 while(to_string(v).size()<=18)
                {
                        v--;
                        count_neg++;
                     if(palin(v)==1)
                     { flag=1;break;}
                 }
        
       
        if(val)
       val_st=to_string(val);
        if(v)
       v_st=to_string(v);
        
        if(count_neg<count_pos && flag==1)
            return v_st;
        if(count_neg>count_pos && check==1)
            return val_st;
        if(count_neg==count_pos && flag==1)
            return v_st;
            else
                return "";
        
    }
};