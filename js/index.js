
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


/* quality */


// 將字串拆分為單個字母並插入 HTML
const textElement = document.getElementById('quality');
const textContent = 'QUALITY';
textElement.innerHTML = textContent.split('').map(char => `<span>${char}</span>`).join('');

// 函數：為每個字母設置動畫延遲
function setAnimationDelays() {
    const spans = document.querySelectorAll('#quality span');
    spans.forEach((span, index) => {
        // 設置每個字母的動畫延遲
        span.style.animationDelay = `${index * .33}s`; // 每個字母延遲 2 秒
    });
}

// 觸發字母翻轉動畫
function triggerAnimation() {
    const spans = document.querySelectorAll('#quality span');
    spans.forEach(span => span.classList.add('flip'));
}

// 設置動畫延遲並觸發動畫
setAnimationDelays();
// 假設你希望動畫在滾動到一定位置時觸發
window.addEventListener('scroll', () => {
    const rect = textElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // 如果文本區域在視窗中，觸發動畫
    if (rect.top < windowHeight * 0.9 && rect.bottom > windowHeight / 2) {
        triggerAnimation();
    }
});


// JQuery Smoove
$('.smoove').smoove({
    offset: '10%'
});

$('.smoove1').smoove({
    offset: '25%'
});
$('.smoove2').smoove({
    offset: '30%'
});
$('.smoove3').smoove({
    offset: '40%'
});

$('.smoovecircle').smoove({
    offset: '70%'
});

const show_gotop_y = 200; // 可以根據需要調整
const gotopBtn = document.getElementById('gotop');
window.addEventListener('scroll',()=>{
    if (window.scrollY >show_gotop_y) {
        gotopBtn.classList.add('show');
    } else {
        gotopBtn.classList.remove('show');
    }
})
gotopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
