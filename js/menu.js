document.addEventListener('DOMContentLoaded', function() {
    // 1. Dodaj przycisk hamburgera
    const menuToggle = document.createElement('button');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '☰';
    document.querySelector('.head').appendChild(menuToggle);
    
    // 2. Pobierz elementy menu
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu-item');
    
    // 3. Obsługa kliknięcia hamburgera
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        menu.classList.toggle('active');
        this.innerHTML = menu.classList.contains('active') ? '✕' : '☰';
    });
    
    // 4. Obsługa kliknięć w elementy menu
    menuItems.forEach(item => {
        const link = item.querySelector('a');
        const dropdown = item.querySelector('.dropdown');
        
        if (dropdown) {
            // Usuń strzałkę z HTML (będzie dodana przez CSS)
            link.innerHTML = link.textContent.trim();
            
            link.addEventListener('click', function(e) {
                if (window.innerWidth > 768) return;
                
                e.preventDefault();
                e.stopPropagation();
                
                // Zamknij wszystkie inne dropdowny
                menuItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Otwórz/zamknij aktualny dropdown
                item.classList.toggle('active');
            });
        }
    });
    
    // 5. Zamknij menu przy kliknięciu poza nim
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.menu') && !e.target.matches('.mobile-menu-toggle')) {
            menu.classList.remove('active');
            menuItems.forEach(item => item.classList.remove('active'));
            menuToggle.innerHTML = '☰';
        }
    });
});