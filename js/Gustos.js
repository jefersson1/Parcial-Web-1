

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('myParam');
    var name3 = getElementById('name');    
    var email3 = getElementById('email');
    var telefono3 = getElementById('telefono');    
    var gusto = getParameterByName('gusto');
    var porcentaje = getParameterByName('porcentaje');
    var x = document.getElementById("form");
    x.addEventListener("focusin", myFocusFunction);
    x.addEventListener("focusout", myBlurFunction);
    

function agregarFila(){
    var texto1 = document.getElementById("gustoin");
    if(texto1.value === ""){
    
    alert("Casilla vacia")
    
    }
    else{
        document.getElementById("tbl").insertRow(-1).innerHTML = `<tr><td id="NombreG" name="gustos">${texto1.value}</td><td name="porcentaje">0</td><td><span class="editar" onclick="transformarEditable(this)">Edit</span></td></tr>`;
        texto1.value = "";
    }

}

function transformarEditable(fila)
    {
        var editando = false;

        document.getElementById("invisible").style.visibility = "visible";

        if(editando == false)
        {   
            var nodetr= fila.parentNode.parentNode;
            var nodestr= nodetr.getElementsByTagName('td');
            var form= document.getElementById('formulario');
            var Gusto=nodestr[0].firstChild.nodeValue;
            var porcentaje=nodestr[1].firstChild.nodeValue
            var codigohtml='<td ><input id="editname"  type="text" name="gusto"  value="'+Gusto+'"></td>'+
         '<td><input type="text" name="porcentage" id="editprt" value="'+porcentaje+'"></td>'+'<td><span class="ediccion">En edicion</span></td>';
        }
        nodetr.innerHTML=codigohtml;
        document.getElementById("editname").style.maxWidth = "40px";
        document.getElementById("editprt").style.maxWidth = "40px";
        editando=true;
    }

function Cancelar(){
    window.location.reload();
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function myFocusFunction() {
document.getElementById("gus").style.borderWidth = "2px 2px 2px 0px";

}

function myBlurFunction() {
gus.style.borderWidth = "2px 2px 2px 2px"; 
}

function enviar_formulario(){
    
    localStorage.setItem('name3',document.getElementById('name').value)
    localStorage.setItem('email3',document.getElementById('email').value)
    localStorage.setItem('telefono3',document.getElementById('telefono').value)
    localStorage.setItem('gusto',document.getElementById('editname').value)
    localStorage.setItem('editprt',document.getElementById('editprt').value) 

    document.formulario1.submit()
 }

