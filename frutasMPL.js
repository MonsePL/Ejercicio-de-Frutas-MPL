
function agregarLi(){
    var texto=document.getElementById('liname').value;
    var li=document.createElement('LI');
    li.innerHTML=texto==''?'(frutita sin nombre)':texto;
    document.getElementById('lista').appendChild(li);
}
