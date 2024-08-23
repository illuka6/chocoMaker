

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



/* 客製化第二頁 */
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
let select_field1__second_page = document.getElementById("select_field1__second_page");
let select_field2__second_page = document.getElementById("select_field2__second_page");
let select_field3__second_page = document.getElementById("select_field3__second_page");

function select_field() {
    select_field1__second_page.style.display = 'none';
    select_field2__second_page.style.display = 'none';
    select_field3__second_page.style.display = 'none';
}
/* ↑↑左邊側邊欄位衍伸區塊↑↑ */

/* ↓↓左邊側邊欄位衍伸小按鈕區塊↓↓ */
let select_field1_btn = document.getElementById('select_field1_btn');
let select_field2__second_page_btn = document.getElementById('select_field2__second_page_btn');
let select_field3__second_page_btn = document.getElementById('select_field3__second_page_btn');

function select_field_btn() {
    select_field1_btn.style.display = 'none';
    select_field2__second_page_btn.style.display = 'none';
    select_field3__second_page_btn.style.display = 'none';
}
/* ↑↑左邊側邊欄位衍伸小按鈕區塊↑↑ */

/* ↓↓左邊側邊欄位(顯示器)↓↓ */

/* 第一個 */
left_sidebar_img_1.addEventListener('click', function () {
    select_field();
    select_field_btn();
    background();
    select_field1__second_page.style.display = "block";
    select_field1_btn.style.display = 'block';
    left_sidebar_img_1.style.backgroundImage = "url(../images/Custom_block/background.svg)";
    left_sidebar_img_1.style.borderRadius = '20px 0 0 20px';
});

select_field1_btn.addEventListener('click', function () {
    select_field1__second_page.style.display = "none";
    select_field1_btn.style.display = 'none';
    left_sidebar_img_1.style.backgroundImage = "url('')";
});

/* 第二個 */
left_sidebar_img_2.addEventListener('click', function () {
    select_field();
    select_field_btn();
    background();
    select_field2__second_page.style.display = "block";
    select_field2__second_page_btn.style.display = 'block';
    left_sidebar_img_2.style.backgroundImage = "url(../images/Custom_block/background.svg)";
    left_sidebar_img_2.style.borderRadius = '20px 0 0 20px';
});

select_field2__second_page_btn.addEventListener('click', function () {
    select_field2__second_page_btn.style.display = "none";
    select_field2__second_page.style.display = 'none';
    left_sidebar_img_2.style.backgroundImage = "url('')";
});

/* 第三個 */
left_sidebar_img_3.addEventListener('click', function () {
    select_field();
    select_field_btn();
    background();
    select_field3__second_page.style.display = "block";
    select_field3__second_page_btn.style.display = 'block';
    left_sidebar_img_3.style.backgroundImage = "url(../images/Custom_block/background.svg)";
    left_sidebar_img_3.style.borderRadius = '20px 0 0 20px';
});

select_field3__second_page_btn.addEventListener('click', function () {
    select_field3__second_page_btn.style.display = "none";
    select_field3__second_page.style.display = 'none';
    left_sidebar_img_3.style.backgroundImage = "url('')";
});


/* 客製化第二頁的左邊選擇欄位縮放功能 */
let left_sidebar_second_page = document.getElementById('left_sidebar_second_page');
window.addEventListener('resize', () => {
    select_field1__second_page.style.left = (left_sidebar_second_page.offsetWidth) + "px";
    select_field2__second_page.style.left = (left_sidebar_second_page.offsetWidth) + "px";
    select_field3__second_page.style.left = (left_sidebar_second_page.offsetWidth) + "px";
});








/* ↓↓圖片顯示區塊↓↓ */
let milk_chocolate = document.getElementById('milk_chocolate');
let dark_chocolate = document.getElementById('dark_chocolate');
let white_chocolatea = document.getElementById('white_chocolatea');
let strawberry_chocolate = document.getElementById('strawberry_chocolate');




let milk_chocolate_box = document.getElementById('milk_chocolate_box');
let dark_chocolate_box = document.getElementById('dark_chocolate_box');
let white_chocolatea_box = document.getElementById('white_chocolatea_box');
let strawberry_chocolate_box = document.getElementById('strawberry_chocolate_box');


let chocolate_color = [
    milk_chocolate_box,
    dark_chocolate_box,
    white_chocolatea_box,
    strawberry_chocolate_box
]

let chocolate_src_click = [
    milk_chocolate.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 4-1.svg',
    dark_chocolate.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 5-1.svg',
    white_chocolatea.src = '../images/Custom_block/small_chocolate/left_sidebar/Frame 6-1.svg',
    strawberry_chocolate.src = '../images/Custom_block/small_chocolate/left_sidebar/Frame 7-1.svg'
]



// console.log(chocolate_color)

function allImg() {
    milk_chocolate.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 4.svg';
    dark_chocolate.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 5.svg';
    white_chocolatea.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 6.svg';
    strawberry_chocolate.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 7.svg';
};



milk_chocolate.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 4.svg';
dark_chocolate.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 5.svg';
white_chocolatea.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 6.svg';
strawberry_chocolate.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 7.svg';

let chocolate_src = [
    milk_chocolate.src,
    dark_chocolate.src,
    white_chocolatea.src,
    strawberry_chocolate.src
]



// console.log(chocolate_src);
/* ↑↑圖片顯示區塊↑↑ */

/* -------------------------------------------------- */


/* ↓↓牛奶巧克力選擇區塊↓↓ */
// let milk_chocolate_box = document.getElementById('milk_chocolate_box');
// let flag = true;
for (let i = 0; i < chocolate_color.length; i++) {
    chocolate_color[i].addEventListener('click', function () {
        allImg();
        for (let j = 0; j < chocolate_src.length; j++) {
            // chocolate_src_click[i]='';
            // chocolate_src[j] = chocolate_src_click[i];
            console.log('換圖');
        }
    });
};
/* ↑↑牛奶巧克力選擇區塊↑↑ */




















/* ↓↓牛奶巧克力選擇區塊↓↓ */
// let milk_chocolate_box = document.getElementById('milk_chocolate_box');
// let flag = true;
// milk_chocolate_box.addEventListener('click', function () {
//     allImg();
//     if (flag) {
//         milk_chocolate.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 4-1.svg';
//     } else {
//         milk_chocolate.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 4.svg';
//         console.log(milk_chocolate)
//     }
// });
/* ↑↑牛奶巧克力選擇區塊↑↑ */


/* ↓↓黑巧克力選擇區塊↓↓ */
// let dark_chocolate_box = document.getElementById('dark_chocolate_box');
// dark_chocolate_box.addEventListener('click', function () {
//     allImg();
//     if (flag) {
//         dark_chocolate.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 5-1.svg';
//     } else {
//         dark_chocolate.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 5.svg';
//         console.log(milk_chocolate)
//     }
// });
/* ↑↑黑巧克力選擇區塊↑↑ */

/* ↓↓白巧克力選擇區塊↓↓ */
// let white_chocolatea_box = document.getElementById('white_chocolatea_box');
// white_chocolatea_box.addEventListener('click', function () {
//     allImg();
//     if (flag) {
//         white_chocolatea.src = '../images/Custom_block/small_chocolate/left_sidebar/Frame 6-1.svg';
//     } else {
//         white_chocolatea.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 6.svg';
//         console.log(milk_chocolate)
//     }
// });
/* ↑↑白巧克力選擇區塊↑↑ */

/* ↓↓草莓巧克力選擇區塊↓↓ */
// let strawberry_chocolate_box = document.getElementById('strawberry_chocolate_box');
// strawberry_chocolate_box.addEventListener('click', function () {
//     allImg();
//     if (flag) {
//         strawberry_chocolate.src = '../images/Custom_block/small_chocolate/left_sidebar/Frame 7-1.svg';
//     } else {
//         strawberry_chocolate.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 7.svg';
//         console.log(milk_chocolate)
//     }
// });
/* ↑↑草莓巧克力選擇區塊↑↑ */