function creaCampos() {

	var obj_div=document.getElementById('contenedor_campo');


	var texto=document.createElement("input");
	texto.id="nombre"
	texto.onblur=validarnombre;
	obj_div.appendChild(texto);

	 
}
function validarnombre(){

	var obj_div= document.getElementById('nombre').value;
	var obj_aviso = document.getElementById('contenedor_aviso');

	if (obj_div.length < 4) {

		obj_aviso.className="alert alert-danger";
		obj_aviso.innerHTML="Error tiene menos de 4 caracteres"
	}
	else{
		obj_aviso.className="alert alert-success";
		obj_aviso.innerHTML="CORRECTO"
	}

}