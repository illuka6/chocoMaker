/* 下方功能按鈕切換器 */
let Select_function_img = document.getElementById('Select_function_img');
let menu_below_li_left2_img = document.getElementById('menu_below_li_left2_img');
let menu_below_bug_img = document.getElementById('menu_below_bug_img');
let garbage_can_img = document.getElementById('garbage_can_img');
let menu_below_li_right1_img = document.getElementById('menu_below_li_right1_img');
let menu_below_li_right2_img = document.getElementById('menu_below_li_right2_img');
let menu_below_li_right3_img = document.getElementById('menu_below_li_right3_img');



function Function_button_img() {
    Select_function_img.src = './images/Custom_block/menu_below/Frame 1.svg';
    menu_below_li_left2_img.src = './images/Custom_block/menu_below/Frame 2.svg';
    menu_below_bug_img.src = './images/Custom_block/menu_below/Frame 3.svg';
    garbage_can_img.src = './images/Custom_block/menu_below/Frame 4.svg';
    menu_below_li_right1_img.src = './images/Custom_block/menu_below/Frame 5.svg';
    menu_below_li_right2_img.src = './images/Custom_block/menu_below/Frame 6.svg';
    menu_below_li_right3_img.src = './images/Custom_block/menu_below/Frame 7.svg';
};

/* 第一個按鈕 */
let Restore_button = true;
Select_function.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        Select_function_img.src = './images/Custom_block/menu_below/Frame 1-click.svg';
    } else {
        Select_function_img.src = './images/Custom_block/menu_below/Frame 1.svg';
    }
});

menu_below_li_left2.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        menu_below_li_left2_img.src = './images/Custom_block/menu_below/Frame 2-click.svg';
    } else {
        menu_below_li_left2_img.src = './images/Custom_block/menu_below/Frame 2.svg';
    }
});

menu_below_li_left1.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        menu_below_bug_img.src = './images/Custom_block/menu_below/Frame 3-click.svg';
    } else {
        menu_below_bug_img.src = './images/Custom_block/menu_below/Frame 3.svg';
    }
});

garbage_can.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        garbage_can_img.src = './images/Custom_block/menu_below/Frame 4-click.svg';
    } else {
        garbage_can_img.src = './images/Custom_block/menu_below/Frame 4.svg';
    }
});

menu_below_li_right1.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        menu_below_li_right1_img.src = './images/Custom_block/menu_below/Frame 5-click.svg';
    } else {
        menu_below_li_right1_img.src = './images/Custom_block/menu_below/Frame 5.svg';
    }
});

menu_below_li_right2.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        menu_below_li_right2_img.src = './images/Custom_block/menu_below/Frame 6-click.svg';
    } else {
        menu_below_li_right2_img.src = './images/Custom_block/menu_below/Frame 6.svg';
    }
});

menu_below_li_right3.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        menu_below_li_right3_img.src = './images/Custom_block/menu_below/Frame 7-click.svg';
    } else {
        menu_below_li_right3_img.src = './images/Custom_block/menu_below/Frame 7.svg';
    }
});



