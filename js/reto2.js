   
   
 // Evento click
 let clickBtn = document.getElementById("clickBtn");
 clickBtn.addEventListener("click", function(){
   alert("¡Has hecho clic en el botón!");
 });

 // Evento change
 let textInput = document.getElementById("textInput");
 textInput.addEventListener("change", function(){
   let valor = textInput.value;
   alert(`El valor ha cambiado a: ${valor}`);
 });

 // Evento mouseover
 let mouseDiv = document.getElementById("mouseDiv");
 mouseDiv.addEventListener("mouseover", function(){
   mouseDiv.style.backgroundColor = "#ff9999";
 });
 mouseDiv.addEventListener("mouseout", function(){
   mouseDiv.style.backgroundColor = "#ffcc00";
 });

 // Evento keydown
 let keyInput = document.getElementById("keyInput");
 keyInput.addEventListener("keydown", function(event){
   alert(`Se ha presionado la tecla: ${event.key}`);
 });

 // Evento focus
 let focusInput = document.getElementById("focusInput");
 focusInput.addEventListener("focus", function(){
   focusInput.style.backgroundColor = "#ff9999";
 });

 // Evento blur
 let blurInput = document.getElementById("blurInput");
 blurInput.addEventListener("blur", function(){
   blurInput.style.backgroundColor = "#ffffff";
 });

 // Evento dblclick
 let dblClickBtn = document.getElementById("dblClickBtn");
 dblClickBtn.addEventListener("dblclick", function(){
   alert("¡Has hecho doble clic en el botón!");
 });

 // Evento dragstart
 let dragDiv = document.getElementById("dragDiv");
 dragDiv.addEventListener("dragstart", function(){
   alert("Has iniciado el arrastre del elemento");
 });

 // Evento scroll
 let scrollDiv = document.getElementById("scrollDiv");
 scrollDiv.addEventListener("scroll", function(){
   alert("Has desplazado el contenido del elemento");
 });

 // Evento resize
 window.addEventListener("resize", function(){
  alert("La ventana se ha redimensionado");
 });

 // Evento load
 window.addEventListener("load", function(){
   alert("La página y sus recursos se han cargado completamente");
 });