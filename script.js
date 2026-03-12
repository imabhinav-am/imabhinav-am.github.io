javascript
particlesJS("particles-js",{
particles:{
number:{value:60},
size:{value:3},
color:{value:"#38bdf8"},
line_linked:{enable:true,color:"#38bdf8"},
move:{speed:1}
}
})

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show")
}
})
})

document.querySelectorAll(".fade").forEach(el=>{
observer.observe(el)
})
