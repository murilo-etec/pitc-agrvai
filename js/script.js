document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-page]').forEach((link) => {
    if (link.getAttribute('data-page') === currentPage || (currentPage === 'index.html' && link.getAttribute('data-page') === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  document.querySelectorAll('.year').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const contactForm = document.querySelector('#contactForm');
  const formFeedback = document.querySelector('#formFeedback');
  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!contactForm.checkValidity()) {
        event.stopPropagation();
        contactForm.classList.add('was-validated');
        formFeedback.className = 'form-feedback is-error';
        formFeedback.textContent = 'Confira os campos obrigatórios antes de continuar.';
        return;
      }
      contactForm.classList.add('was-validated');
      formFeedback.className = 'form-feedback is-success';
      formFeedback.textContent = 'Mensagem registrada apenas para demonstração. Nenhum envio foi realizado.';
      contactForm.reset();
      contactForm.classList.remove('was-validated');
    });
  }
});
