document.addEventListener("DOMContentLoaded", function(){



// Smooth Scrolling

const links = document.querySelectorAll('a[href^="#"]');


links.forEach(link => {

    link.addEventListener("click", function(e){


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });

});






// Project Cards Animation


const cards = document.querySelectorAll(
".project-card, .card, .contact-card"
);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }


});


},{
    threshold:0.2
});




cards.forEach(card=>{


    card.classList.add("hidden");

    observer.observe(card);


});







// Footer Year Update


const footer = document.querySelector("footer p");


if(footer){


    const year = new Date().getFullYear();


    footer.innerHTML =
    `© ${year} Aqsa Bibi | All Rights Reserved`;


}







// Button Click Animation


const buttons = document.querySelectorAll(".btn");


buttons.forEach(button=>{


    button.addEventListener("click",function(){


        this.style.transform="scale(0.95)";


        setTimeout(()=>{


            this.style.transform="scale(1)";


        },150);


    });


});






// Active Navbar Link


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


    const sectionTop = section.offsetTop - 150;


    if(scrollY >= sectionTop){

        current = section.getAttribute("id");

    }


});



navLinks.forEach(link=>{


    link.classList.remove("active");


    if(link.getAttribute("href") === "#"+current){

        link.classList.add("active");

    }


});


});



});