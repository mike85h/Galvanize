var ccList = ['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260'] ;
//document.write(ccList);


function ccGreatest(ccArray){
  //initialize placeholder for the max sum and it's index in ccList[]
  var maxSum = -1;
  var maxIndex = ccArray[0]
  //initialize and cache array length
  var arrLength = ccArray.length
 
  //loop through credit card numbers and split each one into an array of chars
  for(var i = 0; i < arrLength; i++){
    var sum = 0;
    var arrHolder = ccArray[i];
    arrHolder = arrHolder.split("");
    //document.write(arrHolder);
    
    //loop through array of chars to add nums and ignore dashes
    for(var i2 = 0; i2 < arrHolder.length; i2++){
      var charHolder = arrHolder[i2];
        
        if(charHolder == '-'){
          //do nothing
        }
        else{
          charHolder = parseInt(charHolder);
          sum = sum + charHolder;
        }
      
    }//ends loop through chars
  
    if (sum > maxSum){
      maxSum = sum;
    }
    
    if (i >= 0) {
      maxIndex = ccArray[i];
    }
  
  }//bracket ends outside loop
  return maxIndex;
  
}//bracket ends ccGreatest outer function
ccGreatest(ccList);
