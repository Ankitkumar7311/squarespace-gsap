var tl = gsap.timeline()
tl.from("#nav-part1,#nav-part2,#nav-part3,#text",{
    y:-100,
    delay:0.4,
    duration:0.8,
    opacity:0,
    stagger:0.4

});

tl.from("#h5",{
    y:80,
    yoyo:true,
    repeat:-1,
    opacity:0,
    duration:0.4
})
tl.from("#image2",{
    x:-100,
    opacity:0,

})
tl.from("#image3 img",{
    x:400,
    opacity:0,

})

