let num = document.getElementById('input')
let check = document.getElementById('button')
let capibara = document.querySelector('.capibara')
const h3Title = document.querySelector('h3')

capibara.style.opacity = '0.1'

function primeCheck (num1) {
    if (num1>0) {
        if (num1 == 1) {
            h3Title.style.color ='red'
            capibara.style.opacity = '0.1'
            return `1 IS NOT A PRIME!`
        }
    
        else if (num1 == 2){
            h3Title.style.color = 'darkblue'
            capibara.style.opacity = '0.9'
            return `2 IS A PRIME!`
        }
        
        else {
            for (let i=2; i<=(num1/2); i++) {
               if ((num1%i) == 0) {
                   h3Title.style.color = 'darkgreen'
                   capibara.style.opacity = '0.1'
                   return `${num1} IS A COMPOSITE!`
                }
              
            }
            h3Title.style.color = 'darkblue'
            capibara.style.opacity = '0.9'
            return `${num1} IS A PRIME!`
    }
    }

  else {
    h3Title.style.color = 'red'
    return `ERROR`
  }
}


check.addEventListener('click', function(){
    let answer = document.getElementById('output')
    answer.innerHTML = primeCheck(num.value)
}
)