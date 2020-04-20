function GetArgs(len){
  var args="(";
    for(var j=1;j<=len;j++){
		if(j==1){
		  args+='"1"';
		}
        else{
		   args+=',"1"';	
		}
      }
    args+=")";
	return args
}


functions=Object.keys(window).filter(function(x){return window[x] instanceof Function && !/\[native code\]/.test(window[x].toString());});
console.log("Functions: "+functions)
length=".length";
cmd="()";

for(var i=0;i<functions.length;i++){
 len=eval(eval("functions[i]+length"));
 
 while(len>-1){
   if(len==0){
     console.log("Executed: "+functions[i]+cmd)
     eval(eval("functions[i]+cmd"));
   }
   else{
     args=GetArgs(len);
	 console.log("Executed: "+functions[i]+args)
	 eval(eval("functions[i]+args"));
   }
   len--;
 }
}


