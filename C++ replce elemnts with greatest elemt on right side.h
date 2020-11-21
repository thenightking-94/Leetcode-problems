#include <iostream>
#include <string>
#include <algorithm>
#include <bits/stdc++.h>
#include <vector>

using namespace std;


class Solution {
public:
    vector<int> replaceElements(vector<int>& arr) {
        
        int i,l=arr.size(),max;
        unsigned j;
        
          for(i=0;i<l;i++)

              {
              max=arr[i];
              for(j=i+1;j<l;j++)
                 {
                  if(arr[j]>max)
                  {
                      max=arr[j];
                  }
                 }
               if(i!=(arr.size()-1))
               arr[i]=max;
               else
                   arr.push_back(-1);
              
              }
        //erasing the first elemnt of the vector
        arr.erase(arr.begin());
        vector<int>::iterator k;
        for(k=arr.begin();k!=arr.end();k++)
            cout<<*k<<" ";
        cout<<endl;
        
        return arr;
              
     }
    
};