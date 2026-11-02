const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navlinks');
if (menuButton && navLinks) menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.hidden = filter !== 'all' && item.dataset.category !== filter;
    });
  });
});

const enquiryForm = document.querySelector('#enquiryForm');
if (enquiryForm) enquiryForm.addEventListener('submit', async event => {
  event.preventDefault();
  const button = enquiryForm.querySelector('button[type="submit"]');
  const message = enquiryForm.querySelector('.form-message');
  button.disabled = true;
  button.textContent = 'Sending...';
  message.textContent = '';
  try {
    const payload = Object.fromEntries(new FormData(enquiryForm).entries());
    const response = await fetch('/api/enquiries', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.message || 'Please try again.');
    message.textContent = result.message;
    message.className = 'form-message success';
    enquiryForm.reset();
  } catch (error) {
    message.textContent = error.message || 'Could not send your enquiry. Please contact us on WhatsApp.';
    message.className = 'form-message error';
  } finally {
    button.disabled = false;
    button.textContent = 'Send enquiry';
  }
});

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
