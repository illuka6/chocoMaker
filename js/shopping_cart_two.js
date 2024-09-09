let full_list_box_right_order_box_but1 = document.getElementById('full_list_box_right_order_box_but1');
let full_list_box_right_order_box_but2 = document.getElementById('full_list_box_right_order_box_but2');
let full_list_box_right_order_box_but1_div_p3 = document.getElementById('full_list_box_right_order_box_but1_div_p3');
let full_list_box_right_order_box_but12 = document.getElementById('full_list_box_right_order_box_but12');
let full_list_box_right_order_box_but13 = document.getElementById('full_list_box_right_order_box_but13');
let full_list_box_right_order_box_butbox_p3 = document.getElementById('full_list_box_right_order_box_butbox_p3');


let quantity_add = 0;


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

let quantity_add_b = 0;


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






let full_list_box_right_box_details2 = document.getElementById('full_list_box_right_box_details2');
let full_list_box_right_box2 = document.getElementById('full_list_box_right_box2');
let full_list_box_right_box3 = document.getElementById('full_list_box_right_box3');
let full_list_box_right_order_box4_img = document.getElementById('full_list_box_right_order_box4_img');
full_list_box_right_box2.addEventListener('click', () => {
    if (full_list_box_right_box3.style.display === 'none') {
        full_list_box_right_box3.style.display = '';
        // full_list_box_right_box_details2.style.marginBottom = '0%';
    } else {
        full_list_box_right_box3.style.display = 'none';
        // full_list_box_right_box_details2.style.marginBottom = '130%';
    }
});

let full_list_box_right_order_box4 = document.getElementById('full_list_box_right_order_box4');
let full_list_box_right_order_box3 = document.getElementById('full_list_box_right_order_box3');
let full_list_box_right_box4 = document.getElementById('full_list_box_right_box4');

full_list_box_right_order_box3.addEventListener('click', () => {
    if (full_list_box_right_box4.style.display === 'none') {
        full_list_box_right_box4.style.display = '';
        full_list_box_right_order_box4.style.marginTop = '40%';
    } else {
        full_list_box_right_box4.style.display = 'none';
        full_list_box_right_order_box4.style.marginTop = '90%';
    }
});



let full_list_box_left_box2_input1 = document.getElementById('full_list_box_left_box2_input1');
let full_list_box_left_box2_input2 = document.getElementById('full_list_box_left_box2_input2');
let full_list_box_left_box2_input3 = document.getElementById('full_list_box_left_box2_input3');
let Data_filling_block = document.getElementById('Data_filling_block');

full_list_box_left_box2_input1.addEventListener('click', () => {
    Data_filling_block.style.display = 'none';

});


full_list_box_left_box2_input3.addEventListener('click', () => {
    Data_filling_block.style.display = 'none';

});


full_list_box_left_box2_input2.addEventListener('click', () => {
    Data_filling_block.style.display = 'block';

});



let full_list_box_right_box3_divbox_p1_box_details = document.getElementById('full_list_box_right_box3_divbox_p1_box_details_');
let full_list_box_right_box3_divbox_p2_box_details = document.getElementById('full_list_box_right_box3_divbox_p2_box_details_');
let full_list_box_right_box3_divbox_p3_box_details = document.getElementById('full_list_box_right_box3_divbox_p3_box_details_');
let full_list_box_right_box3_divbox_p4_box_details = document.getElementById('full_list_box_right_box3_divbox_p4_box_details_');

function Detailed_display() {
    full_list_box_right_box3_divbox_p1_box_details.style.display = 'none';
    full_list_box_right_box3_divbox_p2_box_details.style.display = 'none';
    full_list_box_right_box3_divbox_p3_box_details.style.display = 'none';
    full_list_box_right_box3_divbox_p4_box_details.style.display = 'none';
};

let full_list_box_right_box3_divbox_p1 = document.getElementById('full_list_box_right_box3_divbox_p1');
let full_list_box_right_box3_divbox_p2 = document.getElementById('full_list_box_right_box3_divbox_p2');
let full_list_box_right_box3_divbox_p3 = document.getElementById('full_list_box_right_box3_divbox_p3');
let full_list_box_right_box3_divbox_p4 = document.getElementById('full_list_box_right_box3_divbox_p4');


function box_right_display() {
    full_list_box_right_box3_divbox_p1.style.display = 'flex';
    full_list_box_right_box3_divbox_p2.style.display = 'flex';
    full_list_box_right_box3_divbox_p3.style.display = 'flex';
    full_list_box_right_box3_divbox_p4.style.display = 'flex';
};





full_list_box_right_box3_divbox_p1.addEventListener('click', () => {
    Detailed_display();
    box_right_display();
    full_list_box_right_box3_divbox_p1.style.display = 'none';
    full_list_box_right_box3_divbox_p1_box_details.style.display = 'block';
});

full_list_box_right_box3_divbox_p2.addEventListener('click', () => {
    Detailed_display();
    box_right_display();
    full_list_box_right_box3_divbox_p2.style.display = 'none';
    full_list_box_right_box3_divbox_p2_box_details.style.display = 'block';
});

full_list_box_right_box3_divbox_p3.addEventListener('click', () => {
    Detailed_display();
    box_right_display();
    full_list_box_right_box3_divbox_p3.style.display = 'none';
    full_list_box_right_box3_divbox_p3_box_details.style.display = 'block';
});

full_list_box_right_box3_divbox_p4.addEventListener('click', () => {
    Detailed_display();
    box_right_display();
    full_list_box_right_box3_divbox_p4.style.display = 'none';
    full_list_box_right_box3_divbox_p4_box_details.style.display = 'block';
});