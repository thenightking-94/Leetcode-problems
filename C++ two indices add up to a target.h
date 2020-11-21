class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unsigned i1,i2;
        
        for(int i=0;i<nums.size();i++)
        {
            for(int j=0;j<nums.size();j++)
            {
                if(j!=i)
                {
                    if(nums[i]+nums[j]==target)
                    {
                        i1=i; i2=j;
                        break;
                    }
                }
            }
            if(i2 && i2)
                break;
        }
        
        vector<int> ar;
        ar.push_back(i1);
        ar.push_back(i2);
        return ar;
        
    }
};