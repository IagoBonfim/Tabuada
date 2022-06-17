function gerarTabuada(){
    let num = document.querySelector('#txtnumero')
    let numConv = Number(num.value)
    let tipo = document.getElementsByName('cxtipo')
    let res = document.querySelector('#res')
   
    if(num.value.length == 0){
        alert("Selecione um número para iniciar!")
    }else{
        res.innerHTML = ""
        res.style.font = "normal 15px sans-serif"
        res.style.textAlign = "left"
        for(let t of tipo){
            if(tipo[0].checked){
                for(let n=0; n<=10; n++){
                    let result = numConv + n
                    res.innerHTML += `<p> ${numConv} + ${n} = ${result}</p>`
                 }
                 return
                }else if(tipo[1].checked){
                    for(let n=0; n<= 10; n++){
                     let result = numConv - n
                        res.innerHTML += `<p>${numConv} - ${n} = ${result.toFixed(1)}</p>`
                    }
                    return     
           }else if(tipo[2].checked){
                for(let n=0; n<= 10; n++){
                    let result = numConv * n
                    res.innerHTML += `<p>${numConv} * ${n} = ${result}</p>`
                }
                return
            }else if(tipo[3].checked){
                 for(let n=0; n<= 10; n++){
                    let result = numConv / n
                    if(n == 0){
                        result = 0
                    }
                    res.innerHTML += `<p>${numConv} / ${n} = ${(result).toFixed(1)}</p>`
               }
               return
            }      
        }
    }
}