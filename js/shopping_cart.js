let product_tips_btn1_div1_btn1 = document.getElementById('product_tips_btn1_div1_btn1');
let product_tips_btn1_div1_btn2 = document.getElementById('product_tips_btn1_div1_btn2');
let product_tips_btn1_div1_p1 = document.getElementById('product_tips_btn1_div1_p1');
let product_tips_btn1_div1_btn3 = document.getElementById('product_tips_btn1_div1_btn3');
let product_tips_btn1_div1_btn4 = document.getElementById('product_tips_btn1_div1_btn4');
let product_tips_btn1_div1_p2 = document.getElementById('product_tips_btn1_div1_p2');




let quantity_add = 0;

if (product_tips_btn1_div1_p1.textContent < 10) {
    product_tips_btn1_div1_btn2.addEventListener('click', () => {
        quantity_add = quantity_add + 1;
        product_tips_btn1_div1_p1.textContent = quantity_add + 1;
    });
    product_tips_btn1_div1_btn1.addEventListener('click', () => {
        quantity_add = quantity_add - 1;
        product_tips_btn1_div1_p1.textContent = product_tips_btn1_div1_p1.textContent - 1;
    });
};


if (product_tips_btn1_div1_p2.textContent < 10) {
    product_tips_btn1_div1_btn4.addEventListener('click', () => {
        quantity_add = quantity_add + 1;
        product_tips_btn1_div1_p2.textContent = quantity_add + 1;
    });
    product_tips_btn1_div1_btn3.addEventListener('click', () => {
        quantity_add = quantity_add - 1;
        product_tips_btn1_div1_p2.textContent = product_tips_btn1_div1_p2.textContent - 1;
    });
};



let product_tips_garbage_can = document.getElementById('product_tips_garbage_can');
let product_tips_garbage_can2 = document.getElementById('product_tips_garbage_can2');

let box1_box1 = document.getElementById('box1_box1');
let box1_box2 = document.getElementById('box1_box2');


product_tips_garbage_can.addEventListener('click', () => {
    box1_box1.style.display = 'none';
});

product_tips_garbage_can2.addEventListener('click', () => {
    box1_box2.style.display = 'none';
});



/* 購物車第二頁 */

let full_list_box_right_order_box_but1=document.getElementById('full_list_box_right_order_box_but1');
let full_list_box_right_order_box_but2=document.getElementById('full_list_box_right_order_box_but2');
let full_list_box_right_order_box_but1_div_p3=document.getElementById('full_list_box_right_order_box_but1_div_p3');

if (full_list_box_right_order_box_but1_div_p3.textContent < 10) {
    full_list_box_right_order_box_but1.addEventListener('click', () => {
        quantity_add = quantity_add + 1;
        full_list_box_right_order_box_but1_div_p3.textContent = quantity_add + 1;
    });
    full_list_box_right_order_box_but2.addEventListener('click', () => {
        quantity_add = quantity_add - 1;
        full_list_box_right_order_box_but1_div_p3.textContent = full_list_box_right_order_box_but1_div_p1.textContent - 1;
    });
};