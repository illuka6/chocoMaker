function menuJS(){
/* ↓↓標籤列↓↓ */
let customized = document.getElementById('customized');
customized.addEventListener('mouseover', function () {
    customized.style.color = '#FFFFFF';
    customized.textContent = '客製化';
});

customized.addEventListener('mouseout', function () {
    customized.style.color = '#3F1A09';
    customized.textContent = 'customized';
});
let menu_id = document.getElementById('menu_id');
let menu_id_search = document.getElementById('menu_id_search');
let menu_id_icon_search = document.getElementById('menu_id_icon_search');
let menu_id_search_divBox_a2 = document.getElementById('menu_id_search_divBox_a2');
menu_id_icon_search.addEventListener('click', () => {
    menu_id.style.display = 'none';
    menu_id_search.style.display = 'flex';
});

menu_id_search_divBox_a2.addEventListener('click', () => {
    menu_id.style.display = 'flex';
    menu_id_search.style.display = 'none';
});

/* ↑↑標籤搜尋轉換↑↑ */


window.addEventListener('scroll', function() {
    var navbar = document.getElementById('menu');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

}