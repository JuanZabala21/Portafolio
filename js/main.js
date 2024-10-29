(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);

var languageContent = {
    es: {
		portfolio: "Portafolio",
        title: "Juan P. Zabala Developer",
        introTitle: "Juan Pablo Zabala",
        introSubtitle: "Software Engineer, FullStack Developer, Frontend Engineer",
		homeTitle: "Inicio",
        aboutTitle: "Sobre mí",
        servicesTitle: "Servicios",
        workTitle: "Trabajos",
        contactTitle: "Contáctame",
		languageTitle: "Idioma",
		nameTitle: "Nombre",
		profileTitle: "Perfil",
		skillsTitle: "Habilidades",
		seeTitle:"Ver",
		database: "Base de Datos",
		studiesTitle: "Estudios",
		careerTitle: "Ingeniería de Computación",
		universityTitle: "Universidad José Antonio Páez (2016 - 2020)",
		masterTitle: "Maestría en Gestión de Ingeniería de Sitios Web",
		firstText: "Soy Ingeniero de Computación egresado en la Universidad José Antonio Páez, ubicado en el municipio San Diego del Estado Carabobo, es un poco difícil hablar de unomismo, pero aquí tratare de darles algunas características de mi perfil profesional.",
        secondText: "Tengo 4 años de experiencia en el campo de desarrollo de Software, he trabajado en algunas empresas como las que son App Tecnología, Navegantes del Magallanes BBC, Tigres de Aragua BBC y Trotamundos de Carabobo todos estos anteriores como pasante y ya como Software Engineer en InteliX Synergy, Alena Designn, MD Digital Solutions, Epidata y CompassDigital SL, utilizando tecnologías como Spring Boot, Quarkus, Angular, React, VueJS Docker, Golang, TypeScript, JavaScript, Postman, Oracle, PostgreSQL entre otras.",
		thirdText: "Soy estudioso y dedicado en la tecnología, siempre estoy en constante actualización debido a que todos los días siempre hay algo nuevo que aprender, además de ser una persona proactiva y creativa, siempre logro mantener la mejor relación con mis clientes captando todos sus requerimientos y haciendolo realidad.",
		serviceSection: "Servicios",
		specialties: "Mis especialidades",
		frontend: "Desarrollo Frontend",
		frontendText: "Desarrollo de la planificación, diseño, implementación y mantenimiento de sitios web, requeridos por el cliente para encontrar el éxito en sus páginas.",
		web: "Programación Web",
		webText: "Desarrollo y creación de páginas y aplicaciones web utilizando tecnologías fundamentales o CMS.",
		backend: "Desarrollo Backend",
		backendText: "Llevar a cabo la construcción programática del sitio web, como su constante desarrollo para así lograr los requerimientos propuestos por el cliente y su agrado.",
		projects: "Proyectos realizados",
		experience: "Años de Experiencia",
		certifications: "Certificaciones realizadas",
		personalWorks: "Trabajos Personales",
		projectsDone: "Software y proyectos que he realizado.",
		rolProgrammer: "Programador Web",
		ceo: "Programador & CEO",
		fullStack: "Desarrollador FullStack",
		sendMessage: "¡Tu mensaje ha sido enviado!. ¡Gracias!",
		sendMessageText: "Enviame un mensaje",
		contactText: "Ponerse en contacto",
		contactP: "Si desea comunicarse o comentar algo sobre mí, llene los datos del formulario de mensaje para así obtener una próxima respuesta para futuras planificaciones de proyectos o trabajos.",
		name: "Nombre",
        email: "Correo",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar",
		copyright: "Copyright Desarrollador Juan P. Zabala Todos los derechos reservados."
	},
    en: {
		portfolio: "Portfolio",
        title: "Juan P. Zabala Developer",
        introTitle: "Juan Pablo Zabala",
        introSubtitle: "Software Engineer, FullStack Developer",
		homeTitle: "Home",
        aboutTitle: "About Me",
        servicesTitle: "Services",
        workTitle: "Works",
        contactTitle: "Contact Me",
		languageTitle: "Language",
		nameTitle: "Name",
		profileTitle: "Profile",
		skillsTitle: "Skills",
		seeTitle: "See",
		database: "Databases",
		studiesTitle: "Studies",
		careerTitle: "Computer Engineer",
		universityTitle: "José Antonio Páez University (2016 - 2020)",
		masterTitle: "Web Site Management Engineering",
		firstText: "I am a Computer Engineer graduated from the University Jose Antonio Paez, located in the municipality of San Diego, Carabobo State, it is a little difficult to talk about myself, but here I will try to give you some characteristics of my professional profile.",
		secondText: "I have 4 years of experience in the field of software development, I have worked in some companies such as App Tecnología, Navegantes del Magallanes BBC, Tigres de Aragua BBC and Trotamundos de Carabobo all these previous as an intern and already as Software Engineer in InteliX Synergy, Alena Designn, MD Digital Solutions, Epidata and CompassDigital SL, using technologies such as Spring Boot, Quarkus, Angular, React, VueJS Docker, Golang, TypeScript, JavaScript, Postman, Oracle, PostgreSQL among others.",
		thirdText: "I am studious and dedicated in technology, I am always in constant updating because every day there is always something new to learn, besides being a proactive and creative person, I always manage to maintain the best relationship with my clients capturing all their requirements and making it a reality."	,
		serviceSection: "Services",
		specialties: "My specialties",
		frontend: "Frontend Development",
		frontendText: "Development of planning, design, implementation and maintenance of web sites, required by the client to find success in their pages.",
		web: "Web Programming",
		webText: "Development and creation of web pages and web applications using core technologies or CMS.",
		backend: "Backend Development",
		backendText: "Carry out the programmatic construction of the website, as well as its constant development in order to achieve the requirements proposed by the client and their satisfaction.",
		projects: "Completed projects",
		experience: "Years of experience",
		certifications: "Certifications Completed",
		personalWorks: "Personal Works",
		projectsDone: "Software and projects I have done.",
		rolProgrammer: "Web Programmer",
		ceo: "Programmer & CEO",
		fullStack: "FullStack Developer",
		sendMessage: "Your message has been sent, thanks!",
		sendMessageText: "Send me a message",
		contactText: "Contact Us",
		contactP: "If you wish to communicate or comment something about me, please fill in the message form to get a next answer for future project or work planning. get a next response for future project or work planning.",
		name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send",
		copyright: "Copyright Juan P. Zabala Developer All rights reserved."
	}
};

var currentLanguage = localStorage.getItem('selectedLanguage') || 'es'; // Idioma por defecto

function updateCVLink() {
    const cvLink = document.getElementById('see');
    if (currentLanguage === 'es') {
        cvLink.href = 'docs/CV.pdf'; // Enlace en español
    } else if (currentLanguage === 'en') {
        cvLink.href = 'docs/CV_English.pdf'; // Enlace en inglés
    }
}
// Llama a la función para establecer el enlace correcto al cargar la página
window.onload = updateCVLink;

function changeLanguage(lang) {
    currentLanguage = lang;
	updateCVLink();
    localStorage.setItem('selectedLanguage', lang); // Guarda el idioma en el almacenamiento local

    // Cambia el contenido según el idioma seleccionado
    document.getElementById('title').innerText = languageContent[lang].title;
	document.getElementById('portfolio').innerText = languageContent[lang].portfolio;
    document.getElementById('introTitle').innerText = languageContent[lang].introTitle;
	document.getElementById('homeNav').innerText = languageContent[lang].homeTitle;
    document.getElementById('aboutNav').innerText = languageContent[lang].aboutTitle;
	document.getElementById('aboutTitle').innerText = languageContent[lang].aboutTitle;
    document.getElementById('serviceNav').innerText = languageContent[lang].servicesTitle;
    document.getElementById('workNav').innerText = languageContent[lang].workTitle;
    document.getElementById('contactNav').innerText = languageContent[lang].contactTitle;
	document.getElementById('languageDropdown').innerText = languageContent[lang].languageTitle;
	document.getElementById('nameTitle').innerText = languageContent[lang].nameTitle;
	document.getElementById('profile').innerText = languageContent[lang].profileTitle;
	document.getElementById('see').innerText = languageContent[lang].seeTitle;
	document.getElementById('database').innerText = languageContent[lang].database;
	document.getElementById('skills').innerText = languageContent[lang].skillsTitle;
	document.getElementById('studies').innerText = languageContent[lang].studiesTitle;
	document.getElementById('career').innerText = languageContent[lang].careerTitle;
	document.getElementById('university').innerText = languageContent[lang].universityTitle;
	document.getElementById('master').innerText = languageContent[lang].masterTitle;
	document.getElementById('firstText').innerText = languageContent[lang].firstText;
	document.getElementById('secondText').innerText = languageContent[lang].secondText;
	document.getElementById('thirdText').innerText = languageContent[lang].thirdText;
	document.getElementById('serviceSection').innerText = languageContent[lang].serviceSection;
	document.getElementById('specialties').innerText = languageContent[lang].specialties;
	document.getElementById('frontend').innerText = languageContent[lang].frontend;
	document.getElementById('frontendText').innerText = languageContent[lang].frontendText;
	document.getElementById('web').innerText = languageContent[lang].web;
	document.getElementById('webText').innerText = languageContent[lang].webText;
	document.getElementById('backend').innerText = languageContent[lang].backend;
	document.getElementById('backendText').innerText = languageContent[lang].backendText;
	document.getElementById('projects').innerText = languageContent[lang].projects;
	document.getElementById('experience').innerText = languageContent[lang].experience;
	document.getElementById('certifications').innerText = languageContent[lang].certifications;
	document.getElementById('personalWorks').innerText = languageContent[lang].personalWorks;
	document.getElementById('projectsDone').innerText = languageContent[lang].projectsDone;
	document.getElementById('rolProgrammer1').innerText = languageContent[lang].rolProgrammer;
	document.getElementById('rolProgrammer2').innerText = languageContent[lang].rolProgrammer;
	document.getElementById('rolProgrammer3').innerText = languageContent[lang].rolProgrammer;
	document.getElementById('rolProgrammer4').innerText = languageContent[lang].rolProgrammer;
	document.getElementById('rolProgrammer5').innerText = languageContent[lang].rolProgrammer;
	document.getElementById('ceo').innerText = languageContent[lang].ceo;
	document.getElementById('fullStack').innerText = languageContent[lang].fullStack;
	document.getElementById('sendMessageText').innerText = languageContent[lang].sendMessageText;
	if(document.getElementById('sendMessage')){
		document.getElementById('sendMessage').innerText = languageContent[lang].sendMessage;
	}
	document.getElementById('contactText').innerText = languageContent[lang].contactText;
	document.getElementById('contactP').innerText = languageContent[lang].contactP;
	document.getElementById('name').placeholder = languageContent[lang].name;
    document.getElementById('email').placeholder = languageContent[lang].email;
    document.getElementById('subject').placeholder = languageContent[lang].subject;
    document.querySelector('textarea[name="message"]').placeholder = languageContent[lang].message;
    
    // Actualiza el valor del botón enviar
    document.querySelector('input[type="submit"]').value = languageContent[lang].send;
	document.getElementById('copyright').innerText = languageContent[lang].copyright;

}

// Al cargar la página, establece el idioma según el almacenamiento local
window.onload = function() {
    changeLanguage(currentLanguage);
};