document.addEventListener('DOMContentLoaded', () => {
  const toggleHeaders = document.querySelectorAll('.toggle-header');
  toggleHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const targetId = header.getAttribute('data-target');
      const element = document.getElementById(targetId);

      if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        element.classList.add('visible'); 
        header.classList.add('active'); 
      } else {
        element.classList.remove('visible'); 
        element.classList.add('hidden'); 
        header.classList.remove('active'); 
      }
    });
  });
});