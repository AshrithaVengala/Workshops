function onFormSubmit(){
    var formData=readFormData();
    insertRecord(formData);
    resetForm();


}
function readFormData(){
    var formData={};
    formData["name"]=document.getElementById('name').value;
    formData["author"]=document.getElementById('author').value;
    formData["price"]=document.getElementById('price').value;
    return formData;

}
function insertRecord(data){
    var table=document.getElementById("bookList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.name;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.author;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.price;
    cell3=newRow.insertCell(3);
    cell3.innerHTML="<a>Edit</a> <a>Delete</a>";
}
function  resetForm(){
    document.getElementById('name').value="";
    document.getElementById('author').value="";
    document.getElementById('price').value="";


}
function onEdit(td){
    selectedRow=td.parentelement.parentelement;
    document.getElementById("name").value=selectedRow.cells[0].innerHTML;
    document.getElementById("author").value=selectedRow.cells[1].innerHTML;
    document.getElementById("price").value=selectedRow.cells[2].innerHTML;
}