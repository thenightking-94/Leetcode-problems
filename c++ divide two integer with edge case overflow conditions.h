class Solution {
public:
    int divide(int dividend, int divisor) {
        
        long count=0,sign_div=1,sign_divi=1;
        long sum=0;
        int max=INT_MAX;
        int min=INT_MIN;
        //edge cases 
        if(dividend==0)
            return 0;
        if(dividend==divisor)
            return 1;
       long Dividend=(long)dividend;
       
       long Divisor=(long)divisor;
        if(Dividend==max && Divisor==-1)
            return min;
          if(Dividend==min && Divisor==-1 )
            return max;
        if(Dividend==max && Divisor==1)
            return max;
          if(Dividend==min && Divisor==1)
            return min;
        
        //chcking the signs of the dividends and the divisor
         if(Dividend<0)
        {
           Dividend=-1*Dividend;
            sign_div=-1;
        }
        
         if(Divisor<0)
        {sign_divi=-1; Divisor=-1*Divisor;}
      
        while(sum<=Dividend)
        {
            sum+=Divisor;
            count++;
                      
        }
        
       return sign_div*sign_divi*(count-1);
    }
};