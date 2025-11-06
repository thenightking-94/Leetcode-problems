function smallestDifference(arrayOne, arrayTwo) {
  var s1=arrayOne;
	var s2=arrayTwo;
	var res=[],min=Math.abs(s1[0]-s2[0]);
	for(var i=0;i<s1.length;i++)
		{
			for(var j=0;j<s2.length;j++)
				{
					var diff=Math.abs(s1[i]-s2[j]);
				//console.log(diff)
					if(min>diff)
						{
								min=diff;
						  var temp=[];
							temp=[...temp,s1[i],s2[j]];
							res=temp;
						}
				}
		}
	return res;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
