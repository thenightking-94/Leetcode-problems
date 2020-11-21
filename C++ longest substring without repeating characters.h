using namespace std;

string longestSubstringWithoutDuplication(string str) {
  if(str.size()==0)
             return 0;
        int i,j,l=str.size(),c,flag=0;
        string new_max="",max_substring="";
        
                    for(i=0;i<l;i++)
                    {
                        flag=0; new_max="";
                       for(j=i;j<l;j++)
                       {
                          
                           new_max+=str[j];
                           
//in this for loop we are not iterating till the current character
//rather we r checking for any prev ocurrence of the character before it is entered again
//if we check till current char then as soon as any character is entered the loop will break out
									 //becoz then it will always be found in new_max			 
                   //i am a genius sometimes, i need to document my code           
												 for(c=0;c<new_max.size()-1;c++)
                               {
                                   if(str[j]==new_max[c])
                                   {
																		 	
                                       flag=1;
                                       break;
                                   }
																
                               }
												 
                          
                               
                           
                           if(flag==1)
                           {
                              new_max.pop_back();
                               break;
                               
                           }         
                           
                           
                       }
                                       
                      //cout<<new_max<<endl;
                        if(max_substring.size()<new_max.size())
                        {
                            
                        max_substring=new_max;
                        
                        }
                     
                      }
        
        
        return  max_substring;
}
