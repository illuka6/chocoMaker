

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




let three_page_div1_1_a1 = document.getElementById('left_sidebar_three_page_div1_1_a1');
let three_page_div1_1_a2 = document.getElementById('left_sidebar_three_page_div1_1_a2');
let three_page_div1_1_a3 = document.getElementById('left_sidebar_three_page_div1_1_a3');
let three_page_div1_1_a4 = document.getElementById('left_sidebar_three_page_div1_1_a4');
let three_page_div1_1_a5 = document.getElementById('left_sidebar_three_page_div1_1_a5');
let three_page_div1_1_a6 = document.getElementById('left_sidebar_three_page_div1_1_a6');
let three_page_div1_1_a7 = document.getElementById('left_sidebar_three_page_div1_1_a7');
let three_page_div1_1_a8 = document.getElementById('left_sidebar_three_page_div1_1_a8');


let center_second_page_img1 = document.getElementById('center_display_second_page_img1');
let center_second_page_img2 = document.getElementById('center_display_second_page_img2');
let center_second_page_img3 = document.getElementById('center_display_second_page_img3');
let center_second_page_img4 = document.getElementById('center_display_second_page_img4');
let center_second_page_img5 = document.getElementById('center_display_second_page_img5');
let center_second_page_img6 = document.getElementById('center_display_second_page_img6');
let center_second_page_img7 = document.getElementById('center_display_second_page_img7');



function boxImg() {
    center_second_page_img1.style.display = 'none';
    center_second_page_img2.style.display = 'none';
    center_second_page_img3.style.display = 'none';
    center_second_page_img4.style.display = 'none';
    center_second_page_img5.style.display = 'none';
    center_second_page_img6.style.display = 'none';
    center_second_page_img7.style.display = 'none';
}


three_page_div1_1_a1.addEventListener('click', () => {
    boxImg();
    center_second_page_img1.style.display = 'block';
});

three_page_div1_1_a3.addEventListener('click', () => {
    boxImg();
    center_second_page_img2.style.display = 'block';
});

three_page_div1_1_a4.addEventListener('click', () => {
    boxImg();
    center_second_page_img3.style.display = 'block';
});
three_page_div1_1_a5.addEventListener('click', () => {
    boxImg();
    center_second_page_img4.style.display = 'block';
});
three_page_div1_1_a6.addEventListener('click', () => {
    boxImg();
    center_second_page_img5.style.display = 'block';
});
three_page_div1_1_a7.addEventListener('click', () => {
    boxImg();
    center_second_page_img6.style.display = 'block';
});
three_page_div1_1_a8.addEventListener('click', () => {
    boxImg();
    center_second_page_img7.style.display = 'block';
});



let Zone_three_white = document.getElementById('Zone_three_white');
let Zone_three_almonds = document.getElementById('Zone_three_almonds');
let Zone_three_blue = document.getElementById('Zone_three_blue');
let District_three_pink = document.getElementById('District_three_pink');
let Zone_three_brown = document.getElementById('Zone_three_brown');
let Zone_three_green = document.getElementById('Zone_three_green');

let Zone_three_white_img = document.getElementById('Zone_three_white_img');
let Zone_three_almonds_img = document.getElementById('Zone_three_almonds_img');
let Zone_three_blue_img = document.getElementById('Zone_three_blue_img');
let District_three_pink_img = document.getElementById('District_three_pink_img');
let Zone_three_brown_img = document.getElementById('Zone_three_brown_img');
let Zone_three_green_img = document.getElementById('Zone_three_green_img');

function color_Filling() {
    Zone_three_white_img.src = './images/Custom_block/box/left_sidebar/Frame 9.svg';
    Zone_three_almonds_img.src = './images/Custom_block/box/left_sidebar/Frame 10.svg';
    Zone_three_blue_img.src = './images/Custom_block/box/left_sidebar/Frame 11.svg';
    District_three_pink_img.src = './images/Custom_block/box/left_sidebar/Frame 12.svg';
    Zone_three_brown_img.src = './images/Custom_block/box/left_sidebar/Frame 13.svg';
    Zone_three_green_img.src = './images/Custom_block/box/left_sidebar/Frame 14.svg';
};

let box_color = true;
Zone_three_white.addEventListener('click', () => {
    color_Filling();
    if (box_color) {
        Zone_three_white_img.src = './images/Custom_block/box/left_sidebar/Frame 9-click.svg';
    } else {
        Zone_three_white_img.src = './images/Custom_block/box/left_sidebar/Frame 9.svg';
    }
});


Zone_three_almonds.addEventListener('click', () => {
    color_Filling();
    if (box_color) {
        Zone_three_almonds_img.src = './images/Custom_block/box/left_sidebar/Frame 10-click.svg';
    } else {
        Zone_three_almonds_img.src = './images/Custom_block/box/left_sidebar/Frame 10.svg';
    }
});


Zone_three_blue.addEventListener('click', () => {
    color_Filling();
    if (box_color) {
        Zone_three_blue_img.src = './images/Custom_block/box/left_sidebar/Frame 11-click.svg';
    } else {
        Zone_three_blue_img.src = './images/Custom_block/box/left_sidebar/Frame 11.svg';
    }
});




District_three_pink.addEventListener('click', () => {
    color_Filling();
    if (box_color) {
        District_three_pink_img.src = './images/Custom_block/box/left_sidebar/Frame 12-click.svg';
    } else {
        District_three_pink_img.src = './images/Custom_block/box/left_sidebar/Frame 12.svg';
    }
});


Zone_three_brown.addEventListener('click', () => {
    color_Filling();
    if (box_color) {
        Zone_three_brown_img.src = './images/Custom_block/box/left_sidebar/Frame 13-click.svg';
    } else {
        Zone_three_brown_img.src = './images/Custom_block/box/left_sidebar/Frame 13.svg';
    }
});


Zone_three_green.addEventListener('click', () => {
    color_Filling();
    if (box_color) {
        Zone_three_green_img.src = './images/Custom_block/box/left_sidebar/Frame 14-click.svg';
    } else {
        Zone_three_green_img.src = './images/Custom_block/box/left_sidebar/Frame 14.svg';
    }
});

