/* ↓↓左邊側邊欄位(共用區塊顯示器)↓↓ */
let left_menu = document.getElementsByClassName('left_menu');
let left_menu2 = document.getElementsByClassName('left_menu2');
let left_menu3 = document.getElementsByClassName('left_menu3');
let left_menu4 = document.getElementsByClassName('left_menu4');
let left_menu5 = document.getElementsByClassName('left_menu5');

function all_Left_menu() {
    left_menu[0].style.display = "none";
    left_menu2[0].style.display = "none";
    left_menu3[0].style.display = "none";
    left_menu4[0].style.display = "none";
    left_menu5[0].style.display = "none";
};


let left_menu_right1 = document.getElementById('left_menu_right1')
let left_menu_right2 = document.getElementById('left_menu_right2')
let left_menu_right3 = document.getElementById('left_menu_right3')
let left_menu_right4 = document.getElementById('left_menu_right4')
let left_menu_right5 = document.getElementById('left_menu_right5')

function all_left_menu_right() {
    left_menu_right1.style.display = 'none';
    left_menu_right2.style.display = 'none';
    left_menu_right3.style.display = 'none';
    left_menu_right4.style.display = 'none';
    left_menu_right5.style.display = 'none';
}

function background() {
    left_sidebar_btn1.style.backgroundImage = "url(' ')";
    left_sidebar_btn2.style.backgroundImage = "url(' ')";
    left_sidebar_btn3.style.backgroundImage = "url(' ')";
    left_sidebar_btn4.style.backgroundImage = "url(' ')";
    left_sidebar_btn5.style.backgroundImage = "url(' ')";
}

/* ↑↑左邊側邊欄位(共用區塊顯示器)↑↑ */

/* ↓↓標籤列↓↓ */
let customized = document.getElementById('customized');
customized.addEventListener('mouseover', function () {
    customized.textContent = '客製化';
});

customized.addEventListener('mouseout', function () {
    customized.textContent = 'customized';
});

/* ↑↑標籤列↑↑ */

/* ↓↓左邊側邊欄位(口味區塊顯示器)↓↓ */
let left_sidebar_btn1 = document.getElementById('left_sidebar_btn1');
left_menu = document.getElementsByClassName('left_menu');
left_menu_right1 = document.getElementById('left_menu_right1')
// console.log(left_menu[0]);

left_sidebar_btn1.addEventListener('click', function () {
    all_Left_menu();
    all_left_menu_right();
    background();
    left_menu[0].style.display = "block";
    left_menu_right1.style.display = 'block';
    left_sidebar_btn1.style.backgroundImage = "url(../image/background.svg)";
    left_sidebar_btn1.style.borderRadius = '20px 0 0 20px';
});

left_menu_right1.addEventListener('click', function () {
    left_menu[0].style.display = "none";
    left_menu_right1.style.display = 'none';
    left_sidebar_btn1.style.backgroundImage = "url('')";
});

/* ↑↑左邊側邊欄位(口味區塊顯示器)↑↑ */

/* ↓↓左邊側邊欄位(配料區塊顯示器)↓↓ */
let left_sidebar_btn2 = document.getElementById('left_sidebar_btn2');
left_menu2 = document.getElementsByClassName('left_menu2');
left_menu_right2 = document.getElementById('left_menu_right2')

left_sidebar_btn2.addEventListener('click', function () {
    all_Left_menu();
    all_left_menu_right();
    background();
    left_menu2[0].style.display = "block";
    left_menu_right2.style.display = 'block';
    left_sidebar_btn2.style.backgroundImage = "url(../image/background.svg)";
    left_sidebar_btn2.style.borderRadius = '20px 0 0 20px';
});

left_menu_right2.addEventListener('click', function () {
    left_menu2[0].style.display = "none";
    left_menu_right2.style.display = 'none';
    left_sidebar_btn2.style.backgroundImage = "url('')";
});

/* ↑↑左邊側邊欄位(配料區塊顯示器)↑↑ */

/* ↓↓左邊側邊欄位(文字區塊顯示器)↓↓ */
let left_sidebar_btn3 = document.getElementById('left_sidebar_btn3');
left_menu3 = document.getElementsByClassName('left_menu3');
left_menu_right3 = document.getElementById('left_menu_right3')

left_sidebar_btn3.addEventListener('click', function () {
    all_Left_menu();
    all_left_menu_right();
    background();
    left_menu3[0].style.display = "block";
    left_menu_right3.style.display = 'block';
    left_sidebar_btn3.style.backgroundImage = "url(../image/background.svg)";
    left_sidebar_btn3.style.borderRadius = '20px 0 0 20px';
});

left_menu_right3.addEventListener('click', function () {
    left_menu3[0].style.display = "none";
    left_menu_right3.style.display = 'none';
    left_sidebar_btn3.style.backgroundImage = "url('')";
});

/* ↑↑左邊側邊欄位(文字區塊顯示器)↑↑ */

/* ↓↓左邊側邊欄位(裝飾區塊顯示器)↓↓ */
let left_sidebar_btn4 = document.getElementById('left_sidebar_btn4');
left_menu4 = document.getElementsByClassName('left_menu4');
left_menu_right4 = document.getElementById('left_menu_right4')

left_sidebar_btn4.addEventListener('click', function () {
    all_Left_menu();
    all_left_menu_right();
    background();
    left_menu4[0].style.display = "block";
    left_menu_right4.style.display = 'block';
    left_sidebar_btn4.style.backgroundImage = "url(../image/background.svg)";
    left_sidebar_btn4.style.borderRadius = '20px 0 0 20px';
});

left_menu_right4.addEventListener('click', function () {
    left_menu4[0].style.display = "none";
    left_menu_right4.style.display = 'none';
    left_sidebar_btn4.style.backgroundImage = "url('')";
});

/* ↑↑左邊側邊欄位(文字區塊顯示器)↑↑ */

/* ↓↓左邊側邊欄位(模板區塊顯示器)↓↓ */
let left_sidebar_btn5 = document.getElementById('left_sidebar_btn5');
left_menu5 = document.getElementsByClassName('left_menu5');
left_menu_right5 = document.getElementById('left_menu_right5')

left_sidebar_btn5.addEventListener('click', function () {
    all_Left_menu();
    all_left_menu_right();
    background();
    left_menu5[0].style.display = "block";
    left_menu_right5.style.display = 'block';
    left_sidebar_btn5.style.backgroundImage = "url(../image/background.svg)";
    left_sidebar_btn5.style.borderRadius = '20px 0 0 20px';
});

left_menu_right5.addEventListener('click', function () {
    left_menu5[0].style.display = "none";
    left_menu_right5.style.display = 'none';
    left_sidebar_btn5.style.backgroundImage = "url('')";
});

/* ↑↑左邊側邊欄位(文字區塊顯示器)↑↑ */


/* --------------------------------------------------------- */



/* ↓↓口味選擇共用區塊↓↓ */


/* ↓↓圖片顯示區塊↓↓ */
let middle_img1 = document.getElementsByClassName('middle_img1');
let middle_img2 = document.getElementsByClassName('middle_img2');
let middle_img3 = document.getElementsByClassName('middle_img3');
let middle_img4 = document.getElementsByClassName('middle_img4');

function middle_img_none() {
    middle_img1[0].style.display = 'none';
    middle_img2[0].style.display = 'none';
    middle_img3[0].style.display = 'none';
    middle_img4[0].style.display = 'none';
};

/* ↑↑圖片顯示區塊↑↑ */

/* -------------------------------------------------- */

/* ↓↓牛奶巧克力選擇區塊↓↓ */
let left_menu_img1 = document.getElementsByClassName('left_menu_img1');
// let left_menu_img1 = document.getElementsByClassName('left_menu_img1');
// console.log(left_menu_img1);

left_menu_img1[0].addEventListener('click', function () {
    middle_img_none();
    middle_img1[0].style.display = "block";
});
/* ↑↑牛奶巧克力選擇區塊↑↑ */


/* ↓↓草莓巧克力選擇區塊↓↓ */
let left_menu_img4 = document.getElementsByClassName('left_menu_img4');
// let left_menu_img1 = document.getElementsByClassName('left_menu_img1');
// console.log(left_menu_img1);

left_menu_img4[0].addEventListener('click', function () {
    middle_img_none();
    middle_img2[0].style.display = "block";
});
/* ↑↑草莓巧克力選擇區塊↑↑ */





/* ↓↓抹茶巧克力選擇區塊↓↓ */
let left_menu_img5 = document.getElementsByClassName('left_menu_img5');
// let left_menu_img1 = document.getElementsByClassName('left_menu_img1');
// console.log(left_menu_img1);

left_menu_img5[0].addEventListener('click', function () {
    middle_img_none();
    middle_img3[0].style.display = "block";
});
/* ↑↑抹茶巧克力選擇區塊↑↑ */


/* ↓↓焦糖巧克力選擇區塊↓↓ */
let left_menu_img6 = document.getElementsByClassName('left_menu_img6');
// let left_menu_img1 = document.getElementsByClassName('left_menu_img1');
// console.log(left_menu_img1);

left_menu_img6[0].addEventListener('click', function () {
    middle_img_none();
    middle_img4[0].style.display = "block";
});
/* ↑↑抹茶巧克力選擇區塊↑↑ */


/* ↑↑口味選擇共用區塊↑↑ */


/* 右下角顯示方塊 */