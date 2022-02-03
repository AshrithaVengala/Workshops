
var veggies=["carrot","broccoli","Cabbage","leefy"];
function  search(){
    var inputValue=document.getElementById('input').value;
   alert(inputValue);
    var flg=false;
    for(var i=0;i<veggies.length;i++){
        if(inputValue===veggies[i]){
            flg=true;

        }
    }
    if(flg===false){
        var div=document.getElementById('msg');
        div.setAttribute("class"," alert alert-danger");
        div.innerHTML="your search item is not available ";
       

    }
}