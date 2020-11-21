class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        
        unsigned sum=0,i,j;
        vector<int> sum_run;
        for(i=0;i<nums.size();i++)
        {
            sum=0;
            for(j=0;j<=i;j++)
            {
                sum+=nums[j];
            }
            sum_run.push_back(sum);
        }
        
        return sum_run;
    }
};