$(document).ready(function(){
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger'),
    body = document.body;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    body.classList.toggle('overflow-hidden');
    });

  if (document.documentElement.clientWidth < 800) {
    menuItem.forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        body.classList.toggle('overflow-hidden');
      })
    })
  }

    // flowing scroll
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }
    // flowing scroll end

    window.addEventListener('scroll', () => {
    const pageUp = document.querySelector('.page-up');
    if (window.pageYOffset <= 850) {
      pageUp.style.opacity ='0';
        } else {
      pageUp.style.opacity ='1';
      }
    })


  //validate

  	function validateForm(form) {
		$(form).validate({
			rules: {
				email: {
					email: true
				}
			},
			
			messages: {
				name: "Пожалуйста, введите ваше имя",
				phone: 'Пожалуйста, введите ваш телефон',
				email: {
				required: "Пожалуйста, введите вашу почту",
				email: "Ваша почта должна быть в формате name@domain.com"
				}
			},
		});
	}

	validateForm('#consultation form');
    validateForm('#consultation-form');
    validateForm('#order form');

    //form-mail
    $('form').submit( function(e) {
      e.preventDefault();

      $.ajax({
          type: 'POST', //Написал что я отправляю данные на сервер
          url: '../mailer/smart.php', //Указал путь к серверу
          data: $(this).serialize() //Обработал данные перед отправкой на сервер
      }).done(function() {
          $(this).find('input').val(''); //Очистил input-ы формы

          $('#consultation, #order').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');

          $('form').trigger('reset'); // Перезапустил формы
      });
      return false;
  } );

  //Modal
	const overlay = document.querySelector('.overlay'),
	modalClose = document.querySelectorAll('.modal__close'),
	formOnPage = document.querySelectorAll('.consultation .form input'),
	modalMini = document.querySelector('#thanks');

	for (let i = 0; i < modalClose.length; i++) {
		modalClose[i].addEventListener('click', function(event) {
			overlay.style.display = 'none';
			consultationModal.style.display = 'none';
			modalMini.style.display = 'none';
      body.classList.remove('overflow-hidden');
			
			for (let j = 0; j < formOnPage.length; j++) {
				formOnPage[j].setAttribute('required', 'required');
			}
		});
	}  

  //Modal Consultation
	const consultationButton = document.querySelectorAll('[data-modal=consultation]'),
	consultationModal = document.querySelector('#consultation');

	for (let i = 0; i < consultationButton.length; i++) {
		consultationButton[i].addEventListener('click', function(event) {
			overlay.style.display = 'block';
			consultationModal.style.display = 'block';
      body.classList.add('overflow-hidden');

			for (let j = 0; j < formOnPage.length; j++) {
				formOnPage[j].removeAttribute('required', 'required');
			}
		});
	}
});
