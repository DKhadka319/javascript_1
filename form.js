

function calc1(n1,n2)
{ // var n1 = parseInt(document.getElementById('n1').value);
//var n2 = parseInt(document.getElementById('n2').value); 
   
 var n3=n1+n2;
 
 //document.getElementById('finalresult').innerHTML=n3;
    return n3;
}
function sum3(n1, n2){//Receive two values
    var n3 = n1 + n2 ;
    //console.log(n3)
    return n3; //return the result
}
//can use parseFloat or parseInt

function out(){
    var a = parseFloat(document.getElementById('sub1').value);
    var b = parseFloat(document.getElementById('sub2').value);
    var c = parseFloat(document.getElementById('sub3').value);
    var d =a+b+c;
    var e=d/3
    document.getElementById('total').innerHTML=d;
   
    document.getElementById('avg').innerHTML=e;
    var f=document.getElementById('final11');
  var f=e
    if(e>=40){
    
       console.log("pass").innerHTML=f;
;    }
    else{
        console.log("fail");
    }
    
    
    
    
    //cal result 
    
  
       

}
/*var English = parseInt(prompt("Enter English Marks"));
//var Maths = parseInt(prompt("Enter Maths Marks"));
var Physics = parseInt(prompt("Enter Physics Marks"));

function Percentage(num1, num2, num3) {
    var x = num1 + num2 + num3;
    var z = Math.floor(x / 300 * 100) //percentage formula
    return z;
} document.getElementById('final11').value=((a+b+c)*100)/300+"%";

var Total = Percentage(English, Maths, Physics);
document.write("Total Percentage is :" + Total + "%")*/
//document.getElementById('finalresult').innerHTML=n1+n2; 