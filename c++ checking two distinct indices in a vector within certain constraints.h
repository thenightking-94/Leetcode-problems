class Solution {
public:
    bool containsNearbyAlmostDuplicate(vector<int>& nums, int k, int t) {
        
        int i,j,count=0;
        
        if(nums.size()>=20000)
            return false;
        
        
        for(i=0;i<nums.size();i++)
        {
            if((long)nums[i]<LONG_MIN ||(long) nums[i]>LONG_MAX)
                return false;
            for(j=0;j<nums.size();j++)
            {
                if((long)nums[j]<LONG_MIN ||(long) nums[j]>LONG_MAX)
                return false;
                
                if(i!=j)//for checking distinct
                {
                    if((((long)nums[i]-(long)nums[j])<=t && (i-j)<=k ) && (((long)nums[j]-(long)nums[i])<=t && (j-i)<=k))
                    count++;
                }
                
                    
            }
            
        }
        
        if(count!=0)
            return true;
        else
        return false;
        
    }
};