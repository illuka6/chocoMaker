let plus1 = document.getElementById('plus1');
let minus1 = document.getElementById('minus1');
let numberWhich1 = document.getElementById('numberWhich1');
let plus2 = document.getElementById('plus2');
let minus2 = document.getElementById('minus2');
let numberWhich2 = document.getElementById('numberWhich2');




let quantity_add1 = 0;

if (numberWhich1.textContent < 10) {
    minus1.addEventListener('click', () => {
        quantity_add1 = quantity_add1 + 1;
        numberWhich1.textContent = quantity_add1 + 1;
    });
    plus1.addEventListener('click', () => {
        quantity_add1 = quantity_add1 - 1;
        numberWhich1.textContent = numberWhich1.textContent - 1;
    });
};

let quantity_add2 = 0;

if (numberWhich2.textContent < 10) {
    minus2.addEventListener('click', () => {
        quantity_add2 = quantity_add2 + 1;
        numberWhich2.textContent = quantity_add2 + 1;
    });
    plus2.addEventListener('click', () => {
        quantity_add2 = quantity_add2 - 1;
        numberWhich2.textContent = numberWhich2.textContent - 1;
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