// Obtém os elementos do menu
const menuHamburguer = document.querySelector('.mobile-menu')
const menuItems = document.querySelector('.menu__list')
const menuLinks = document.querySelectorAll('.menu__list li')
console.log(menuLinks)

// Adiciona um evento de clique no menu hamburguer
menuHamburguer.addEventListener('click', () => {
	// Alternar a classe 'open' para mostrar/ocultar os itens do menu
	menuItems.classList.toggle('active')
	menuHamburguer.classList.toggle('active')
	animateLinks(menuLinks)
})

function animateLinks(element) {
	element.forEach((link, index) => {
		link.style.animation
			? (link.style.animation = '')
			: (link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 7 + 0.3
			  }s`)
	})
}
