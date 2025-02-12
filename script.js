// Dom selector daraxtning ildizi
// const dr = document.getElementById('text')
// const br = document.querySelector('.h1')
// const all = document.querySelectorAll('p')

// let h1 = document.querySelector('h1')
// let input = document.getElementById('text')
// let p1 = document.querySelectorAll('p')
// input.addEventListener('input', () => {
//     h1.innerHTML=input.value; 
//     p1.forEach(item => {
//         item.innerHTML = input.value;
//     })
// })
// let a=20, b=10
// console.log(a+b)

// let = a=5, b=10, c=5
// console.log(a==c)
// console.log(a===c)
// console.log(a!=b)
// console.log(a>=b)

function createStars(){
    const container = document.querySelector("body");
    for(let i=0; i<1000; i++){
        const star = document.createElement("div");
        star.className = "star";
        star.style.width = ".1px"
        star.style.height = ".1px"

        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%"
    
        container.appendChild(star)

    }
}
createStars();

























