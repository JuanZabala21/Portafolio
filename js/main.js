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
	fetch(`./lang/${lang}.json`)
        .then(response => response.json())
        .then(languageContent => {
			currentLanguage = lang;
			updateCVLink();
			localStorage.setItem('selectedLanguage', lang); // Guarda el idioma en el almacenamiento local
		
			// Cambia el contenido según el idioma seleccionado
			document.getElementById('portfolio').innerText = languageContent.portfolio;
			document.getElementById('introTitle').innerText = languageContent.introTitle;
			document.getElementById('homeNav').innerText = languageContent.homeTitle;
			document.getElementById('aboutNav').innerText = languageContent.aboutTitle;
			document.getElementById('aboutTitle').innerText = languageContent.aboutTitle;
			document.getElementById('serviceNav').innerText = languageContent.servicesTitle;
			document.getElementById('workNav').innerText = languageContent.workTitle;
			document.getElementById('contactNav').innerText = languageContent.contactTitle;
			document.getElementById('nameTitle').innerText = languageContent.nameTitle;
			document.getElementById('profile').innerText = languageContent.profileTitle;
			document.getElementById('see').innerText = languageContent.seeTitle;
			document.getElementById('database').innerText = languageContent.database;
			document.getElementById('skills').innerText = languageContent.skillsTitle;
			document.getElementById('studies').innerText = languageContent.studiesTitle;
			document.getElementById('career').innerText = languageContent.careerTitle;
			document.getElementById('university').innerText = languageContent.universityTitle;
			document.getElementById('master').innerText = languageContent.masterTitle;
			document.getElementById('firstText').innerText = languageContent.firstText;
			document.getElementById('secondText').innerText = languageContent.secondText;
			document.getElementById('thirdText').innerText = languageContent.thirdText;
			document.getElementById('serviceSection').innerText = languageContent.serviceSection;
			document.getElementById('specialties').innerText = languageContent.specialties;
			document.getElementById('frontend').innerText = languageContent.frontend;
			document.getElementById('frontendText').innerText = languageContent.frontendText;
			document.getElementById('web').innerText = languageContent.web;
			document.getElementById('webText').innerText = languageContent.webText;
			document.getElementById('backend').innerText = languageContent.backend;
			document.getElementById('backendText').innerText = languageContent.backendText;
			document.getElementById('projects').innerText = languageContent.projects;
			document.getElementById('experience').innerText = languageContent.experience;
			document.getElementById('certifications').innerText = languageContent.certifications;
			document.getElementById('personalWorks').innerText = languageContent.personalWorks;
			document.getElementById('projectsDone').innerText = languageContent.projectsDone;
			document.getElementById('rolProgrammer1').innerText = languageContent.rolProgrammer;
			document.getElementById('rolProgrammer2').innerText = languageContent.rolProgrammer;
			document.getElementById('rolProgrammer3').innerText = languageContent.rolProgrammer;
			document.getElementById('rolProgrammer4').innerText = languageContent.rolProgrammer;
			document.getElementById('rolProgrammer5').innerText = languageContent.rolProgrammer;
			document.getElementById('ceo').innerText = languageContent.ceo;
			document.getElementById('fullStack').innerText = languageContent.fullStack;
			document.getElementById('sendMessageText').innerText = languageContent.sendMessageText;
			if(document.getElementById('sendMessage')){
				document.getElementById('sendMessage').innerText = languageContent.sendMessage;
			}
			document.getElementById('contactText').innerText = languageContent.contactText;
			document.getElementById('contactP').innerText = languageContent.contactP;
			document.getElementById('name').placeholder = languageContent.name;
			document.getElementById('email').placeholder = languageContent.email;
			document.getElementById('subject').placeholder = languageContent.subject;
			document.getElementById('copyright').innerText = languageContent.copyright;
		
			document.querySelector('textarea[name="message"]').placeholder = languageContent.message;
			document.querySelector('input[type="submit"]').value = languageContent.send;
			})
		}

// Detecta el idioma actual y actualiza el texto
function updateLanguageText() {
    const languageText = document.getElementById('languageText');
    const currentLanguage = localStorage.getItem('language') || 'en';
    languageText.textContent = currentLanguage === 'en' ? 'ENG' : 'ESP';
}

// Cambia el idioma y actualiza la interfaz
function toggleLanguage() {
    let currentLanguage = localStorage.getItem('language') || 'en';
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    localStorage.setItem('language', currentLanguage);
    changeLanguage(currentLanguage); // Llama a tu función para cambiar el idioma
    updateLanguageText();
}

// Llama a la función al cargar la página para mostrar el idioma actual
document.addEventListener('DOMContentLoaded', updateLanguageText);

// Al cargar la página, establece el idioma según el almacenamiento local
window.onload = function() {
    changeLanguage(currentLanguage);
};