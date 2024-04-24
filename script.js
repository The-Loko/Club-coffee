// Check if the device is a mobile device
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Run the animations only if it's not a mobile device
if (!isMobile) {
    var tl = gsap.timeline({scrollTrigger:{
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true,
    }});
    
    tl.to("#fanta",{
        top: "100%",
        left: "0%"
    }, 'orange');
    tl.to("#orange-cut",{
        top:"160%",
        left: "23%"
    }, 'orange');
    tl.to("#orange",{
        width: "15%",
        top:"165%",
        right: "10%"
    }, 'orange');
    tl.to("#leaf",{
        top:"110%",
        rotate: "130deg",
        left: "70%"
    }, 'orange');
    tl.to("#leaf2",{
        width: "40%",
        top:"110%",
        rotate: "130deg",
        left: "0%"
    }, 'orange');


    var tl2 = gsap.timeline({scrollTrigger:{
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
        // markers: true,
    }});

    tl2.from(".lemon1",{
        rotate: "-90deg",
        left: "-100%",
        top: "110%"
    }, 'ca');
    tl2.from("#cocacola",{
        rotate: "-90deg",
        top: "110%",
        width: "2%",
        left: "-100%",
    }, 'ca');

    tl2.from(".lemon2",{
        rotate: "90deg",
        left: "100%",
        top: "110%"
    }, 'ca');
    tl2.from("#pepsi",{
        rotate: "90deg",
        width: "2%",
        top: "110%",
        left: "100%",
    }, 'ca');

    tl2.to("#orange-cut",{
        width:"18%",
        left: "42%",
        top: "204%"
    }, 'ca');
    tl2.to("#fanta",{
        width:"30%",
        top: "202%",
        left: "35%",
    }, 'ca');
}
