class Solution {
public:
    int strStr(string haystack, string needle) {
        
       //trying a sliding expanding bracket approach to locate a particular series of characters
        if(needle=="")
            return 0;
        if(haystack==needle)
            return 0;
        int i=0, h=haystack.size(),n=needle.size();
        int npos=0,pos=0,flag=0;
        string str="";
       while(i<h)
       {
         if(haystack[i]==needle[0]&&i+needle.size()<=h)//starting of bracket
         { 
             cout<<"enter"<<endl;
             str="";
             for(unsigned j=i;j<i+needle.size();j++)
             {
                 str+=haystack[j];
             }
             cout<<str<<endl;
             if(str==needle)
                 return i;
         }
           i++;
       }
        return -1;
    }
};
