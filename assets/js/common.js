document.addEventListener('DOMContentLoaded', () => {

    const lenis = new Lenis({
        // 추가된 부분
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    const html = document.querySelector('html');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
        html.classList.toggle('active');

        if (menu.classList.contains('active')) {
            gsap.to(hamburger, {
                duration: 0.5,
                x: 300,
            });
            gsap.to('.menu-list',{
                duration: 0.5,
                x: 45
            });
            overlay.classList.add('active');
        } else {
            gsap.to(hamburger, {
                duration: 0.5,
                x: 0,
            });
            gsap.to('.menu-list', {
                duration: 0.5,
                x: -200,
            });
            overlay.classList.remove('active');
        }
    });
    
    // 오버레이 클릭 시 메뉴 닫기
    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
        html.classList.remove('active');
        gsap.to(hamburger, {
            duration: 0.5,
            x: 0,
        });
        gsap.to('.menu-list', {
            duration: 0.5,
            x: -200,
        });
        overlay.classList.remove('active');
    });


    let splitTitle = new SplitType(".brand-title h1", {
        types: "chars, words",
        tagName: "span"
    });
    let TitleChar = splitTitle.chars;
    gsap.from(TitleChar, {
        autoAlpha: 0,
        duration: 1,
        stagger: {
            amount: 1.5,
            from : "random"
        },
    });

    gsap.from(".s2 .comm-inner_right", {
        y: 300,         
        opacity: 0,      
        duration: 3,    
        ease: "power2.out", 
        scrollTrigger: {
            trigger: ".s2",
            start: "top 45%",
            end: "+=400",    
            toggleActions: "play none none reverse", 
        }
    });

    let splitS2Title = new SplitType("#s2Title", {
        types: "chars, words",
        tagName: "span"
    });
    let s2TitleChar = splitS2Title.chars;

    gsap.from(s2TitleChar, {
        yPercent: 100,
        autoAlpha: 0,
        duration: 1,
        stagger: {
            amount: 1,
            from : "random"
        },
        scrollTrigger: {
            trigger: '.s2',
            start: "top 45%",
            end: "+=400",
        }
    });

    gsap.from(".s3 .comm-inner_right", {
        y: 300,         
        opacity: 0,      
        ease: "power2.out",  
        duration: 3,
        scrollTrigger: {
            trigger: '.s3',
            start: "top 45%",
            end: "+=400",  
            toggleActions: "play none none reverse", 
        }
    });


    let splitS3Title = new SplitType("#s3Title", {
        types: "chars, words",
        tagName: "span"
    });
    let s3TitleChar = splitS3Title.chars;

    gsap.from(s3TitleChar, {
        yPercent: 100,
        autoAlpha: 0,
        duration: 1,
        stagger: {
            amount: 1,
            from : "random"
        },
        scrollTrigger: {
            trigger: '.s3',
            start: "top 45%",
            end: "+=400",
        }
    });
});