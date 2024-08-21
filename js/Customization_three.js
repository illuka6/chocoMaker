

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

/* ↑↑標籤列↑↑ */



/* 客製化第三頁 */
/* ↓↓左邊側邊欄位↓↓ */
let left_sidebar_img_1 = document.getElementById('left_sidebar_img_1');
let left_sidebar_img_2 = document.getElementById('left_sidebar_img_2');
let left_sidebar_img_3 = document.getElementById('left_sidebar_img_3');

function background() {
    left_sidebar_img_1.style.backgroundImage = "url('')";
    left_sidebar_img_2.style.backgroundImage = "url('')";
    left_sidebar_img_3.style.backgroundImage = "url('')";
}
/* ↑↑左邊側邊欄位↑↑*/

/* ↓↓左邊側邊欄位衍伸區塊↓↓ */
let left_sidebar_three_page_div1 = document.getElementById("left_sidebar_three_page_div1");
let left_sidebar_three_page_div2 = document.getElementById("left_sidebar_three_page_div2");
let left_sidebar_three_page_div3 = document.getElementById("left_sidebar_three_page_div3");

function select_field() {
    left_sidebar_three_page_div1.style.display = 'none';
    left_sidebar_three_page_div2.style.display = 'none';
    left_sidebar_three_page_div3.style.display = 'none';
}
/* ↑↑左邊側邊欄位衍伸區塊↑↑ */

/* ↓↓左邊側邊欄位衍伸小按鈕區塊↓↓ */
let left_sidebar_three_page_div1_box = document.getElementById('left_sidebar_three_page_div1_box');
let left_sidebar_three_page_div2_box = document.getElementById('left_sidebar_three_page_div2_box');
let left_sidebar_three_page_div3_box = document.getElementById('left_sidebar_three_page_div3_box');

function select_field_btn() {
    left_sidebar_three_page_div1_box.style.display = 'none';
    left_sidebar_three_page_div2_box.style.display = 'none';
    left_sidebar_three_page_div3_box.style.display = 'none';
}
/* ↑↑左邊側邊欄位衍伸小按鈕區塊↑↑ */

/* ↓↓左邊側邊欄位(顯示器)↓↓ */

/* 第一個 */
left_sidebar_img_1.addEventListener('click', function () {
    select_field();
    select_field_btn();
    background();
    left_sidebar_three_page_div1.style.display = "block";
    left_sidebar_three_page_div1_box.style.display = 'block';
    left_sidebar_img_1.style.backgroundImage = "url(../images/Custom_block/background.svg)";
    left_sidebar_img_1.style.borderRadius = '20px 0 0 20px';
});

left_sidebar_three_page_div1_box.addEventListener('click', function () {
    left_sidebar_three_page_div1_box.style.display = "none";
    left_sidebar_three_page_div1.style.display = 'none';
    left_sidebar_img_1.style.backgroundImage = "url('')";
});

/* 第二個 */
left_sidebar_img_2.addEventListener('click', function () {
    select_field();
    select_field_btn();
    background();
    left_sidebar_three_page_div2.style.display = "block";
    left_sidebar_three_page_div2_box.style.display = 'block';
    left_sidebar_img_2.style.backgroundImage = "url(../images/Custom_block/background.svg)";
    left_sidebar_img_2.style.borderRadius = '20px 0 0 20px';
});

left_sidebar_three_page_div2_box.addEventListener('click', function () {
    left_sidebar_three_page_div2.style.display = "none";
    left_sidebar_three_page_div2_box.style.display = 'none';
    left_sidebar_img_2.style.backgroundImage = "url('')";
});

/* 第三個 */
left_sidebar_img_3.addEventListener('click', function () {
    select_field();
    select_field_btn();
    background();
    left_sidebar_three_page_div3.style.display = "block";
    left_sidebar_three_page_div3_box.style.display = 'block';
    left_sidebar_img_3.style.backgroundImage = "url(../images/Custom_block/background.svg)";
    left_sidebar_img_3.style.borderRadius = '20px 0 0 20px';
});

left_sidebar_three_page_div3_box.addEventListener('click', function () {
    left_sidebar_three_page_div3_box.style.display = "none";
    left_sidebar_three_page_div3.style.display = 'none';
    left_sidebar_img_3.style.backgroundImage = "url('')";
});


/* 客製化第二頁的左邊選擇欄位縮放功能 */
let left_sidebar_second_page = document.getElementById('left_sidebar_second_page');
window.addEventListener('resize', () => {
    left_sidebar_three_page_div1.style.left = (left_sidebar_second_page.offsetWidth) + "px";
    left_sidebar_three_page_div2.style.left = (left_sidebar_second_page.offsetWidth) + "px";
    left_sidebar_three_page_div3.style.left = (left_sidebar_second_page.offsetWidth) + "px";
});









