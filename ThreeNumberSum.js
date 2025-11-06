function threeNumberSum(array, targetSum) {
  	array.sort(function(a,b){return (a-b)});
	var res=[];
	for(var i=0;i<array.length-2;i++)
		{
			var left=i+1;;
	    var right=array.length-1;
		while(left < right)
		{
			var sum=array[i]+array[right]+array[left];
			if(sum === targetSum)
			{
				var temp=[];
				temp=[...temp,array[i],array[left],array[right]];
				res=[...res,temp];//including the entire array as an array in res
				left++;
				right--;
			}
		
			else
				{
					if(sum>targetSum)
						right--;
					if(sum<targetSum)
						left++;
				}
		}
	}
	return res;
}
	


// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
