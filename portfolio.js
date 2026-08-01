// Typing Animation

const text = [
    "Web Developer",
    "Frontend Developer",
    "Programmer",
    "B.Tech CSE Student"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        setTimeout(()=>{
            erase();
        },1500);

    }else{

        setTimeout(type,120);

    }

})();

function erase(){

    letter = currentText.slice(0,--index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === 0){

        count++;

        setTimeout(type,300);

    }else{

        setTimeout(erase,60);

    }

}


// Sticky Navbar

window.addEventListener("scroll",function(){

    const header=document.querySelector("header");

    header.classList.toggle("sticky",window.scrollY>50);

});


// Active Navigation Link

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;
        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){
            current=section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){
            link.classList.add("active");
        }

    });

});


// Fade-in Animation

const observer=new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

const hidden=document.querySelectorAll(".card,.skill,.about-container,.home-text,.home-image");

hidden.forEach((el)=>observer.observe(el));


// Contact form demo
const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});