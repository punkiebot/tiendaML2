// arreglo de objetos con los items

const articles = [
	{
		id: 0,
		name: "Servomotor SG90",
		precio: "5.399",		
		img: "./images/servo-sg90-1.JPG",
		dataCategoria: "Motores",
		dataEtiquetas: "servo sg90",
		visible: "yes",
		texto: `<p>Este servo es ideal para iniciarse en proyectos de robótica, con el podemos posicionar objetos en un ángulo de hasta 180 grados</p>
		
		<h4>Caracteristicas</h4>
		
		<p> <span>&#8226</span> Gris oscuro: GND</p>
		<p> <span>&#8226</span> Rojo: VCC 4.8-7.2V</p>
		<p> <span>&#8226</span> Naranja: entrada de pulso</p>
		
		
		<h4>Datos técnicos</h4>
		<p> <span>&#8226</span>  Tamaño (mm): 21.5x11.8x22.7</p>
		<p> <span>&#8226</span> Peso: 9 gramos</p>
		<p> <span>&#8226</span> Velocidad sin carga: 0.12 segundos / 60 grados (4.8V)</p>
		<p> <span>&#8226</span> Par de parada de 1.2 - 1.4 kg / cm (4.8V)</p>
		<p> <span>&#8226</span> Temperatura de funcionamiento: -30 a +60 grados Celsius</p>
		<p>  <span>&#8226</span> Dead-set: 7 microsegundos</p>
		<p>  <span>&#8226</span> Voltaje de funcionamiento: 4.8V-6V</p>
		`
	},

	{
		id: 1,
		name: "Modulo Bluetooth HC-06",
		precio: "12.999",		
		img: "./images/bluetooth-hc06.JPG",
		dataCategoria: "Modulos",
		dataEtiquetas: "bluetooth modulo modulos",
		visible: "yes",

		texto: `

			<p> El módulo de bluetooth HC-06 ofrece una excelente relación de precio y características; es un módulo esclavo lo que quiere decir que puede recibir conexiones desde un PC, tablet o cualquier dispositivo bluetooth. Esto nos permite por ejemplo diseñar aplicaciones inalámbricas para recibir datos usando plataforma Arduino o microcontroladores. </p>

			<h4>ESPECIFICACIONES TÉCNICAS </h4>
			<p> <span>&#8226</span> Referencia: HC06  </p>
			<p> <span>&#8226</span> Pines: 4 (RXD, TXD, GND, VCC) </p>
			<p> <span>&#8226</span> Versión bluetooth: 2.0 +EDR </p>
			<p> <span>&#8226</span> Frecuencia: 2.4Ghz </p>
			<p> <span>&#8226</span> Potencia: Clase 2 </p>
			<p> <span>&#8226</span> Puerto de comunicación: UART/USB </p>
			<p> <span>&#8226</span> Voltaje de operación 3.3V </p>
			
			<p> <span>&#8226</span> Dimensiones: 4.4 x 1.5 x 0.2 cm </p>
			<p> <span>&#8226</span> Peso: 13 g </p>` 
	},


		{
		id: 2,
		name: "Motor Reductor + Rueda",
		precio: "9.500",		
		img: "./images/llantas.JPG",
		dataCategoria: "Modulos",
		dataEtiquetas: "llanta rueda motoreductor moto reductor modulos",
		visible: "yes",

		texto: `
<p> Motorreductor plástico (motor de engranajes) tipo T (doble eje) compatible con llantas de 65mm. <p>

<p> Perfecto para Proyectos de robótica <p>

<h4>ESPECIFICACIONES GENERALES </h4>

<p> <span>&#8226</span> Voltaje de operación de 3v hasta 12v con RPM entre 80 y 300, cuenta con caja reductora plástica. </p>

<p> <span>&#8226</span> Voltaje de operación: 3v-12v (recomendado 6v-9v) </p>

<p> <span>&#8226</span> Velocidad: 3v = 80 rpm / 5v=120 rpm / 9v= 300 rpm </p>

<p> <span>&#8226</span>Torque máximo: 2 kg/cm </p>

<p> <span>&#8226</span> Consumo: 80-100 mA </p>

<p> <span>&#8226</span> Caja reductora plástica: 1:48 </p>

<p> <span>&#8226</span> tamaño de la rueda: 65x26mm </p>

<h4>EL PAQUETE CONTIENE: </h4>

<p> <span>&#8226</span>Un Motor Reductor </p>
<p> <span>&#8226</span>Una rueda   </p>
`
	},


{
		id: 3,
		name: "Control Snes Usb Retropie Raspberry Pi Y CD Con +400 Roms",
		precio: "23.000",		
		img: "./images/control-snes.JPG",
		dataCategoria: "Videojuegos",
		dataEtiquetas: "control snes usb raspberry pi",
		visible: "yes",
		texto: `
		
<p>Puedes utilizarlos en: </p>
<p>- Mini-consola de videojuegos retro  </p>
<p>- PC Windows  </p>
<p>- Mac Os  </p>
<p>- Linux  </p>
<p>- Android (solo emuladores) algunos juegos touch  </p>
<p>- Android tvbox (solo emuladores) algunos juegos touch  </p>

<h4>Características: </h4>
<p>Medida del cable: 140 cm. <p>
<p>Cantidad de botones: 8 <p>
<p>Plug and Play <p>
<p>Utilizadas también con consolas de juego diseñadas con Raspberry Pi <p>

<h4> OBSEQUIO  </h4> 


<p> CD con más de 400 roms de juegos de SNES </p>

<p> Algunos de los juegos son: </p>

<br>
<p> <span>&#8226</span>Super Mario Kart  </p> 
<p> <span>&#8226</span>Super Mario RPG - Legend of the Seven Stars  </p> 
<p> <span>&#8226</span>Super Mario World  </p> 
<p> <span>&#8226</span>Super Mario World 3  </p> 
<p> <span>&#8226</span>Super Mario World Hell Edition  </p> 
<p> <span>&#8226</span>Super Mario World Winter  </p> 

<br>
<p> <span>&#8226</span>Yoshi's Cookie  </p> 
<p> <span>&#8226</span>Yoshi's Safari  </p> 
<p> <span>&#8226</span>Top Gear  </p> 
<p> <span>&#8226</span>Addams Family, The - Pugsley's Scavenger Hunt  </p> 
<p> <span>&#8226</span>Adventures of Batman & Robin  </p> 
<p> <span>&#8226</span>Aladdin  </p> 
<p> <span>&#8226</span>Animaniacs  </p> 
<br>
<p> <span>&#8226</span>Asterix & Obelix  </p> 
<p> <span>&#8226</span>Batman - Revenge of the Joker  </p> 
<p> <span>&#8226</span>Batman Forever </p> 
<p> <span>&#8226</span>Batman Returns  </p> 
<p> <span>&#8226</span>Dragon's Lair  </p> 
<p> <span>&#8226</span>FIFA 98 - Road to World Cup  </p> 
<p> <span>&#8226</span>International Superstar Soccer  </p> 
<p> <span>&#8226</span>James Bond Jr  </p> 
<p> <span>&#8226</span>Jurassic Park Part 2  </p> 
<p> <span>&#8226</span>Jungle Book  </p> 
` 
	},


]



const divsCreados = document.getElementById("grid");
divsCreados.innerHTML = "";


for (let i=0; i< articles.length; i++){

	
	divsCreados.innerHTML += `

		<div class="item"
		data-categoria = "${articles[i].dataCategoria}"
		data-etiquetas = "${articles[i].dataEtiquetas}"	
		data-id=${i}
		>
          <div class="item-contenido">
            <img src="${articles[i].img}" alt="" />
          </div>
          <div class="item-description">

		  <p>${articles[i].name}</p>
            <p>COP $${articles[i].precio}</p>
          </div>
		</div>`;	
}

/// just kidding for the 3rd time