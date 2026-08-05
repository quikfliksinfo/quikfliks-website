document.addEventListener("DOMContentLoaded", function () {


    // Fade-in animation when sections enter viewport

    const sections = document.querySelectorAll(".section, .card");


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    sections.forEach(section => {

        section.classList.add("fade-in");

        observer.observe(section);

    });



    // Smooth navigation close for mobile improvements

    const navLinks = document.querySelectorAll("nav a");


    navLinks.forEach(link => {

        link.addEventListener("click", function(){

            const target = document.querySelector(
                this.getAttribute("href")
            );


            if(target){

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }

        });

    });



});