function Calcular(){
var peso = document.getElementById("txtPeso").value;
var altura = document.getElementById("txtAltura").value;
var resultado = peso/(altura*altura);
var sexo = document.getElementById("txtsexof", "txtsexom");

if(isNaN(resultado)){
   
   document.getElementById("txtPeso").value="Valor Inválido";
   document.getElementById("txtAltura").value="Valor Inválido";
   document.getElementById("txtResultado").value="Valor Inválido";
   document.getElementById("txtMensagem").value="Valor Inválido";
}

else{

   if(sexo.checked==true){
      if(resultado<=19){
         document.getElementById("txtResultado").value= resultado;
         document.getElementById("txtMensagem").value="Abaixo do Peso! Come mais e faça bastante exercícios!";
      }
       else if(resultado<=24){
         document.getElementById("txtResultado").value= resultado;
         document.getElementById("txtMensagem").value="Peso Normal! Parabéns você está no seu peso ideal!";
      }
      else if(resultado<=29){
         document.getElementById("txtResultado").value= resultado;
         document.getElementById("txtMensagem").value="SobrePeso! feche a boca e faça mais exercícios!";
      }
      else if(resultado<=39){
         document.getElementById("txtResultado").value= resultado;
         document.getElementById("txtMensagem").value="Obesidade Moderada! Tome cuidado com a sua saúde!";
      }
      else{
         document.getElementById("txtResultado").value= resultado;
         document.getElementById("txtMensagem").value="Obesidade Mórbida! Vai fazer cirurgia bariátrica ou sua saúde vai piorar!";
        
      }
   }
      else if(sexo.checked==false){
         if(resultado<=20){
            document.getElementById("txtResultado").value= resultado;
            document.getElementById("txtMensagem").value="Abaixo do Peso! Come mais e faça bastante exercícios!";
            
         }
          else if(resultado<=25){
            document.getElementById("txtResultado").value= resultado;
            document.getElementById("txtMensagem").value="Peso Normal! Parabéns você está no seu peso ideal!";
           
         }
         else if(resultado<=30){
            document.getElementById("txtResultado").value= resultado;
            document.getElementById("txtMensagem").value="SobrePeso! feche a boca e faça mais exercícios!";
          
         }
         else if(resultado<=40){
            document.getElementById("txtResultado").value= resultado;
            document.getElementById("txtMensagem").value="Obesidade Moderada! Tome cuidado com a sua saúde!";
          
         }
         else{
            document.getElementById("txtResultado").value= resultado;
            document.getElementById("txtMensagem").value="Obesidade Mórbida! Vai fazer cirurgia bariátrica ou sua saúde vai piorar!";
           
         }
      }
   }

}
  
