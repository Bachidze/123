const h1 = document.querySelector('h1')
const pluss = document.querySelector('.add')
const minus = document.querySelector('.delete')
const reset = document.querySelector('.reset')

let count = 0
h1.innerHTML = 0

pluss.addEventListener('click',()=>{
 count ++
 h1.innerHTML = count

    console.log('dd')
})
minus.addEventListener('click',()=>{
 count --
 h1.innerHTML = count

    console.log('dd')
})
reset.addEventListener('click',()=>{
 count = 0
 h1.innerHTML = count

    console.log('dd')
})



