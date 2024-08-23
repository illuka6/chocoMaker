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
};


let milk_chocolate = document.getElementById('milk_chocolate');
let dark_chocolate = document.getElementById('dark_chocolate');
let white_chocolate = document.getElementById('white_chocolate');
let strawberry_chocolate = document.getElementById('strawberry_chocolate');
let matcha_chocolate = document.getElementById('matcha_chocolate');
let caramel_chocolate = document.getElementById('caramel_chocolate');
function allImg() {
    milk_chocolate.src = './images/Custom_block/left_menu/first_floor/Frame 1.svg';
    dark_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse 2.svg';
    white_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse 3.svg';
    strawberry_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse 4.svg';
    matcha_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse 5.svg';
    caramel_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse 6.svg';
};




/* ↑↑圖片顯示區塊↑↑ */

/* -------------------------------------------------- */

/* ↓↓牛奶巧克力選擇區塊↓↓ */
let middle_div1_box = document.getElementById('middle_div1_box');
let left_menu_img1 = document.getElementsByClassName('left_menu_img1');
// let left_menu_img1 = document.getElementsByClassName('left_menu_img1');
// console.log(left_menu_img1);
let flag = true;
left_menu_img1[0].addEventListener('click', function () {
    middle_div1_box.style.display = '';
    middle_img_none();
    middle_img1[0].style.display = "block";
    allImg();
    if (flag) {
        milk_chocolate.src = './images/Custom_block/left_menu/first_floor/Frame 1_hover.svg';
    } else {
        milk_chocolate.src = './images/Custom_block/left_menu/first_floor/Frame 1.svg';
    }
});
/* ↑↑牛奶巧克力選擇區塊↑↑ */


/* ↓↓黑巧克力選擇區塊↓↓ */
let left_menu_img2 = document.getElementsByClassName('left_menu_img2');
// let left_menu_img1 = document.getElementsByClassName('left_menu_img1');
// console.log(left_menu_img1);
flag = true;
left_menu_img2[0].addEventListener('click', function () {
    middle_img_none();
    middle_div1_box.style.display = '';
    allImg();
    if (flag) {
        dark_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse 2_hover.svg';
    } else {
        dark_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse 2.svg';
    }
});

/* ↑↑黑巧克力選擇區塊↑↑ */

/* ↓↓白巧克力選擇區塊↓↓ */
let left_menu_img3 = document.getElementsByClassName('left_menu_img3');
// let left_menu_img1 = document.getElementsByClassName('left_menu_img1');
// console.log(left_menu_img1);
flag = true;
left_menu_img3[0].addEventListener('click', function () {
    middle_img_none();
    middle_div1_box.style.display = '';
    allImg();
    if (flag) {
        white_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse 3_hover.svg';
    } else {
        white_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse 3.svg';
    }
});
/* ↑↑白巧克力選擇區塊↑↑ */


/* ↓↓草莓巧克力選擇區塊↓↓ */
let left_menu_img4 = document.getElementsByClassName('left_menu_img4');
// let left_menu_img1 = document.getElementsByClassName('left_menu_img1');
// console.log(left_menu_img1);

flag = true;
left_menu_img4[0].addEventListener('click', function () {
    middle_img_none();
    middle_img2[0].style.display = "block";
    middle_div1_box.style.display = '';
    allImg();
    if (flag) {
        src = './images/Custom_block/left_menu/first_floor/Ellipse 4_hover.svg';
    } else {
        strawberry_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse 4.svg'
    }
});
/* ↑↑草莓巧克力選擇區塊↑↑ */





/* ↓↓抹茶巧克力選擇區塊↓↓ */
let left_menu_img5 = document.getElementsByClassName('left_menu_img5');
// let left_menu_img1 = document.getElementsByClassName('left_menu_img1');
// console.log(left_menu_img1);

flag = true;
left_menu_img5[0].addEventListener('click', function () {
    middle_img_none();
    middle_img3[0].style.display = "block";
    middle_div1_box.style.display = '';
    allImg();
    if (flag) {
        matcha_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse 5_hover.svg';
    } else {
        matcha_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse 5.svg'
    }
});
/* ↑↑抹茶巧克力選擇區塊↑↑ */


/* ↓↓焦糖巧克力選擇區塊↓↓ */
let left_menu_img6 = document.getElementsByClassName('left_menu_img6');
// let left_menu_img1 = document.getElementsByClassName('left_menu_img1');
// console.log(left_menu_img1);

flag = true;
left_menu_img6[0].addEventListener('click', function () {
    middle_img_none();
    middle_img4[0].style.display = "block";
    middle_div1_box.style.display = '';
    allImg();
    if (flag) {
        caramel_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse 6_hover.svg';
    } else {
        caramel_chocolate.src = './images/Custom_block/left_menu/first_floor/Ellipse 6.svg'
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
    // middle_div1_box.style.display = 'block;'
    middle_div1_box.style.display = 'none';
});

/* ↑↑第一個選擇↑↑ */

/* ↓↓第二個選擇↓↓ */

let left_menu5_img_a2 = document.getElementById('left_menu5_img_a2');

left_menu5_img_a2.addEventListener('click', function () {
    middle_img_none();
    middle_img6[0].style.display = "block";
    middle_div1_box.style.display = 'none';
});

/* ↑↑第二個選擇↑↑ */

/* ↓↓第三個選擇↓↓ */

let left_menu5_img_a3 = document.getElementById('left_menu5_img_a3');

left_menu5_img_a3.addEventListener('click', function () {
    middle_img_none();
    middle_img7[0].style.display = "block";
    middle_div1_box.style.display = 'none';
});

/* ↑↑第三個選擇↑↑ */


/* ↓↓第四個選擇↓↓ */

let left_menu5_img_a4 = document.getElementById('left_menu5_img_a4');

left_menu5_img_a4.addEventListener('click', function () {
    middle_img_none();
    middle_img8[0].style.display = "block";
    middle_div1_box.style.display = 'none';
});

/* ↑↑第四個選擇↑↑ */


/* ↓↓第五個選擇↓↓ */

let left_menu5_img_a5 = document.getElementById('left_menu5_img_a5');

left_menu5_img_a5.addEventListener('click', function () {
    middle_img_none();
    middle_img9[0].style.display = "block";
    middle_div1_box.style.display = 'none';
});

/* ↑↑第五個選擇↑↑ */


/* ↓↓第六個選擇↓↓ */

let left_menu5_img_a6 = document.getElementById('left_menu5_img_a6');

left_menu5_img_a6.addEventListener('click', function () {
    middle_img_none();
    middle_img10[0].style.display = "block";
    middle_div1_box.style.display = 'none';
});

/* ↑↑第五個選擇↑↑ */

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
    left_menu3_p2_a1_img1.src = './images/Custom_block/left_menu/third_floor/Ellipse 1.svg';
    left_menu3_p2_a1_img2.src = './images/Custom_block/left_menu/third_floor/Ellipse 2.svg';
    left_menu3_p2_a1_img3.src = './images/Custom_block/left_menu/third_floor/Ellipse 3.svg';
    left_menu3_p2_a1_img4.src = './images/Custom_block/left_menu/third_floor/Ellipse 4.svg';
}



left_menu3_p2_a1.addEventListener('click', () => {
    allChocolateText();
    if (flag) {
        left_menu3_p2_a1_img1.src = './images/Custom_block/left_menu/third_floor/Ellipse 1_click.svg';
    } else {
        left_menu3_p2_a1_img1.src = './images/Custom_block/left_menu/third_floor/Ellipse 1.svg'
    }
});

left_menu3_p2_a2.addEventListener('click', () => {
    allChocolateText();
    if (flag) {
        left_menu3_p2_a1_img2.src = './images/Custom_block/left_menu/third_floor/Ellipse 2_click.svg';
    } else {
        left_menu3_p2_a1_img2.src = './images/Custom_block/left_menu/third_floor/Ellipse 2.svg'
    }
});

left_menu3_p2_a3.addEventListener('click', () => {
    allChocolateText();
    if (flag) {
        left_menu3_p2_a1_img3.src = './images/Custom_block/left_menu/third_floor/Ellipse 3_click.svg';
    } else {
        left_menu3_p2_a1_img3.src = './images/Custom_block/left_menu/third_floor/Ellipse 3.svg'
    }
});

left_menu3_p2_a4.addEventListener('click', () => {
    allChocolateText();
    if (flag) {
        left_menu3_p2_a1_img4.src = './images/Custom_block/left_menu/third_floor/Ellipse 4_click.svg';
    } else {
        left_menu3_p2_a1_img4.src = './images/Custom_block/left_menu/third_floor/Ellipse 4.svg'
    }
});



/* 中間小顯示區塊 */
// let middle_box = document.getElementsByClassName('middle_box');
// middle_box[0].addEventListener('resize', () => {
//     middle_box.style.margin = '0px 500px 0px 0px';
// });
// left_menu = document.getElementsByClassName{'letf_menu'};

/* 客製化第一頁的左邊選擇欄位 */
let menu_below = document.getElementById('menu_below');
let left_sidebar = document.getElementById('left_sidebar');
let oldWidth = window.innerWidth;
window.addEventListener('resize', () => {
    // let newWidth = window.innerWidth;
    // let allWidth = oldWidth - newWidth;
    // menu_below.style.left = window_width * 0.1 + 'px';
    // left_menu[0].style.right = allWidth + 'px';
    // allWidth = newWidth;
    // let left_sidebar_left = left_sidebar[0].getBoundingClientRect().left;
    // left_menu[0].style.left = left_sidebar_left + 'px';
    left_menu[0].style.left = (left_sidebar.offsetWidth) + "px";
    left_menu2[0].style.left = (left_sidebar.offsetWidth) + "px";
    left_menu3[0].style.left = (left_sidebar.offsetWidth) + "px";
    left_menu4[0].style.left = (left_sidebar.offsetWidth) + "px";
    left_menu5[0].style.left = (left_sidebar.offsetWidth) + "px";
});



/* 客製化第一頁的中間小框框顯示區 */
// let all = document.getElementById('all');
// let middle = document.getElementsByClassName('middle')[0];
// let middle_box = document.getElementsByClassName('middle_box')[0];
// window.addEventListener('resize', () => {
//     middle_box.style.right = (middle.offsetWidth) + 'px';
// });



