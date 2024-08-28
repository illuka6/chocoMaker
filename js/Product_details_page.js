let product_details_page_tab_div1_produc_minus_sign_reduce = document.getElementById('product_details_page_tab_div1_produc_minus_sign_reduce');
let product_details_page_tab_div1_produc_minus_sign_add = document.getElementById('product_details_page_tab_div1_produc_minus_sign_add');
let product_details_page_tab_div1_produc_minus_sign_p = document.getElementById('product_details_page_tab_div1_produc_minus_sign_p');

let quantity_add = 0;

if (product_details_page_tab_div1_produc_minus_sign_p.textContent < 10) {
    product_details_page_tab_div1_produc_minus_sign_add.addEventListener('click', () => {
        quantity_add = quantity_add + 1;
        product_details_page_tab_div1_produc_minus_sign_p.textContent = quantity_add + 1;
    });
    product_details_page_tab_div1_produc_minus_sign_reduce.addEventListener('click', () => {
        quantity_add=quantity_add-1;
        product_details_page_tab_div1_produc_minus_sign_p.textContent = product_details_page_tab_div1_produc_minus_sign_p.textContent - 1;
    });
};
