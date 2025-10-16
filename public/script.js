gsap.registerPlugin(TextPlugin)

gsap.to('.judul', {
  duration: 5,
  text: "Hello, I'm Muhamad Fikri Ardiansyah",
  ease: 'power1.out',
  delay: 0.5,
})

gsap.from('section', {
  opacity: 0,
  y: 40,
  offset: 3.0,
  duration: 1,
  stagger: 0.3,
})
function openProjectDetail(id) {
  const modal = document.getElementById(id)
  const content = modal.querySelector('#projectContent')

  modal.classList.remove('hidden')
  setTimeout(() => {
    content.classList.remove('opacity-0', 'scale-95')
    content.classList.add('opacity-100', 'scale-100')
  }, 50)
}

function closeProjectDetail(id) {
  const modal = document.getElementById(id)
  const content = modal.querySelector('#projectContent')

  content.classList.add('opacity-0', 'scale-95')
  setTimeout(() => {
    modal.classList.add('hidden')
  }, 400)
}
