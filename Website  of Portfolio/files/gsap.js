gsap.from("#homepage-main", {
    y: 70,
    duration: 0.6,
    opacity: 0,
    delay: 1,
    yoyo: true,
})

gsap.from(".submid-2 .box1", {
    x: 150,
    duration: 0.6,
    opacity: 0,
    delay: 0.4,
    scrollTrigger: {
        trigger: ".submid-2",
        scoller: "body",
        // markers: true,
        start: "top 280px",
    }
})

gsap.from(".submid-2 .box2", {
    y: 100,
    duration: 0.6,
    opacity: 0,
    delay: 1.5,
    scrollTrigger: {
        trigger: ".submid-2",
        scoller: "body",
        // markers: true,
        start: "top 280px",
    }
})

gsap.from(".submid-2 .box3", {
    y: 100,
    duration: 0.6,
    opacity: 0,
    delay: 1,
    scrollTrigger: {
        trigger: ".submid-2",
        scoller: "body",
        // markers: true,
        start: "top 280px",
    }
})
gsap.from(".submid-2 .box4", {
    x: -100,
    duration: 0.6,
    opacity: 0,
    delay: 2,
    scrollTrigger: {
        trigger: ".submid-2",
        scoller: "body",
        // markers: true,
        start: "top 280px",
    }
})

gsap.from(".sec-img", {
    y: 110,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".sec-img",
        scroller: "body",
        // markers: true,
        start: "top 480px",
    }
})
gsap.from(".sec-img2", {
    y: 110,
    duration: 0.4,
    opacity: 0,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".sec-img",
        scroller: "body",
        // markers: true,
        start: "top 480px",
    }
})
gsap.from(".sec-img3", {
    y: 110,
    duration: 0.5,
    opacity: 0,
    delay: 1,
    scrollTrigger: {
        trigger: ".sec-img",
        scroller: "body",
        // markers: true,
        start: "top 480px",
    }
})
gsap.from(".sec-img4", {
    y: 110,
    duration: 0.5,
    opacity: 0,
    delay: 1.5,
    scrollTrigger: {
        trigger: ".sec-img",
        scroller: "body",
        // markers: true,
        start: "top 480px",
    }
})
gsap.from(".btn-three", {
    x: -110,
    rotate: "360deg",
    duration: 0.5,
    opacity: 0,
    delay: 1.4,
    scrollTrigger: {
        trigger: ".btn-three",
        scroller: "body",
        // markers: true,
        start: "top 500px",
    }
})

gsap.from(".blog-portion h5", {
    y:80,
    duration:0.5,
    opacity:0,
    scrollTrigger: {
        trigger: ".blog-portion",
        scroller: "body",
        // markers: true,
        start: "top 490px",
    }
})
gsap.from(".blog-portion h2", {
    y:80,
    duration:0.5,
    opacity:0,
    delay:0.5,
    scrollTrigger: {
        trigger: ".blog-portion",
        scroller: "body",
        // markers: true,
        start: "top 490px",
    }
})