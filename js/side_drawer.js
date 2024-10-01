// Select the menu icon and the side drawer
const menuIcon = document.querySelector('.menu_icon');
const sideDrawer = document.querySelector('.side_drawer');

// Toggle the side drawer when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    sideDrawer.classList.toggle('open'); // Toggles the drawer visibility
});
