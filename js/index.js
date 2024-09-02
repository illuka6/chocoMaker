
// 获取所有 .step 元素下的 img 标签
const images = document.querySelectorAll('.cust_item .step img');
const btnDiy = document.querySelector('.btn_diy');

// 为每个 img 元素添加鼠标悬停事件
images.forEach(image => {
    image.addEventListener('mouseenter', () => {
        btnDiy.classList.add('active');
    });
    image.addEventListener('mouseleave', () => {
        btnDiy.classList.remove('active');
    });
});

// JQuery Smoove
$('.smoove').smoove({
    offset:'10%'
});

$('.smoove1').smoove({
    offset:'25%'
});
$('.smoove2').smoove({
    offset:'30%'
});
$('.smoove3').smoove({
    offset:'40%'
});

$('.smoovecircle').smoove({
    offset:'70%'
});