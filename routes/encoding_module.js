var arr=[];
function init(){
  for(i=65;i<91;i++){
    var ch=String.fromCharCode(i);
    arr.push(ch);
  }
  for(i=97;i<123;i++){
    var ch=String.fromCharCode(i);
    arr.push(ch);
  }
  for(i=0;i<10;i++){
    arr.push(i);
  }
}

init();


module.exports=function en62(s){
  var count=0;
  for(i=0;i<s.length;i++){
    count+= s[i].charCodeAt(0);
  }
  var res="";
  console.log(count)
  while (count!=0){
    res=arr[count%62]+res;
    count=parseInt(count/62);
  }
  return(res);

}
