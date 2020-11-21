class Solution {
public:
    string reverseWords(string s) {
       int i,j;
       
        s.push_back(' ');// alternative to s=s+" ";
        string res="";
        vector<string> str;
        for(i=0;i<s.size();i++)
        {
            if(!isspace(s[i]))// alternative to s[i]!=' '
            res+=s[i];
            
            if(isspace(s[i]))
            {
             if(!res.empty())
              str.push_back(res);
             
              res="";
            }
        }
        res="";
       if(str.size()==0)
           return "";
        for(j=str.size()-1;j>=0;j--)
        {
           
            res+=str[j]+" ";
        }
            res.pop_back();
        
        return res;
    }
};