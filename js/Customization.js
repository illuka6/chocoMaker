/* 客製化第一頁 */
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
    left_sidebar_btn1.style.backgroundImage = "url(../images/Custom_block/background.svg)";
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
    left_sidebar_btn2.style.backgroundImage = "url(../images/Custom_block/background.svg)";
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
    left_sidebar_btn3.style.backgroundImage = "url(../images/Custom_block/background.svg)";
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
    left_sidebar_btn4.style.backgroundImage = "url(../images/Custom_block/background.svg)";
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
    left_sidebar_btn5.style.backgroundImage = "url(../images/Custom_block/background.svg)";
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
let middle_img5 = document.getElementsByClassName('middle_img5');
let middle_img6 = document.getElementsByClassName('middle_img6');
let middle_img7 = document.getElementsByClassName('middle_img7');
let middle_img8 = document.getElementsByClassName('middle_img8');
let middle_img9 = document.getElementsByClassName('middle_img9');
let middle_img10 = document.getElementsByClassName('middle_img10');
let middle_img11 = document.getElementsByClassName('middle_img11');
let middle_img12 = document.getElementsByClassName('middle_img12');


function middle_img_none() {
    middle_img1[0].style.display = 'none';
    middle_img2[0].style.display = 'none';
    middle_img3[0].style.display = 'none';
    middle_img4[0].style.display = 'none';
    middle_img5[0].style.display = 'none';
    middle_img6[0].style.display = 'none';
    middle_img7[0].style.display = 'none';
    middle_img8[0].style.display = 'none';
    middle_img9[0].style.display = 'none';
    middle_img10[0].style.display = 'none';
    middle_img11[0].style.display = 'none';
    middle_img12[0].style.display = 'none';
};


/* ↓↓右下角顯示區塊↓↓ */
let middle_box_img1 = document.getElementById('middle_box_img1');
let middle_box_img2 = document.getElementById('middle_box_img2');
let middle_box_img3 = document.getElementById('middle_box_img3');
let middle_box_img4 = document.getElementById('middle_box_img4');
let middle_box_img5 = document.getElementById('middle_box_img5');
let middle_box_img6 = document.getElementById('middle_box_img6');
let middle_box_img7 = document.getElementById('middle_box_img7');
let middle_box_img8 = document.getElementById('middle_box_img8');
let middle_box_img9 = document.getElementById('middle_box_img9');
let middle_box_img10 = document.getElementById('middle_box_img10');
let middle_box_img11 = document.getElementById('middle_box_img11');
let middle_box_img12 = document.getElementById('middle_box_img12');


function middle_box_allimg() {
    middle_box_img1.style.display = 'none';
    middle_box_img2.style.display = 'none';
    middle_box_img3.style.display = 'none';
    middle_box_img4.style.display = 'none';
    middle_box_img5.style.display = 'none';
    middle_box_img6.style.display = 'none';
    middle_box_img7.style.display = 'none';
    middle_box_img8.style.display = 'none';
    middle_box_img9.style.display = 'none';
    middle_box_img10.style.display = 'none';
    middle_box_img11.style.display = 'none';
    middle_box_img12.style.display = 'none';
};

/* ↑↑右下角顯示區塊↑↑ */


let milk_chocolate = document.getElementById('milk_chocolate');
let dark_chocolate = document.getElementById('dark_chocolate');
let white_chocolate = document.getElementById('white_chocolate');
let strawberry_chocolate = document.getElementById('strawberry_chocolate');
let matcha_chocolate = document.getElementById('matcha_chocolate');
let caramel_chocolate = document.getElementById('caramel_chocolate');
function allImg() {
    milk_chocolate.src = './images/Custom_block/left_menu/first_floor/Frame1.svg';
    dark_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse2.svg';
    white_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse3.svg';
    strawberry_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse4.svg';
    matcha_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse5.svg';
    caramel_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse6.svg';
};




/* ↑↑圖片顯示區塊↑↑ */

/* -------------------------------------------------- */

/* ↓↓牛奶巧克力選擇區塊↓↓ */
let middle_div1_box = document.getElementById('middle_div1_box');
let left_menu_img1 = document.getElementsByClassName('left_menu_img1');
let flag = true;
left_menu_img1[0].addEventListener('click', function () {
    middle_div1_box.style.display = '';
    middle_img_none();
    middle_img1[0].style.display = "block";
    allImg();
    middle_box_allimg();
    middle_box_img1.style.display = 'block';
    if (flag) {
        milk_chocolate.src = './images/Custom_block/left_menu/first_floor/Frame1_hover.svg';
    } else {
        milk_chocolate.src = './images/Custom_block/left_menu/first_floor/Frame1.svg';
    }
});
/* ↑↑牛奶巧克力選擇區塊↑↑ */



/* ↓↓黑巧克力選擇區塊↓↓ */
let left_menu_img2 = document.getElementsByClassName('left_menu_img2');
flag = true;
left_menu_img2[0].addEventListener('click', function () {
    middle_img_none();
    middle_img11[0].style.display = 'block';
    allImg();
    middle_box_allimg();
    middle_box_img5.style.display = 'block';
    if (flag) {
        dark_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse2_hover.svg';
    } else {
        dark_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse2.svg';
    }
});

/* ↑↑黑巧克力選擇區塊↑↑ */

/* ↓↓白巧克力選擇區塊↓↓ */
let left_menu_img3 = document.getElementsByClassName('left_menu_img3');
flag = true;
left_menu_img3[0].addEventListener('click', function () {
    middle_img_none();
    middle_img12[0].style.display = 'block';
    allImg();
    middle_box_allimg();
    middle_box_img6.style.display = 'block';
    if (flag) {
        white_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse3_hover.svg';
    } else {
        white_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse3.svg';
    }
});
/* ↑↑白巧克力選擇區塊↑↑ */


/* ↓↓草莓巧克力選擇區塊↓↓ */
let left_menu_img4 = document.getElementsByClassName('left_menu_img4');
flag = true;
left_menu_img4[0].addEventListener('click', function () {
    middle_img_none();
    middle_img2[0].style.display = "block";
    middle_div1_box.style.display = '';
    allImg();
    middle_box_allimg();
    middle_box_img2.style.display = 'block';
    if (flag) {
        strawberry_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse4_hover.svg';
    } else {
        strawberry_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse4.svg'
    }
});
/* ↑↑草莓巧克力選擇區塊↑↑ */





/* ↓↓抹茶巧克力選擇區塊↓↓ */
let left_menu_img5 = document.getElementsByClassName('left_menu_img5');

flag = true;
left_menu_img5[0].addEventListener('click', function () {
    middle_img_none();
    middle_img3[0].style.display = "block";
    middle_div1_box.style.display = '';
    allImg();
    middle_box_allimg();
    middle_box_img3.style.display = 'block';
    if (flag) {
        matcha_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse5_hover.svg';
    } else {
        matcha_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse5.svg'
    }
});
/* ↑↑抹茶巧克力選擇區塊↑↑ */


/* ↓↓焦糖巧克力選擇區塊↓↓ */
let left_menu_img6 = document.getElementsByClassName('left_menu_img6');

flag = true;
left_menu_img6[0].addEventListener('click', function () {
    middle_img_none();
    middle_img4[0].style.display = "block";
    middle_div1_box.style.display = '';
    allImg();
    middle_box_allimg();
    middle_box_img4.style.display = 'block';
    if (flag) {
        caramel_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse6_hover.svg';
    } else {
        caramel_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse6.svg'
    }
});
/* ↑↑抹茶巧克力選擇區塊↑↑ */


/* ↑↑口味選擇共用區塊↑↑ */


/* ↓↓模板選擇區塊↓↓ */

/* ↓↓第一個選擇↓↓ */
let left_menu5_img_a1 = document.getElementById('left_menu5_img_a1');

left_menu5_img_a1.addEventListener('click', function () {
    middle_img_none();
    middle_img5[0].style.display = "block";
       middle_div1_box.style.display = 'none';
    middle_box_allimg();
    middle_box_img7.style.display = 'block';
});

/* ↑↑第一個選擇↑↑ */

/* ↓↓第二個選擇↓↓ */

let left_menu5_img_a2 = document.getElementById('left_menu5_img_a2');

left_menu5_img_a2.addEventListener('click', function () {
    middle_img_none();
    middle_img6[0].style.display = "block";
    middle_div1_box.style.display = 'none';
    middle_box_allimg();
    middle_box_img8.style.display = 'block';
});

/* ↑↑第二個選擇↑↑ */

/* ↓↓第三個選擇↓↓ */

let left_menu5_img_a3 = document.getElementById('left_menu5_img_a3');

left_menu5_img_a3.addEventListener('click', function () {
    middle_img_none();
    middle_img7[0].style.display = "block";
    middle_div1_box.style.display = 'none';
    middle_box_allimg();
    middle_box_img9.style.display = 'block';
});

/* ↑↑第三個選擇↑↑ */


/* ↓↓第四個選擇↓↓ */

let left_menu5_img_a4 = document.getElementById('left_menu5_img_a4');

left_menu5_img_a4.addEventListener('click', function () {
    middle_img_none();
    middle_img8[0].style.display = "block";
    middle_div1_box.style.display = 'none';
    middle_box_allimg();
    middle_box_img10.style.display = 'block';
});

/* ↑↑第四個選擇↑↑ */


/* ↓↓第五個選擇↓↓ */

let left_menu5_img_a5 = document.getElementById('left_menu5_img_a5');

left_menu5_img_a5.addEventListener('click', function () {
    middle_img_none();
    middle_img9[0].style.display = "block";
    middle_div1_box.style.display = 'none';
    middle_box_allimg();
    middle_box_img11.style.display = 'block';
});

/* ↑↑第五個選擇↑↑ */


/* ↓↓第六個選擇↓↓ */

let left_menu5_img_a6 = document.getElementById('left_menu5_img_a6');

left_menu5_img_a6.addEventListener('click', function () {
    middle_img_none();
    middle_img10[0].style.display = "block";
    middle_div1_box.style.display = 'none';
    middle_box_allimg();
    middle_box_img12.style.display = 'block';
});

/* ↑↑第六個選擇↑↑ */

/* ↓↓文字選擇區塊↓↓ */
/* 顏色區塊設定 */
let left_menu3_p2_a1 = document.getElementById('left_menu3_p2_a1');
let left_menu3_p2_a2 = document.getElementById('left_menu3_p2_a2');
let left_menu3_p2_a3 = document.getElementById('left_menu3_p2_a3');
let left_menu3_p2_a4 = document.getElementById('left_menu3_p2_a4');

let left_menu3_p2_allA = [
    left_menu3_p2_a1,
    left_menu3_p2_a2,
    left_menu3_p2_a3,
    left_menu3_p2_a4
]
/* 顏色IMG區塊設定 */
let left_menu3_p2_a1_img1 = document.getElementById('left_menu3_p2_a1_img1');
let left_menu3_p2_a1_img2 = document.getElementById('left_menu3_p2_a1_img2');
let left_menu3_p2_a1_img3 = document.getElementById('left_menu3_p2_a1_img3');
let left_menu3_p2_a1_img4 = document.getElementById('left_menu3_p2_a1_img4');


function allChocolateText() {
    left_menu3_p2_a1_img1.src = './images/Custom_block/left_menu/third_floor/Ellipse1.svg';
    left_menu3_p2_a1_img2.src = './images/Custom_block/left_menu/third_floor/Ellipse2.svg';
    left_menu3_p2_a1_img3.src = './images/Custom_block/left_menu/third_floor/Ellipse3.svg';
    left_menu3_p2_a1_img4.src = './images/Custom_block/left_menu/third_floor/Ellipse4.svg';
}



left_menu3_p2_a1.addEventListener('click', () => {
    allChocolateText();
    if (flag) {
        left_menu3_p2_a1_img1.src = './images/Custom_block/left_menu/third_floor/Ellipse1_click.svg';
    } else {
        left_menu3_p2_a1_img1.src = './images/Custom_block/left_menu/third_floor/Ellipse1.svg'
    }
});

left_menu3_p2_a2.addEventListener('click', () => {
    allChocolateText();
    if (flag) {
        left_menu3_p2_a1_img2.src = './images/Custom_block/left_menu/third_floor/Ellipse2_click.svg';
    } else {
        left_menu3_p2_a1_img2.src = './images/Custom_block/left_menu/third_floor/Ellipse2.svg'
    }
});

left_menu3_p2_a3.addEventListener('click', () => {
    allChocolateText();
    if (flag) {
        left_menu3_p2_a1_img3.src = './images/Custom_block/left_menu/third_floor/Ellipse3_click.svg';
    } else {
        left_menu3_p2_a1_img3.src = './images/Custom_block/left_menu/third_floor/Ellipse3.svg'
    }
});

left_menu3_p2_a4.addEventListener('click', () => {
    allChocolateText();
    if (flag) {
        left_menu3_p2_a1_img4.src = './images/Custom_block/left_menu/third_floor/Ellipse4_click.svg';
    } else {
        left_menu3_p2_a1_img4.src = './images/Custom_block/left_menu/third_floor/Ellipse4.svg'
    }
});


/* 中間小顯示區塊 */


/* 客製化第一頁的左邊選擇欄位 */
let menu_below = document.getElementById('menu_below');
let left_sidebar = document.getElementById('left_sidebar');
let oldWidth = window.innerWidth;
window.addEventListener('resize', () => {
       left_menu[0].style.left = (left_sidebar.offsetWidth) + "px";
    left_menu2[0].style.left = (left_sidebar.offsetWidth) + "px";
    left_menu3[0].style.left = (left_sidebar.offsetWidth) + "px";
    left_menu4[0].style.left = (left_sidebar.offsetWidth) + "px";
    left_menu5[0].style.left = (left_sidebar.offsetWidth) + "px";
});



/* 客製化第一頁的中間小框框顯示區 */


/* 圖片儲存到loco上面 */

Prompt_field_img5.addEventListener('click', () => {
    console.log("click");
    localStorage.setItem('slab_chocolate', middle_box_img1.src);
});
