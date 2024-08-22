/* 

function toggleDropdown(btnClass, listClass) {

    let btns = document.getElementsByClassName(btnClass);
    let lists = document.getElementsByClassName(listClass);

    for (let i = 0; i < btns.length; i++) {

        btns[i].addEventListener('click', function () {
            
                let list = lists[i];
                // 获取当前的 display 属性
                let currentDisplay = list.style.display;
                if (currentDisplay === 'none' || currentDisplay === '') {
                    list.style.display = 'block'; // 显示下拉菜单
                } else {
                    list.style.display = 'none'; // 隐藏下拉菜单
                }
            }
        )};
} */




function toggleDropdown(btnClass, listClass,vectorClass) {

    let btns = document.getElementsByClassName(btnClass);
    let lists = document.getElementsByClassName(listClass);
    let vec = document.getElementsByClassName(vectorClass);

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
                let vector=vec[i]; 
            
                let list = lists[i];
                // 获取当前的 display 属性

                list.classList.toggle('expanded');
                vector.classList.toggle('expanded_vec');
               /*  let currentDisplay = list.style.display;
                if (currentDisplay === 'none' || currentDisplay === '') {
                    list.style.display = 'block'; // 显示下拉菜单
                } else {
                    list.style.display = 'none'; // 隐藏下拉菜单
                } */
            }
        )};
}

// document.addEventListener('DOMContentLoaded',()=>{
//     const buttons = document.querySelectorAll('.btn');
//     // 当用 forEach 遍历 buttons 时，实际上是在对 NodeList 中的每一个 DOM 元素执行指定的回调函数。
//     // 这个回调函数的参数就是当前处理的 DOM 元素。在这种情况下，我们用 button 作为这个参数的名字
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             // 移除所有按钮的active类
//             buttons.forEach(btn => btn.classList.remove('active'));
//             // 给当前点击的按钮添加active类
//             button.classList.add('active');
//         });
//     });
// })
