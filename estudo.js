//alert('Oi, eu sou o alert!')
//console.log('Oi, eu estou no console');
//document.write('aula de PC');

var tabuada = 8;

function meChame(nome){
    document.write("<h1>Tabuada do " + tabuada + "</h1>");
    document.write(tabuada + " x 1 = "+(tabuada*1)+"<br>");
    document.write(tabuada + " x 2 = "+(tabuada*2)+"<br>");
    document.write(tabuada + " x 3 = "+(tabuada*3)+"<br>");
    document.write(tabuada + " x 4 = "+(tabuada*4)+"<br>");
    document.write(tabuada + " x 5 = "+(tabuada*5)+"<br>");
    document.write(tabuada + " x 6 = "+(tabuada*6)+"<br>");
    document.write(tabuada + " x 7 = "+(tabuada*7)+"<br>");
    document.write(tabuada + " x 8 = "+(tabuada*8)+"<br>");
    document.write(tabuada + " x 9 = "+(tabuada*9)+"<br>");
    document.write(tabuada + " x 10 = "+(tabuada*10)+"<br");
    document.write("Feita por " + nome);
    
}

function escreva(){
    for(var i = 1; i < 11; i++){
        document.write(tabuada + " x " + i + " = "+(tabuada*i)+"<br>");
    }
}

function quadrado(){
    for(var i = 2; i < 101; i++){
        document.write("O Quadrado de " + i + " é " + (i*i)+ "<br>")
    }
}
function total(){
  let valor = document.getElementById("val").value;
  let juros = document.getElementById("ju").value;
  let mes = document.getElementById("mes").value;
  let resultado = 0;
  for(let i = 1; i <= mes; ++){
       resultado += valor * (1+(juros/100) );
  }
  
  document.write("O resultado é " + resultado);
}
