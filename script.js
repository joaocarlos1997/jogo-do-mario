const [ mario , pipe , restart ]=[ '.mario' , '.pipe' , '.restart' ].map((item) => {
    return document.querySelector(item)
})

const jump = () => {
    mario.classList.add("jump")
setTimeout(() => {
    mario.classList.remove("jump")
},500 )
}
const  loop = setInterval(() => {
const pipeposition = pipe.offsetLeft;
const marioposition = +window.getComputedStyle(mario).bottom.replace("px", "")
console.log(typeof marioposition)

if (pipeposition <= 100 && pipeposition > 0 && marioposition < 80){
    pipe.style.animation = "none";
    pipe.style.left = `${pipeposition}px`


    mario.style.animation = "none";
    mario.style.bottom = `${marioposition}px`

    mario.src = "img/game-over.png"
    mario.style.width = "100px"
    mario.style.marginleft = "25px"

    clearInterval(loop)
}

},10)

restart.addEventListener('click',() => {
    location.reload(true)
})


document.addEventListener("keydown", jump)
