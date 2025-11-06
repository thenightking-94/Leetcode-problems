#include <iostream>
#include <string>
#include <algorithm>
#include <bits/stdc++.h>
#include <vector>
using namespace std;

bool isValidSubsequence(vector<int> array, vector<int> sequence) {
 unsigned i,j,pos_index=0;
	
	//checking if both the arrays are same
	unsigned c=0,val=0;
	for(c=0;c<sequence.size();c++)
	{
		if(array[c]==sequence[c])
			val++;
	}
	if(val==c)
		return true;
	
	
	
	for(i=0;i<array.size();i++)
	{
		if(array[i]==sequence[pos_index])
		{
			pos_index++;  //if the element matches then sequence will increment on to its next index
		}
	}
	
	if(pos_index==sequence.size())
		return true;
	else
		return false;
	
}
