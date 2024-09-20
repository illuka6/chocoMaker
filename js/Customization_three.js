

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


/* 顏色選擇區塊 */
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





/* 緞帶顏色選擇區塊 */
let ribbon_red = document.getElementById('ribbon_red');
let ribbon_orange = document.getElementById('ribbon_orange');
let ribbon_yellow = document.getElementById('ribbon_yellow');
let ribbon_pink = document.getElementById('ribbon_pink');

let ribbon_red_img = document.getElementById('ribbon_red_img');
let ribbon_orange_img = document.getElementById('ribbon_orange_img');
let ribbon_yellow_img = document.getElementById('ribbon_yellow_img');
let ribbon_pink_img = document.getElementById('ribbon_pink_img');

function ribbon_color() {
    ribbon_red_img.src = './images/Custom_block/box/left_sidebar/Frame 16.svg';
    ribbon_orange_img.src = './images/Custom_block/box/left_sidebar/Frame 17.svg';
    ribbon_yellow_img.src = './images/Custom_block/box/left_sidebar/Frame 18.svg';
    ribbon_pink_img.src = './images/Custom_block/box/left_sidebar/Frame 19.svg';
};



ribbon_red.addEventListener('click', () => {
    ribbon_color();
    if (box_color) {
        ribbon_red_img.src = './images/Custom_block/box/left_sidebar/Frame 16-click.svg';
    } else {
        ribbon_red_img.src = './images/Custom_block/box/left_sidebar/Frame 16.svg';
    }
});




ribbon_orange.addEventListener('click', () => {
    ribbon_color();
    if (box_color) {
        ribbon_orange_img.src = './images/Custom_block/box/left_sidebar/Frame 17-click.svg';
    } else {
        ribbon_orange_img.src = './images/Custom_block/box/left_sidebar/Frame 17.svg';
    }
});


ribbon_yellow.addEventListener('click', () => {
    ribbon_color();
    if (box_color) {
        ribbon_yellow_img.src = './images/Custom_block/box/left_sidebar/Frame 18-click.svg';
    } else {
        ribbon_yellow_img.src = './images/Custom_block/box/left_sidebar/Frame 18.svg';
    }
});


ribbon_pink.addEventListener('click', () => {
    ribbon_color();
    if (box_color) {
        ribbon_pink_img.src = './images/Custom_block/box/left_sidebar/Frame 19-click.svg';
    } else {
        ribbon_pink_img.src = './images/Custom_block/box/left_sidebar/Frame 19.svg';
    }
});






/* 緞帶款式選擇區塊 */
let bow_tie1 = document.getElementById('bow_tie1');
let bow_tie2 = document.getElementById('bow_tie2');
let bow_tie3 = document.getElementById('bow_tie3');
let bow_tie4 = document.getElementById('bow_tie4');

let bow_tie1_img = document.getElementById('bow_tie1_img');
let bow_tie2_img = document.getElementById('bow_tie2_img');
let bow_tie3_img = document.getElementById('bow_tie3_img');
let bow_tie4_img = document.getElementById('bow_tie4_img');

function bow_tie() {
    bow_tie1_img.src = './images/Custom_block/box/left_sidebar/Frame 21.svg';
    bow_tie2_img.src = './images/Custom_block/box/left_sidebar/Frame 22.svg';
    bow_tie3_img.src = './images/Custom_block/box/left_sidebar/Frame 23.svg';
    bow_tie4_img.src = './images/Custom_block/box/left_sidebar/Frame 24.svg';
};



bow_tie1.addEventListener('click', () => {
    bow_tie();
    if (box_color) {
        bow_tie1_img.src = './images/Custom_block/box/left_sidebar/Frame 21_click.svg';
    } else {
        bow_tie1_img.src = './images/Custom_block/box/left_sidebar/Frame 21.svg';
    }
});




bow_tie2.addEventListener('click', () => {
    bow_tie();
    if (box_color) {
        bow_tie2_img.src = './images/Custom_block/box/left_sidebar/Frame 22_click.svg';
    } else {
        bow_tie2_img.src = './images/Custom_block/box/left_sidebar/Frame 22.svg';
    }
});


bow_tie3.addEventListener('click', () => {
    bow_tie();
    if (box_color) {
        bow_tie3_img.src = './images/Custom_block/box/left_sidebar/Frame 23_click.svg';
    } else {
        bow_tie3_img.src = './images/Custom_block/box/left_sidebar/Frame 23.svg';
    }
});


bow_tie4.addEventListener('click', () => {
    bow_tie();
    if (box_color) {
        bow_tie4_img.src = './images/Custom_block/box/left_sidebar/Frame 24_click.svg';
    } else {
        bow_tie4_img.src = './images/Custom_block/box/left_sidebar/Frame 24.svg';
    }
});




/* 圖片儲存到loco上面 */
let Prompt_field_img5 = document.getElementById('Prompt_field_img5');
Prompt_field_img5.addEventListener('click', () => {
    console.log("click");
    localStorage.setItem('selectedImage', center_second_page_img6.src);
});
