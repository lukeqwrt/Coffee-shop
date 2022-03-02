const trigger_bar = document.querySelector('#trigger_bar')
const list = document.querySelector('.list')

const toggle = document.querySelector('#darkMode_toggle')
const main = document.querySelector('.main')
// const nav = document.querySelector('.nav_container')
const bg = document.querySelectorAll('[dataBg]')
const fontsColor = document.querySelectorAll('[fontCOLOR]')
const navFonts = document.querySelectorAll('[navFonts]')
const navBg = document.querySelectorAll('[navBg]')
const fontsDarkmode = document.querySelectorAll('[fontsDarkmode]')
const navli = document.querySelectorAll('[navli]')
const listbg = document.querySelectorAll('[listbg]')

const aboutit = document.querySelectorAll('[allthemehFonts]')
const moon = document.querySelector('#moon')
const sun = document.querySelector('#sun')
trigger_bar.addEventListener('click', () => {
    list.classList.toggle('list_active')
})



window.addEventListener("scroll", function(){
    var header = document.querySelector('.navigation_container');
    header.classList.toggle("sticky", window.scrollY > 0)
    if(window.scrollY > 0){
        navFonts.forEach(i => {
            i.style.color = "#000"
        })
        // console.log(header.parentElement)
        if(header.parentElement.classList.contains('darkMode')){
            navBg.forEach(i => {
                i.style.background = "#362d27"
            })
            navFonts.forEach(i => {
                i.style.color = "#fff"
            })
            navli.forEach(i => {
                i.style.color = "#fff"
            })
            sun.style.display = "block"
            moon.style.display = "none"
        }else{
            navBg.forEach(i => {
                i.style.background = "#fff"
            })
            navFonts.forEach(i => {
                i.style.color = "#000"
            })
            navli.forEach(i => {
                i.style.color = "#000"
            })
            sun.style.display = "none"
            moon.style.display = "block"
        }
    }else{
        navFonts.forEach(i => {
            i.style.color = "#fff"
        })
        navBg.forEach(i => {
            i.style.background = "none"
        })
        if(window.innerWidth > 768){
            navli.forEach(i => {
                i.style.color = "#fff"
            })
        }
        // if(main.classList.contains('darkMode')){
        //     aboutit.style.color = "#fff"
            
        // }else{
            
        //     aboutit.style.color = "#000"
        // }
            //  navli.forEach(i => {
            //     i.style.color = "#fff"
            // })
        
    }
})


toggle.addEventListener('click' , () => {
    main.classList.toggle('darkMode')
    if(main.classList.contains('darkMode')){
        sun.style.display = "block"
        moon.style.display = "none"

        aboutit.forEach(i => {
            i.style.color = "white"
        })
    }else{
        sun.style.display = "none"
        moon.style.display = "block"

        aboutit.forEach(i => {
            i.style.color = "black"
        })
    }


    if(window.scrollY > 0){
        if(main.classList.contains('darkMode')){
            // list.style.color = "D6D6D6"
            bg.forEach(i => {
                i.style.background = "#362d27";
            })
            navBg.forEach(i => {
                i.style.background = "#362d27"
            })
            navFonts.forEach(i => {
                i.style.color = "#fff"
            })
            fontsDarkmode.forEach(i => {
                i.style.color = "#b6b6b6"
            })
            navli.forEach(i => {
                i.style.color = "#fff"
            })
            listbg.forEach(i => {
                i.style.background = "#362d27"
            })
       
        }else{
            bg.forEach(i => {
                i.style.background = "#fff";
            })
            navBg.forEach(i => {
                i.style.background = "#fff"
            })
            navFonts.forEach(i => {
                i.style.color = "#000"
            })
            fontsDarkmode.forEach(i => {
                i.style.color = "#7e7d7d"
            })
            navli.forEach(i => {
                i.style.color = "#000"
            })
            listbg.forEach(i => {
                i.style.background = "#fff"
            })
      
        }
    }
    else{
        if(main.classList.contains('darkMode')){
            bg.forEach(i => {
                i.style.background = "#362d27";
            })
            fontsDarkmode.forEach(i => {
                i.style.color = "#b6b6b6"
            })
            navli.forEach(i => {
                i.style.color = "#fff"
            })
            listbg.forEach(i => {
                i.style.background = "#362d27"
            })
            // aboutit.forEach(i => {
            //     i.style.color = "000"
            // })
        }else{
            bg.forEach(i => {
                i.style.background = "#fff";
            })
            fontsDarkmode.forEach(i => {
                i.style.color = "#7e7d7d"
            })
            navli.forEach(i => {
                i.style.color = "#000"
            })
            listbg.forEach(i => {
                i.style.background = "#fff"
            })
            // aboutit.forEach(i => {
            //     i.style.color = "fff"
            // })
        }
    }
 
    let light = "#362d27"
    let dark = "#2a2420"

    let lightmodebglight = "#fff";
    let lightmodebgDark =  "#f7f7f7";
    if(main.classList.contains('darkMode')){
        document.documentElement.style.setProperty('--lightmodebglight', light)
        document.documentElement.style.setProperty('--lightmodebgDark', dark)
    }else{
        document.documentElement.style.setProperty('--lightmodebglight', lightmodebglight)
        document.documentElement.style.setProperty('--lightmodebgDark', lightmodebgDark)
    }
    var header = document.querySelector('.navigation_container');
    if(!header.classList.contains('sticky') && window.innerWidth > 768){
        navli.forEach(i => {
            i.style.color = "#fff"
        })
    }
})
window.addEventListener('resize', () => {
    if(window.innerWidth > 768){
        if(list.classList.contains('list_active')){
            list.classList.remove('list_active')
        }
        list.style.background = "none"

        if(window.scrollY == 0){
            if(main.classList.contains('darkMode')){
                navli.forEach(i => {
                    i.style.color = "#fff"
                })
            }else{
                navli.forEach(i => {
                    i.style.color = "#fff"
                })
            }
        }
 

    }

    if(window.innerWidth < 768){
        if(main.classList.contains('darkMode')){
            listbg.forEach(i => {
                i.style.background = "#362d27"
            })
            navli.forEach(i => {
                i.style.color = "#fff"
            })
        }
        else{
            listbg.forEach(i => {
                i.style.background = "#fff"
            })
            navli.forEach(i => {
                i.style.color = "#000"
            })
        }
   
    }
})

CoffeeImage();

function CoffeeImage(){
    const images = document.querySelectorAll("[data-img]");

    const imgOptions = {
        threshold: 1
    };
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
    
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        imgObserver.unobserve(entry.target);
      });
    }, imgOptions);
    
    images.forEach((img) => {
        // console.log(img)
      imgObserver.observe(img);
    });
}

// function goToSecton(section){
//     let el = document.getElementById(section);
//     let elTop = el.offsetTop;
//     window.scroll({
//         top: elTop,
//         behavior: "smooth"
//     })
//   }