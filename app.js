
const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

window.addEventListener("load", ()=>{
	grid.refreshItems().layout();
	document.getElementById("grid").classList.add("imagenes-cargadas");
	
	// filtrado por categorias (enlaces)

	const enlaces = document.querySelectorAll("#categorias a");

	enlaces.forEach((elemento)=>{
		elemento.addEventListener("click", (evento)=>{
			evento.preventDefault();

			enlaces.forEach((enlaces)=>enlaces.classList.remove("activo"));
			evento.target.classList.add("activo");
			
			// filtrar categorias
			const categoria = evento.target.innerHTML;
			categoria === "Todos" ? grid.filter("[data-categoria]") : grid.filter(`[data-categoria="${categoria}"]`);
		});
	});

	// listener para la barra de busquedas

	//????? en vez de query selector no es mejer get element by Id?
	document.querySelector("#barra-busqueda").addEventListener("input", (evento) => {
		const busqueda = evento.target.value;
		
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda));

	});

	// listener para las imagenes del overlay
	const overlay = document.getElementById("overlay");
	document.querySelectorAll(".grid .item img").forEach( (elemento)=>{
		

		elemento.addEventListener ("click", ()=>{
			const ruta = elemento.getAttribute("src");
			const indice = elemento.parentNode.parentNode.dataset.id;
			
			overlay.classList.add("activo");
			document.querySelector("#overlay img").src = ruta;
			document.querySelector("#overlay .description").innerHTML = `<h3 style="margin-bottom:10px;">${articles[indice].name}</h3> <h3 style="margin-bottom:10px;">$${articles[indice].precio}</h3> ${articles[indice].texto}   `;

		});				

	});



	// event listener del boton de cerrar

	document.getElementById("btn-cerrar-popup").addEventListener("click", ()=>{
		overlay.classList.remove("activo");

	});
	

	//event listener del overlay
	overlay.addEventListener ("click", (evento)=>{
		evento.target.id === 'overlay' ? overlay.classList.remove("activo") : "";
		

	});
});


// https://www.youtube.com/watch?v=42T31laI9Qs







