/* 下方功能按鈕切換器 */
let Select_function_img = document.getElementById('Select_function_img');
let menu_below_li_left2_img = document.getElementById('menu_below_li_left2_img');
let menu_below_bug_img = document.getElementById('menu_below_bug_img');
let garbage_can_img = document.getElementById('garbage_can_img');
let menu_below_li_right1_img = document.getElementById('menu_below_li_right1_img');
let menu_below_li_right2_img = document.getElementById('menu_below_li_right2_img');
let menu_below_li_right3_img = document.getElementById('menu_below_li_right3_img');



function Function_button_img() {
    Select_function_img.src = './images/Custom_block/menu_below/Frame1.svg';
    menu_below_li_left2_img.src = './images/Custom_block/menu_below/Frame2.svg';
    menu_below_bug_img.src = './images/Custom_block/menu_below/Frame3.svg';
    garbage_can_img.src = './images/Custom_block/menu_below/Frame4.svg';
    menu_below_li_right1_img.src = './images/Custom_block/menu_below/Frame5.svg';
    menu_below_li_right2_img.src = './images/Custom_block/menu_below/Frame6.svg';
    menu_below_li_right3_img.src = './images/Custom_block/menu_below/Frame7.svg';
};

/* 第一個按鈕 */
let Restore_button = true;
Select_function_img.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        Select_function_img.src = './images/Custom_block/menu_below/Frame1-click.svg';
    } else {
        Select_function_img.src = './images/Custom_block/menu_below/Frame1.svg';
    }
});

menu_below_li_left2_img.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        menu_below_li_left2_img.src = './images/Custom_block/menu_below/Frame2-click.svg';
    } else {
        menu_below_li_left2_img.src = './images/Custom_block/menu_below/Frame2.svg';
    }
});

menu_below_bug.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        menu_below_bug_img.src = './images/Custom_block/menu_below/Frame3-click.svg';
    } else {
        menu_below_bug_img.src = './images/Custom_block/menu_below/Frame3.svg';
    }
});

garbage_can_img.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        garbage_can_img.src = './images/Custom_block/menu_below/Frame4-click.svg';
    } else {
        garbage_can_img.src = './images/Custom_block/menu_below/Frame4.svg';
    }
});

menu_below_li_right1_img.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        menu_below_li_right1_img.src = './images/Custom_block/menu_below/Frame5-click.svg';
    } else {
        menu_below_li_right1_img.src = './images/Custom_block/menu_below/Frame5.svg';
    }
});

menu_below_li_right2_img.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        menu_below_li_right2_img.src = './images/Custom_block/menu_below/Frame6-click.svg';
    } else {
        menu_below_li_right2_img.src = './images/Custom_block/menu_below/Frame6.svg';
    }
});

menu_below_li_right3_img.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        menu_below_li_right3_img.src = './images/Custom_block/menu_below/Frame7-click.svg';
    } else {
        menu_below_li_right3_img.src = './images/Custom_block/menu_below/Frame7.svg';
    }
});



