document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion-header');
    const toggle = accordion.querySelector('.accordion-toggle');
    const content = accordion.querySelector('.accordion-content');

    // Добавьте эту строку для закрытия аккордеона по умолчанию
    content.style.maxHeight = '0';
    content.style.opacity = '0';

    header.addEventListener('click', () => {
      accordion.classList.toggle('expanded');
      if (accordion.classList.contains('expanded')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = '1';
      } else {
        content.style.maxHeight = '0';
        content.style.opacity = '0';
      }
    });
  });
});

