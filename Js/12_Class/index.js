addEventListener("mousemove",(ex)=>{
    document.body.style.setProperty("--x",ex.clientX +"px")
    document.body.style.setProperty("--y",ex.clientY +"px")
})