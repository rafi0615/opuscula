document.addEventListener('DOMContentLoaded', function() {
    var searchLink = document.querySelector('.menu-search a');
    var searchbar = document.getElementById('searchbar-inline');
    var closeBtn = document.getElementById('close-searchbar-inline');
    var menu = document.querySelector('.menu');
    var menuSearch = document.querySelector('.menu-search');

    if (searchLink && searchbar && closeBtn) {
      searchLink.addEventListener('click', function(e) {
        e.preventDefault();
        searchbar.style.display = 'block';
        menu.classList.add('search-open');
        if (menuSearch) menuSearch.style.display = 'none';
        searchbar.querySelector('.searchbar-inline-input').focus();
      });
      closeBtn.addEventListener('click', function() {
        searchbar.style.display = 'none';
        menu.classList.remove('search-open');
        if (menuSearch) menuSearch.style.display = '';
      });
      document.addEventListener('click', function(e) {
        if (
          searchbar.style.display === 'block' &&
          !searchbar.contains(e.target) &&
          !searchLink.contains(e.target)
        ) {
          searchbar.style.display = 'none';
          menu.classList.remove('search-open');
          if (menuSearch) menuSearch.style.display = '';
        }
      });
    }
  });