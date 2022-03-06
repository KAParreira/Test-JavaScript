
 var Linhas = prompt("Digite o numero de linhas da matriz");
 var Colunas = prompt("Digite o numero de colunas da matriz");
 alert("criar uma matriz de " + Linhas + " linhas por " + Colunas + "colunas.");
 
 var Matriz2 = [];
 
	for (var i=0; i< Linhas; i++) {
		 Matriz2[i] = [];
		for (var j = 0; j< Colunas; j++){
			Matriz2[i][j] = '';
		}
	}
	 
	for (var L = 0; L < Linhas; L++){
	   for(var C = 0; C < Colunas; C++){
		  Matriz2[L][C] = prompt("Digite um valor para inserir na matriz:");
		}
	} 	 
	
 var Valores2 = '';
	for (var L = 0; L < Linhas; L++){
	   for(var C = 0; C < Colunas; C++){
		   if(C < Colunas - 1){
			  Valores2 += Matriz2[L][C] + " - ";
			}
			else {
			  Valores2 += Matriz2[L][C] + "\n";
			}   
		}
	}
	
 alert("conteudo da matriz2:\n" + Valores2);
    
	 document.write(Valores2); 
 
function funfun() {

	document.getElementById("drop").classList.toggle("show");

}

window.onclick = function (event) {

	if (!event.target.matches('.dropbut')) {

		var dropdowns = document.getElementsByClassName("dropMenu");
		var i;
		for (i = 0; i < dropdowns; i++) {
			var open = dropdowns[i];
			if (dropdowns.classList.contains('show')) {
				open.classList.remove('show');
			}
		}
	}
}

function myFunction() {
	const myCollection = document.getElementsByClassName("box");
	for (let i = 0; i < myCollection.length; i++) {
		myCollection[i].style.backgroundColor = "#00BFFF";
	}
}

function myFunction1() {
	const myCollection = document.getElementsByClassName("box");
	for (let i = 0; i < myCollection.length; i++) {
		myCollection[i].style.backgroundColor = "#4B0082";
	}
}

function myTest() {
	var myCh = document.getElementById('boxNi');
	if (myCh.style.display === 'none') {
		myCh.style.display = 'block';
	} else {
		myCh.style.display = 'none';
	}

}

function changeBg(color){
	change = document.getElementById("change").style.color = color;
}





