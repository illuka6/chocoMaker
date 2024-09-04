

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
let flag = true;
milk_chocolate_box.addEventListener('click', function () {
    allImg();
    if (flag) {
        milk_chocolate.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 4-1.svg';
    } else {
        milk_chocolate.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 4.svg';
        console.log(milk_chocolate)
    }
});
/* ↑↑牛奶巧克力選擇區塊↑↑ */


/* ↓↓黑巧克力選擇區塊↓↓ */
// let dark_chocolate_box = document.getElementById('dark_chocolate_box');
dark_chocolate_box.addEventListener('click', function () {
    allImg();
    if (flag) {
        dark_chocolate.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 5-1.svg';
    } else {
        dark_chocolate.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 5.svg';
        console.log(milk_chocolate)
    }
});
/* ↑↑黑巧克力選擇區塊↑↑ */

/* ↓↓白巧克力選擇區塊↓↓ */
// let white_chocolatea_box = document.getElementById('white_chocolatea_box');
white_chocolatea_box.addEventListener('click', function () {
    allImg();
    if (flag) {
        white_chocolatea.src = '../images/Custom_block/small_chocolate/left_sidebar/Frame 6-1.svg';
    } else {
        white_chocolatea.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 6.svg';
        console.log(milk_chocolate)
    }
});
/* ↑↑白巧克力選擇區塊↑↑ */

/* ↓↓草莓巧克力選擇區塊↓↓ */
// let strawberry_chocolate_box = document.getElementById('strawberry_chocolate_box');
strawberry_chocolate_box.addEventListener('click', function () {
    allImg();
    if (flag) {
        strawberry_chocolate.src = '../images/Custom_block/small_chocolate/left_sidebar/Frame 7-1.svg';
    } else {
        strawberry_chocolate.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 7.svg';
        console.log(milk_chocolate)
    }
});
/* ↑↑草莓巧克力選擇區塊↑↑ */



/* ---------------------------------------------------- */
let original_flavor_img = document.getElementById('original_flavor_img');
let nut_img = document.getElementById('nut_img');
let cranberry_img = document.getElementById('cranberry_img');
let tangerine_img = document.getElementById('tangerine_img');
let comprehensive_img = document.getElementById('comprehensive_img');
let berries_img = document.getElementById('berries_img');
let citrus_filling_img = document.getElementById('citrus_filling_img');
let lemon_img = document.getElementById('lemon_img');




let original_flavor_a = document.getElementById('original_flavor_a');
let nut_a = document.getElementById('nut_a');
let cranberry_a = document.getElementById('cranberry_a');
let tangerine_a = document.getElementById('tangerine_a');
let comprehensive_a = document.getElementById('comprehensive_a');
let berries_a = document.getElementById('berries_a');
let citrus_filling_a = document.getElementById('citrus_filling_a');
let lemon_a = document.getElementById('lemon_a');

function Filling_switch() {
    original_flavor_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 8.svg';
    nut_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 9.svg';
    cranberry_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 10.svg';
    tangerine_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 11.svg';
    comprehensive_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 12.svg';
    berries_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 13.svg';
    citrus_filling_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 14.svg';
    lemon_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 15.svg';
};



original_flavor_a.addEventListener('click',()=>{
    Filling_switch();
    if(flag){
        original_flavor_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 8_click.svg';
    } else {
        original_flavor_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 8.svg'
    }
});

nut_a.addEventListener('click',()=>{
    Filling_switch();
    if(flag){
        nut_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 9_click.svg';
    } else {
        nut_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 9.svg'
    }
});

cranberry_a.addEventListener('click',()=>{
    Filling_switch();
    if(flag){
        cranberry_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 10_click.svg';
    } else {
        cranberry_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 10.svg'
    }
});

tangerine_a.addEventListener('click',()=>{
    Filling_switch();
    if(flag){
        tangerine_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 11_click.svg';
    } else {
        tangerine_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 11.svg'
    }
});

comprehensive_a.addEventListener('click',()=>{
    Filling_switch();
    if(flag){
        comprehensive_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 12_click.svg';
    } else {
        comprehensive_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 12.svg'
    }
});

berries_a.addEventListener('click',()=>{
    Filling_switch();
    if(flag){
        berries_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 13_click.svg';
    } else {
        berries_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 13.svg'
    }
});

citrus_filling_a.addEventListener('click',()=>{
    Filling_switch();
    if(flag){
        citrus_filling_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 14_click.svg';
    } else {
        citrus_filling_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 14.svg'
    }
});

lemon_a.addEventListener('click',()=>{
    Filling_switch();
    if(flag){
        lemon_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 15_click.svg';
    } else {
        lemon_img.src = './images/Custom_block/small_chocolate/left_sidebar/Frame 15.svg'
    }
});


let slab_chocolate = localStorage.getItem('slab_chocolate');
if (slab_chocolate) {
  document.getElementById('center_display_second_page_box_slab_img').src = slab_chocolate;
}