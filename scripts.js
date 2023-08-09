function generateNumber(){

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    console.log(min, max)
    
  if ( min >= max){
    alert("O Valor MÍNINO tem que ser menor que o valor máximo")


  } else {
    const result = Math.floor(Math.random() * (max - min + 1)) + min
    // alert(result)
    sorteio.innerHTML = result

  }



    
  

}
const sorteio = document.querySelector(".generato")

