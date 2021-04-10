const burgerMenuHeader = document.getElementById('burger-menu-header');
const menuHeader = document.getElementById('menu-header');
const burgerMenuCaterogyWomen = document.getElementById('burger-menu-caterogy-women');
const menuCategoryWomen = document.getElementById('menu-category-women');
const burgerMenuCaterogyMen = document.getElementById('burger-menu-caterogy-men');
const menuCategoryMen = document.getElementById('menu-category-men');

burgerMenuHeader.addEventListener('click', function(){
    menuHeader.classList.toggle('active');
})

burgerMenuCaterogyWomen.addEventListener('click', function(){
    menuCategoryWomen.classList.toggle('active');
})

burgerMenuCaterogyMen.addEventListener('click', function(){
    menuCategoryMen.classList.toggle('active');
})






