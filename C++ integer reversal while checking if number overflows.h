class Solution {
public:
    int reverse(int x) {
        unsigned long long n1=1ULL<<31;
        long long n2=1<<31;
        
        int i,flag=0;long val;
        if(x>0)
            val=long(x);
        else
        {
            flag=1;
            val=-1*long(x);
        }
        
       string str, res="";
        str=to_string(val);
        
        unsigned l=str.size();
        
        for(i=l-1;i>=0;i--)
        {
            res+=str[i];
        }
        
        val=stoll(res,nullptr,10);
        cout<<val;
        if(flag==0)
           {
            if(val>n1)
                return 0;
            else
            {
                int vl;
                vl=int(val);
                return vl;
            }
        }
        else
            {
            if((-1*val)<n2)
                return 0;
            else
               {
                int vl=-1*int(val);
                return vl;
            }
        }
        
    }
};