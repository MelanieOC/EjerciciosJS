//primer ejericio de numeros sucesivos fibonacci____
function f(n) {
  
  
   if(n ==0){
     return 0;
 } 
 else if (n ==1) {
   return 1;
 }else{
  
    return f(n-1)+ f(n-2);
 
 }
 }
 //llamar a la funcion 
//console.log (f(10));
//__________________________________________________
// ejercicio de lineas 
function e(n){
  var s = "";
  for (var i = 0 ;i < n; i++ ) s +=" ";
    return s ;
    
  }
function lineas(n){
  var s = "";
  for (var i = 0 ;i < n; i++ ) s +="*";
    return s ;
    
  }
function f(n,z){

  if(n == z){
    return lineas(n/3) + e(n/3) +lineas(n/3);
  }else{
   
    return f(n/3) + e(n/3) + f(n/3);

  }
}
var T = 4;
var n = 81;
var matriz =[[],[],[]];

console.log(lineas(n));
console.log(f(lineas,81));
console.log(f(lineas,27));
console.log(f(lineas,9));
console.log(f(lineas,3));
console.log(lineas(n));