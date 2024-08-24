

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



/* 客製化第四頁 */
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
let left_sidebar_four_page_div1 = document.getElementById("left_sidebar_four_page_div1");
let left_sidebar_four_page_div2 = document.getElementById("left_sidebar_four_page_div2");
let left_sidebar_four_page_div3_div1 = document.getElementById("left_sidebar_four_page_div3_div1");

function select_field() {
    left_sidebar_four_page_div1.style.display = 'none';
    left_sidebar_four_page_div2.style.display = 'none';
    left_sidebar_four_page_div3_div1.style.display = 'none';
}
/* ↑↑左邊側邊欄位衍伸區塊↑↑ */

/* ↓↓左邊側邊欄位衍伸小按鈕區塊↓↓ */
let left_sidebar_four_page_div1_box = document.getElementById('left_sidebar_four_page_div1_box');
let left_sidebar_four_page_div2_box = document.getElementById('left_sidebar_four_page_div2_box');
let left_sidebar_four_page_div3_box = document.getElementById('left_sidebar_four_page_div3_box');

function select_field_btn() {
    left_sidebar_four_page_div1_box.style.display = 'none';
    left_sidebar_four_page_div2_box.style.display = 'none';
    left_sidebar_four_page_div3_box.style.display = 'none';
}
/* ↑↑左邊側邊欄位衍伸小按鈕區塊↑↑ */

/* ↓↓左邊側邊欄位(顯示器)↓↓ */

/* 第一個 */
left_sidebar_img_1.addEventListener('click', function () {
    select_field();
    select_field_btn();
    background();
    left_sidebar_four_page_div1.style.display = "block";
    left_sidebar_four_page_div1_box.style.display = 'block';
    left_sidebar_img_1.style.backgroundImage = "url(../images/Custom_block/background.svg)";
    left_sidebar_img_1.style.borderRadius = '20px 0 0 20px';
});

left_sidebar_four_page_div1_box.addEventListener('click', function () {
    left_sidebar_four_page_div1_box.style.display = "none";
    left_sidebar_four_page_div1.style.display = 'none';
    left_sidebar_img_1.style.backgroundImage = "url('')";
});

/* 第二個 */
left_sidebar_img_2.addEventListener('click', function () {
    select_field();
    select_field_btn();
    background();
    left_sidebar_four_page_div2.style.display = "block";
    left_sidebar_four_page_div2_box.style.display = 'block';
    left_sidebar_img_2.style.backgroundImage = "url(../images/Custom_block/background.svg)";
    left_sidebar_img_2.style.borderRadius = '20px 0 0 20px';
});

left_sidebar_four_page_div2_box.addEventListener('click', function () {
    left_sidebar_four_page_div2.style.display = "none";
    left_sidebar_four_page_div2_box.style.display = 'none';
    left_sidebar_img_2.style.backgroundImage = "url('')";
});

/* 第三個 */
left_sidebar_img_3.addEventListener('click', function () {
    select_field();
    select_field_btn();
    background();
    left_sidebar_four_page_div3_div1.style.display = "block";
    left_sidebar_four_page_div3_box.style.display = 'block';
    left_sidebar_img_3.style.backgroundImage = "url(../images/Custom_block/background.svg)";
    left_sidebar_img_3.style.borderRadius = '20px 0 0 20px';
});

left_sidebar_four_page_div3_box.addEventListener('click', function () {
    left_sidebar_four_page_div3_div1.style.display = "none";
    left_sidebar_four_page_div3_box.style.display = 'none';
    left_sidebar_img_3.style.backgroundImage = "url('')";
});


/* 客製化第二頁的左邊選擇欄位縮放功能 */
let left_sidebar_second_page = document.getElementById('left_sidebar_second_page');
window.addEventListener('resize', () => {
    left_sidebar_four_page_div1.style.left = (left_sidebar_second_page.offsetWidth) + "px";
    left_sidebar_four_page_div2.style.left = (left_sidebar_second_page.offsetWidth) + "px";
    left_sidebar_four_page_div3_div1.style.left = (left_sidebar_second_page.offsetWidth) + "px";
});




/* 樣式盒子的按鈕 */
let left_sidebar_four_page_div1_div_a1 = document.getElementById
    ('left_sidebar_four_page_div1_div_a1');
let left_sidebar_four_page_div1_div_a2 = document.getElementById
    ('left_sidebar_four_page_div1_div_a2');
let left_sidebar_four_page_div1_div_a3 = document.getElementById
    ('left_sidebar_four_page_div1_div_a3');
let left_sidebar_four_page_div1_div_a4 = document.getElementById
    ('left_sidebar_four_page_div1_div_a4');
let left_sidebar_four_page_div1_div_a5 = document.getElementById
    ('left_sidebar_four_page_div1_div_a5');
let left_sidebar_four_page_div1_div_a6 = document.getElementById
    ('left_sidebar_four_page_div1_div_a6');
let left_sidebar_four_page_div1_div_a7 = document.getElementById
    ('left_sidebar_four_page_div1_div_a7');
let left_sidebar_four_page_div1_div_a8 = document.getElementById
    ('left_sidebar_four_page_div1_div_a8');
let left_sidebar_four_page_div1_div_a9 = document.getElementById
    ('left_sidebar_four_page_div1_div_a9');


/* 中間顯示設定卡片區 */
let center_display_second_page_card1 = document.getElementById
    ('center_display_second_page_card1');
let center_display_second_page_card2 = document.getElementById
    ('center_display_second_page_card2');
let center_display_second_page_card3 = document.getElementById
    ('center_display_second_page_card3');
let center_display_second_page_card4 = document.getElementById
    ('center_display_second_page_card4');
let center_display_second_page_card5 = document.getElementById
    ('center_display_second_page_card5');
let center_display_second_page_card6 = document.getElementById
    ('center_display_second_page_card6');
let center_display_second_page_card7 = document.getElementById
    ('center_display_second_page_card7');
let center_display_second_page_card8 = document.getElementById
    ('center_display_second_page_card8');
let center_display_second_page_card9 = document.getElementById
    ('center_display_second_page_card9');

function second_page_card() {
    center_display_second_page_card1.style.display = 'none';
    center_display_second_page_card2.style.display = 'none';
    center_display_second_page_card3.style.display = 'none';
    center_display_second_page_card4.style.display = 'none';
    center_display_second_page_card5.style.display = 'none';
    center_display_second_page_card6.style.display = 'none';
    center_display_second_page_card7.style.display = 'none';
    center_display_second_page_card8.style.display = 'none';
    center_display_second_page_card9.style.display = 'none';
};


/* 中央卡片顯示區快 */
left_sidebar_four_page_div1_div_a1.addEventListener('click', () => {
    second_page_card();
    center_display_second_page_card1.style.display = 'block';
});

left_sidebar_four_page_div1_div_a2.addEventListener('click', () => {
    second_page_card();
    center_display_second_page_card2.style.display = 'block';
});

left_sidebar_four_page_div1_div_a3.addEventListener('click', () => {
    second_page_card();
    center_display_second_page_card3.style.display = 'block';
});

left_sidebar_four_page_div1_div_a4.addEventListener('click', () => {
    second_page_card();
    center_display_second_page_card4.style.display = 'block';
});

left_sidebar_four_page_div1_div_a5.addEventListener('click', () => {
    second_page_card();
    center_display_second_page_card5.style.display = 'block';
});

left_sidebar_four_page_div1_div_a6.addEventListener('click', () => {
    second_page_card();
    center_display_second_page_card6.style.display = 'block';
});

left_sidebar_four_page_div1_div_a7.addEventListener('click', () => {
    second_page_card();
    center_display_second_page_card7.style.display = 'block';
});

left_sidebar_four_page_div1_div_a8.addEventListener('click', () => {
    second_page_card();
    center_display_second_page_card8.style.display = 'block';
});

left_sidebar_four_page_div1_div_a9.addEventListener('click', () => {
    second_page_card();
    center_display_second_page_card9.style.display = 'block';
});




let four_page_div3_input = document.getElementById('left_sidebar_four_page_div3_input');
let center_display_second_page_divp = document.getElementById('center_display_second_page_divp');
four_page_div3_input.addEventListener('input', () => {
    console.log('有改文字');
    let textInput = four_page_div3_input.value;
    // center_display_second_page_divp=textInput;
    center_display_second_page_divp.textContent = textInput;
});




let Zone_four_white = document.getElementById('Zone_four_white');
let Zone_four_Almonds = document.getElementById('Zone_four_Almonds');
let Zone_four_Blue = document.getElementById('Zone_four_Blue');
let Zone_four_pink = document.getElementById('Zone_four_pink');
let Zone_four_brown = document.getElementById('Zone_four_brown');
let Zone_four_Green = document.getElementById('Zone_four_Green');

let Zone_four_white_img = document.getElementById('Zone_four_white_img');
let Zone_four_Almonds_img = document.getElementById('Zone_four_Almonds_img');
let Zone_four_Blue_img = document.getElementById('Zone_four_Blue_img');
let Zone_four_pink_img = document.getElementById('Zone_four_pink_img');
let Zone_four_brown_img = document.getElementById('Zone_four_brown_img');
let Zone_four_Green_img = document.getElementById('Zone_four_Green_img');

function card_Filling() {
    Zone_four_white_img.src = './images/Custom_block/box/left_sidebar/Frame 9.svg';
    Zone_four_Almonds_img.src = './images/Custom_block/box/left_sidebar/Frame 10.svg';
    Zone_four_Blue_img.src = './images/Custom_block/box/left_sidebar/Frame 11.svg';
    Zone_four_pink_img.src = './images/Custom_block/box/left_sidebar/Frame 12.svg';
    Zone_four_brown_img.src = './images/Custom_block/box/left_sidebar/Frame 13.svg';
    Zone_four_Green_img.src = './images/Custom_block/box/left_sidebar/Frame 14.svg';
};

let card_color = true;
Zone_four_white.addEventListener('click', () => {
    card_Filling();
    if (card_color) {
        Zone_four_white_img.src = './images/Custom_block/Customized_cards/left_sidebar/Frame 2_click.svg';
    } else {
        Zone_four_white_img.src = './images/Custom_block/Customized_cards/left_sidebar/Frame 2.svg';
    }
});


Zone_four_Almonds.addEventListener('click', () => {
    card_Filling();
    if (card_color) {
        Zone_four_Almonds_img.src = './images/Custom_block/Customized_cards/left_sidebar/Frame 3_click.svg';
    } else {
        Zone_four_Almonds_img.src = './images/Custom_block/Customized_cards/left_sidebar/Frame 3.svg';
    }
});


Zone_four_Blue.addEventListener('click', () => {
    card_Filling();
    if (card_color) {
        Zone_four_Blue_img.src = './images/Custom_block/Customized_cards/left_sidebar/Frame 4_click.svg';
    } else {
        Zone_four_Blue_img.src = './images/Custom_block/Customized_cards/left_sidebar/Frame 4.svg';
    }
});




Zone_four_pink.addEventListener('click', () => {
    card_Filling();
    if (card_color) {
        Zone_four_pink_img.src = './images/Custom_block/Customized_cards/left_sidebar/Frame 5_click.svg';
    } else {
        Zone_four_pink_img.src = './images/Custom_block/Customized_cards/left_sidebar/Frame 5.svg';
    }
});


Zone_four_brown.addEventListener('click', () => {
    card_Filling();
    if (card_color) {
        Zone_four_brown_img.src = './images/Custom_block/Customized_cards/left_sidebar/Frame 6_click.svg';
    } else {
        Zone_four_brown_img.src = './images/Custom_block/Customized_cards/left_sidebar/Frame 6.svg';
    }
});


Zone_four_Green.addEventListener('click', () => {
    card_Filling();
    if (card_color) {
        Zone_four_Green_img.src = './images/Custom_block/Customized_cards/left_sidebar/Frame 7_click.svg';
    } else {
        Zone_four_Green_img.src = './images/Custom_block/Customized_cards/left_sidebar/Frame 7.svg';
    }
});

