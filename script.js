var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")


document.addEventListener("mousemove",function (dets) {
    crsr.style.left = dets.x +"px"
    crsr.style.top = dets.y +"px"
})

document.addEventListener("mousemove",function (dets) {
    blur.style.left = dets.x - 200 +"px"
    blur.style.top = dets.y - 200 +"px"
})



gsap.to("#nav",{
    backgroundColor: "#000",
    height :"100px",
    duration: 0.5,
    scrollTrigger:{
       trigger:"#nav",
       scroller: "body",
        markers: true,
        start:"top -20%",
        end:"top -21%",
        scrub:1
    }
})

gsap.to("#main", {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -30%",
        end:"top -70%",
        scrub:1
    }
})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })
})

gsap.from("#about-us img,about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
})
































































