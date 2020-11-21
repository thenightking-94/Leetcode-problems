#include <iostream>
#include <string>
#include <algorithm>
#include <bits/stdc++.h>
#include <vector>

using namespace std;
     
     
    string reverser(string str)
    {
        int i,l=str.size();
        string rev="";
        for(i=l-1;i>=0;i--)
            rev+=str[i];
        return rev;
    }
    
    void longestPalindrome(string s) {
        if(s.size()==1)
            cout<< s;
        int i,j,l=s.size(),c,flag=0;
        string new_max="",max_palin_substring="",palin="",max_palin_per_index="";
        
                    for(i=0;i<l;i++)
                    {
                         new_max=""; flag=0; max_palin_per_index="";
                       for(j=i;j<l;j++)
                       {
                          
                           new_max+=s[j];
                           palin="";
                         if(new_max.size()>1)
                         {
                              palin=reverser(new_max);
                                                           
                         }
                           
                            if(palin==new_max)
                              {
                                  
                                  if(new_max.size()>max_palin_per_index.size())
                                      max_palin_per_index = new_max;
                               
                              }   
                            
                       }
                                                          
                        if(max_palin_substring.size()<max_palin_per_index.size() )
                        {
                           max_palin_substring=max_palin_per_index;
                        }
                     
                      }
        if (!max_palin_substring.empty())
        cout<< max_palin_substring;
        else if(max_palin_substring.empty()&&!s.empty())
             {
            char ch=s[0];
            string basic_palin="";
            basic_palin.push_back(ch);
            cout<< basic_palin;
             }
        else
        {
            cout<< "";
        }
    }
   
    int main()
    {
        string str="abababc";
        longestPalindrome(str);
        return 0;
    }
