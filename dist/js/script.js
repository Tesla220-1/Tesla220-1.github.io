window.addEventListener('DOMContentLoaded', () => {
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
})

