 function show() {
    document.getElementById("nombre2").textContent = localStorage.getItem('name3')
    document.getElementById("email2").value = localStorage.getItem('email3');
    document.getElementById("telefono2").value = localStorage.getItem('telefono3');
    document.getElementById("gusto2").value = localStorage.getItem('gusto');
    document.getElementById("prt2").value = localStorage.getItem('editprt');
}

show();