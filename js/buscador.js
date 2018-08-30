// var filtro = $("#table").Da

// $("#buscador-input").keyup(function(){
    
//     filtro.search($(this).val()).draw();
    
//     if ($("#buscador-input").val() == ""){
//         $(".contenedor-busqueda").fadeOut(300);
//     }else{
//         $(".contenedor-busqueda").fadeIn(300);
//     }
// })

function cargando(){
	var busqueda = document.getElementById('buscador-input');
	busqueda.addEventListener('keyup',filtro);
}

window.addEventListener('load',cargando)

function filtro(){
	
	var buscar = document.getElementById("buscador-input").value;
	var letra = new RegExp(buscar, 'i');
	let item = document.querySelectorAll("tbody>tr"); 

	for(let art of item){
		var articulo = art.firstElementChild.innerHTML;

		if(buscar.length > 0 ){
			if (articulo.search(letra) > -1 ) {
				art.style.display = "table-row";
			}
			else{
				art.style.display = "none";
			}
		}
		else{
			art.style.display = "table-row";
		}
	}
}