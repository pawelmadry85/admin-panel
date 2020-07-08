{
  'use strict';

  const hamburger = document.querySelector('.hamburger-button');
  hamburger.addEventListener('click', showSidebar);

  function showSidebar(){
    const sidebarMenu = document.querySelector('.sidebar-menu');
    sidebarMenu.classList.toggle('show');
  }








}