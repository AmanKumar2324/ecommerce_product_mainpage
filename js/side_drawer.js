const menuIcon = document.getElementById('menuIcon');
const sideDrawer = document.getElementById('sideDrawer');
const closeDrawer = document.getElementById('closeDrawer');

menuIcon.addEventListener('click', () => {
    sideDrawer.classList.toggle('open');
});

closeDrawer.addEventListener('click', () => {
    sideDrawer.classList.remove('open');
});
