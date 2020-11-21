class Solution {
public:
    vector<int> shuffle(vector<int>& nums, int n) {
        
        unsigned i=0;
        vector<int> ar;
        unsigned m=n;
        while(i<n&&m<2*n)
        {
            ar.push_back(nums[i]);
            ar.push_back(nums[m]);
            i++;
            m++;
        }
        
        return ar;
    }
};