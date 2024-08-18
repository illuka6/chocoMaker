let next_pages= document.getElementById("next_pages");




let festivalBtn = document.getElementById('festivalBtn');
let festivalList = document.getElementById('festivalList');

let countslBtn = document.getElementById('countsBtn');
let countsList = document.getElementById('countsList');

let pricelBtn = document.getElementById('priceBtn');
let priceList = document.getElementById('priceList');


function toggleDropdown(btnId, listId) {
    let btn = document.getElementById(btnId);
    let list = document.getElementById(listId);
    btn.addEventListener('click', function() {
        // 获取当前的 display 属性
        let currentDisplay = list.style.display;
        if (currentDisplay === 'none' || currentDisplay === '') {
            list.style.display = 'block'; // 显示下拉菜单
        } else {
            list.style.display = 'none'; // 隐藏下拉菜单
        }
    });

}

// 调用函数处理所有的下拉菜单
toggleDropdown('festivalBtn', 'festivalList');
toggleDropdown('countsBtn', 'countsList');
toggleDropdown('priceBtn', 'priceList');
toggleDropdown('permutationBtn','permutationList')

