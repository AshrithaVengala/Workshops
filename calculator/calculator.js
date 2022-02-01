// function dis(val){
//     document.getElementById("result").value+=value;
// }
// function solve(){
//     var res1=document.getElementById("result").value;
    
//     document.getElementById("result").value=res2;

// }
// function clr(){
//     document.getElementById("result").value="";
// }


function backSpace(calc){
    size=calc.display.value.length;
    calc.display.value=calc.display.value.substring(0,size-1);


}
function calculate(calc){
    if(calc.display.value.includes("%")){
        size=calc.display.value.length;
        n=Number(calc.display.value.substring(0,size-1));
        calc.display.value=n/100;

    }else{
        calc.display.value=eval(calc.display.value);
    }
}