class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
   
        copy(nums2.begin(),nums2.end(),back_inserter(nums1));
        sort(nums1.begin(),nums1.end());
        vector<int> :: iterator k;
        for(k=nums1.begin();k<nums1.end();k++)
            cout<<*k<<" ";
        cout<<endl;
        int i;
        double median;
        
        if(nums1.size()%2!=0)
        {
            i=nums1.size()/2;
            median=nums1[i];
            
        }
        else
        {
            
            i=nums1.size()/2;
           
            median=(nums1[i-1]+nums1[i])/2.0;
            
        }
        
        return median;
    }
};