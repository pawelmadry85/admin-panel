{
  'use strict';

  const hamburger = document.querySelector('.hamburger-button');
  hamburger.addEventListener('click', showSidebar);

  function showSidebar(){
    const sidebarMenu = document.querySelector('.sidebar-menu');

    if(sidebarMenu == 'show') {
      sidebarMenu.classList.remove('show');
    }
    else {
      sidebarMenu.classList.add('show');      
    }
  }








}