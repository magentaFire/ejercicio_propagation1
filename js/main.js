//variables globales
var botonNuevoTweet = document.getElementById("botonNuevoTweet");
var contadorClicksBoton = 1;

//Listeners
botonNuevoTweet.addEventListener("click", mainFunction);

//funcion princpipal
function mainFunction(){
  var tituloTweet = document.getElementById("tituloTweet");
  var nuevoTweet = document.getElementById("nuevoTweet");
  var nombreTweeterx = document.getElementById("nombreTweeterx");
  var contenedorNuevosTweets = document.getElementById("contenedorNuevosTweets");

  //creador de nuevos elementos
  var nuevoTituloTweet = document.createElement("h4");
  var nuevxTweeterx = document.createElement("h5");
  var nuevoArticulo = document.createElement("article");

  //creador de nuevos atributos
  nuevoArticulo.id = "articulo" + contadorClicksBoton;
  nuevxTweeterx.id = "tweeterx" + contadorClicksBoton;
  nuevoTituloTweet.id = "nuevoTituloTweet" + contadorClicksBoton;

  //appends
  contenedorNuevosTweets.appendChild(nuevoTituloTweet);
  contenedorNuevosTweets.appendChild(nuevxTweeterx);
  contenedorNuevosTweets.appendChild(nuevoArticulo);

  //escribe contenido en los nuevos elementos
  document.getElementById("nuevoTituloTweet" + contadorClicksBoton).innerText = tituloTweet.value;
  document.getElementById("tweeterx" + contadorClicksBoton).innerText = "creado por : " + nombreTweeterx.value;
  document.getElementById("articulo" + contadorClicksBoton).innerText = nuevoTweet.value;
  contadorClicksBoton += 1;
}
