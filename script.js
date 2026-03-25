  // =====================
  // 1. MENU MOBILE
  // =====================
  const menuBtn = document.querySelector('.menu-btn')
  const menu = document.querySelector('.menu')

  menuBtn.addEventListener('click', function() {
    menu.classList.toggle('aberto')
  })

  // =====================
  // 2. VALIDAÇÃO DO FORMULÁRIO
  // =====================
  const btnEnviar = document.querySelector('.btn-enviar')

  btnEnviar.addEventListener('click', function() {
    const nome = document.querySelector('.contato-box input[type="text"]').value
    const email = document.querySelector('.contato-box input[type="email"]').value
    const mensagem = document.querySelector('.contato-box textarea').value

    if (nome === '' || email === '' || mensagem === '') {
      alert('⚠️ Preencha todos os campos antes de enviar!')
      return
    }

    alert('✅ Mensagem enviada! Em breve entro em contato.')
  })

  // =====================
  // 3. ANIMAÇÃO DE SCROLL
  // =====================
  const cards = document.querySelectorAll('.card')

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel')
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

  cards.forEach(function(card) {
    observer.observe(card)
  })
