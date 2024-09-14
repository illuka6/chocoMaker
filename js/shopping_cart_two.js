let plus3 = document.getElementById('plus3');
let minus3 = document.getElementById('minus3');
let numberWhich3 = document.getElementById('numberWhich3');
let plus4 = document.getElementById('plus4');
let minus4 = document.getElementById('minus4');
let numberWhich4 = document.getElementById('numberWhich4');


let quantity_add = 0;


if (numberWhich3.textContent < 10) {
    minus3.addEventListener('click', () => {
        quantity_add = quantity_add + 1;
        numberWhich3.textContent = quantity_add + 1;
    });
    plus3.addEventListener('click', () => {
        quantity_add = quantity_add - 1;
        numberWhich3.textContent = numberWhich3.textContent - 1;
    });
};

let quantity_add_b = 0;


if (numberWhich4.textContent < 10) {
    minus4.addEventListener('click', () => {
        quantity_add_b = quantity_add_b + 1;
        numberWhich4.textContent = quantity_add_b + 1;
    });
    plus4.addEventListener('click', () => {
        quantity_add_b = quantity_add_b - 1;
        numberWhich4.textContent = numberWhich4.textContent - 1;
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