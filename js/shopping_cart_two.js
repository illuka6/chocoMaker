let full_list_box_right_order_box_but1 = document.getElementById('full_list_box_right_order_box_but1');
let full_list_box_right_order_box_but2 = document.getElementById('full_list_box_right_order_box_but2');
let full_list_box_right_order_box_but1_div_p3 = document.getElementById('full_list_box_right_order_box_but1_div_p3');
let full_list_box_right_order_box_but12 = document.getElementById('full_list_box_right_order_box_but12');
let full_list_box_right_order_box_but13 = document.getElementById('full_list_box_right_order_box_but13');
let full_list_box_right_order_box_butbox_p3 = document.getElementById('full_list_box_right_order_box_butbox_p3');


let quantity_add=0; 


if (full_list_box_right_order_box_but1_div_p3.textContent < 10) {
    full_list_box_right_order_box_but2.addEventListener('click', () => {
        quantity_add = quantity_add + 1;
        full_list_box_right_order_box_but1_div_p3.textContent = quantity_add + 1;
    });
    full_list_box_right_order_box_but1.addEventListener('click', () => {
        quantity_add = quantity_add - 1;
        full_list_box_right_order_box_but1_div_p3.textContent = full_list_box_right_order_box_but1_div_p3.textContent - 1;
    });
};

let quantity_add_b=0; 


if (full_list_box_right_order_box_butbox_p3.textContent < 10) {
    full_list_box_right_order_box_but13.addEventListener('click', () => {
        quantity_add_b = quantity_add_b + 1;
        full_list_box_right_order_box_butbox_p3.textContent = quantity_add_b + 1;
    });
    full_list_box_right_order_box_but12.addEventListener('click', () => {
        quantity_add_b = quantity_add_b - 1;
        full_list_box_right_order_box_butbox_p3.textContent = full_list_box_right_order_box_butbox_p3.textContent - 1;
    });
};



/* 行事曆的js */

