#include <vector>
using namespace std;

vector<int> twoNumberSum(vector<int> array, int targetSum) {
  int i,j,p1,p2,flag=0;
	
	if(array.size()==0)
		return {};
	if(array.size()==1)
		return {};

	vector<int> ar;
	for(i=0;i<array.size();i++)
	{
		for(j=0;j<array.size();j++)
		{
			if(i!=j)
			{
				if(array[i]+array[j]==targetSum)
				{p1=array[i];p2=array[j];flag=1;break;}
			}
		}
		if(flag==1)
			break;
	}
	ar.push_back(p1);
	ar.push_back(p2);
	
	if(flag==1)
  return ar;
	else
		return {};
}
