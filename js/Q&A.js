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




function toggleDropdown(btnClass, listClass) {

    let btns = document.getElementsByClassName(btnClass);
    let lists = document.getElementsByClassName(listClass);
    // let vector = document.getElementsByClassName(vector);

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            
                let list = lists[i];
                // 获取当前的 display 属性

                list.classList.toggle('expanded');
                
               /*  let currentDisplay = list.style.display;
                if (currentDisplay === 'none' || currentDisplay === '') {
                    list.style.display = 'block'; // 显示下拉菜单
                } else {
                    list.style.display = 'none'; // 隐藏下拉菜单
                } */
            }
        )};

    
}