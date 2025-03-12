
/* CSS for mobile devices */
@media screen and (min-width: 280px) and (max-width: 576px) { 
    .hero { 
        justify-content: center; 
        color: #fff; 
        background-image: radial-gradient(circle, rgb(15 14 14 / 30%),
          rgb(102 96 96 / 40%), rgb(163 160 160 / 16%)), url('./Images/heroImg3.avif') 
    } 

    .sub-heading { 
        color: #fff9f9cc; 
    } 

    .hero .intro-buttons { 
        gap: 20px; 
    } 

    .btn { 
        padding: 10px 30px; 
    } 

    .logo { 
        padding: 0 2rem; 
    } 

    .menu { 
        position: absolute; 
        right: 0; 
        padding: 0 2rem; 
        top: 75px; 
        background-image: linear-gradient(180deg, #35A99C, #53C8B6, #74D7BB); 
        display: none; 
        transition: all 0.25s; 
    } 

    .menu .menu-list { 
        flex-direction: column; 
    } 

    .hamburger { 
        display: block; 
        padding: 0 2rem; 
    } 

    .portfolio { 
        padding: 0; 
    } 

    .about { 
        flex-direction: column; 
    } 

    .about .about-text { 
        width: 90%; 
        padding: 1rem; 
    } 

    .about .about-image img { 
        width: 90%; 
        padding: 1rem; 
    } 

    .services { 
        padding: 0; 
    } 

    .my-row { 
        display: flex; 
        align-items: center; 
        justify-content: space-between; 
        flex-direction: column; 
        margin: 2rem 0; 
        gap: 1rem; 
    } 

    .my-row .my-col { 
        text-align: center; 
        width: 100%; 
    } 

    .contact { 
        padding: 0; 
    } 

    .contact-content { 
        flex-direction: column; 
        align-items: center; 
        gap: 2rem; 
    } 

    .contact-form-container { 
        width: 80%; 
    } 

    .contact-form .form-controls { 
        width: 100%; 
    } 

    .contact-form .form-btn { 
        width: 100%; 
    } 

    .contact-details { 
        width: 80%; 
    } 

    .footer-menu { 
        padding: 0 2rem; 
    } 

    .footer-list-items { 
        margin: 0; 
    } 
}
