/* ↓↓裝飾品區域↓↓ */

/* 在目標區域的div執行放下動作 */
let middle_div1_box_div1 = document.getElementById('middle_div1_box_div1');
let middle_div1_box_div2 = document.getElementById('middle_div1_box_div2');
let middle_div1_box_div3 = document.getElementById('middle_div1_box_div3');
let middle_div1_box_div4 = document.getElementById('middle_div1_box_div4');
let middle_div1_box_div5 = document.getElementById('middle_div1_box_div5');
let middle_div1_box_div6 = document.getElementById('middle_div1_box_div6');
let middle_div1_box_div7 = document.getElementById('middle_div1_box_div7');
let middle_div1_box_div8 = document.getElementById('middle_div1_box_div8');
let middle_div1_box_div9 = document.getElementById('middle_div1_box_div9');
let middle_div1_box_div10 = document.getElementById('middle_div1_box_div10');
let middle_div1_box_div11 = document.getElementById('middle_div1_box_div11');
let middle_div1_box_div12 = document.getElementById('middle_div1_box_div12');
let middle_div1_box_div13 = document.getElementById('middle_div1_box_div13');
let middle_div1_box_div14 = document.getElementById('middle_div1_box_div14');
let middle_div1_box_div15 = document.getElementById('middle_div1_box_div15');


let middle_div1_box_allDiv = [
    middle_div1_box_div1,
    middle_div1_box_div2,
    middle_div1_box_div3,
    middle_div1_box_div4,
    middle_div1_box_div5,
    middle_div1_box_div6,
    middle_div1_box_div7,
    middle_div1_box_div8,
    middle_div1_box_div9,
    middle_div1_box_div10,
    middle_div1_box_div11,
    middle_div1_box_div12,
    middle_div1_box_div13,
    middle_div1_box_div14,
    middle_div1_box_div15,
]



/* 在目標區域的小盒子執行複製顯示動作 */
let middle_small_box1 = document.getElementById('middle_small_box1');
let middle_small_box2 = document.getElementById('middle_small_box2');
let middle_small_box3 = document.getElementById('middle_small_box3');
let middle_small_box4 = document.getElementById('middle_small_box4');
let middle_small_box5 = document.getElementById('middle_small_box5');
let middle_small_box6 = document.getElementById('middle_small_box6');
let middle_small_box7 = document.getElementById('middle_small_box7');
let middle_small_box8 = document.getElementById('middle_small_box8');
let middle_small_box9 = document.getElementById('middle_small_box9');
let middle_small_box10 = document.getElementById('middle_small_box10');
let middle_small_box11 = document.getElementById('middle_small_box11');
let middle_small_box12 = document.getElementById('middle_small_box12');
let middle_small_box13 = document.getElementById('middle_small_box13');
let middle_small_box14 = document.getElementById('middle_small_box14');
let middle_small_box15 = document.getElementById('middle_small_box15');


let middle_small_allDiv = [
    middle_small_box1,
    middle_small_box2,
    middle_small_box3,
    middle_small_box4,
    middle_small_box5,
    middle_small_box6,
    middle_small_box7,
    middle_small_box8,
    middle_small_box9,
    middle_small_box10,
    middle_small_box11,
    middle_small_box12,
    middle_small_box13,
    middle_small_box14,
    middle_small_box15,
]





/* 拖曳功能區塊 */

/* 拖曳開始 */
let middle_div1 = document.getElementById("middle_div1");
let left_menu4_img1 = document.getElementById('left_menu4_img1');
let left_menu4_img2 = document.getElementById('left_menu4_img2');
let left_menu4_img3 = document.getElementById('left_menu4_img3');
let left_menu4_img4 = document.getElementById('left_menu4_img4');
let left_menu4_img5 = document.getElementById('left_menu4_img5');
let left_menu4_img6 = document.getElementById('left_menu4_img6');
let left_menu4_img7 = document.getElementById('left_menu4_img7');
let left_menu4_img8 = document.getElementById('left_menu4_img8');
let left_menu4_img9 = document.getElementById('left_menu4_img9');



/* 圖片整合 */
let imgs = [
    left_menu4_img1,
    left_menu4_img2,
    left_menu4_img3,
    left_menu4_img4,
    left_menu4_img5,
    left_menu4_img6,
    left_menu4_img7,
    left_menu4_img8,
    left_menu4_img9]


for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragstart', (e) => {
        middle_div1_box_div1.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div2.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div3.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div4.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div5.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div6.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div7.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div8.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div9.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div10.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div11.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div12.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div13.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div14.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div15.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
    }
    )
};


for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragend', (e) => {
        middle_div1_box_div1.style.border = 'none';
        middle_div1_box_div2.style.border = 'none';
        middle_div1_box_div3.style.border = 'none';
        middle_div1_box_div4.style.border = 'none';
        middle_div1_box_div5.style.border = 'none';
        middle_div1_box_div6.style.border = 'none';
        middle_div1_box_div7.style.border = 'none';
        middle_div1_box_div8.style.border = 'none';
        middle_div1_box_div9.style.border = 'none';
        middle_div1_box_div10.style.border = 'none';
        middle_div1_box_div11.style.border = 'none';
        middle_div1_box_div12.style.border = 'none';
        middle_div1_box_div13.style.border = 'none';
        middle_div1_box_div14.style.border = 'none';
        middle_div1_box_div15.style.border = 'none';
    }
    );
};

/* 拖曳進去目標時 */


/* ↓↓配料區區塊↓↓ */
let pistachio_img = document.getElementById('pistachio_img');
let almond_img_img = document.getElementById('almond_img_img');
let dried_strawberries_img = document.getElementById('dried_strawberries_img');
let dried_orange_img = document.getElementById('dried_orange_img');
let dried_kiwi_fruit_img = document.getElementById('dried_kiwi_fruit_img');
let dry_petals_img = document.getElementById('dry_petals_img');
let roses_img = document.getElementById('roses_img');
let chrysanthemum_img = document.getElementById('chrysanthemum_img');
let lavender_img = document.getElementById('lavender_img');



/* 圖片整合 */
let ingredients = [
    pistachio_img,
    almond_img_img,
    dried_strawberries_img,
    dried_orange_img,
    dried_kiwi_fruit_img,
    dry_petals_img,
]


for (let i = 0; i < ingredients.length; i++) {
    ingredients[i].addEventListener('drag', (e) => {
        middle_div1_box_div1.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div2.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div3.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div4.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div5.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div6.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div7.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div8.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div9.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div10.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div11.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div12.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div13.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div14.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div15.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
    }
    )
};


for (let i = 0; i < ingredients.length; i++) {
    ingredients[i].addEventListener('dragend', (e) => {
        middle_div1_box_div1.style.border = 'none';
        middle_div1_box_div2.style.border = 'none';
        middle_div1_box_div3.style.border = 'none';
        middle_div1_box_div4.style.border = 'none';
        middle_div1_box_div5.style.border = 'none';
        middle_div1_box_div6.style.border = 'none';
        middle_div1_box_div7.style.border = 'none';
        middle_div1_box_div8.style.border = 'none';
        middle_div1_box_div9.style.border = 'none';
        middle_div1_box_div10.style.border = 'none';
        middle_div1_box_div11.style.border = 'none';
        middle_div1_box_div12.style.border = 'none';
        middle_div1_box_div13.style.border = 'none';
        middle_div1_box_div14.style.border = 'none';
        middle_div1_box_div15.style.border = 'none';
    }
    )
};

/* 滑鼠點擊後切換圖片 */
for (let i = 0; i < ingredients.length; i++) {
    ingredients[i].addEventListener('mouseover', (e) => {
        pistachio_img.src = '../images/Custom_block/left_menu/second_floor/Ellipse 1-1.svg';
        almond_img_img.src = '../images/Custom_block/left_menu/second_floor/Ellipse_2-2.svg';
        dried_strawberries_img.src = '../images/Custom_block/left_menu/second_floor/Ellipse 3-3.svg';
        dried_orange_img.src = '../images/Custom_block/left_menu/second_floor/Ellipse 4-4.svg';
        dried_kiwi_fruit_img.src = '../images/Custom_block/left_menu/second_floor/Ellipse 5-5.svg';
        dry_petals_img.src = '../images/Custom_block/left_menu/second_floor/Ellipse 6-6.svg';
    }
    )
};


for (let i = 0; i < ingredients.length; i++) {
    ingredients[i].addEventListener('mouseout', (e) => {
        pistachio_img.src = '../images/Custom_block/left_menu/second_floor/Ellipse 1.png';
        almond_img_img.src = '../images/Custom_block/left_menu/second_floor/Ellipse 2.png';
        dried_strawberries_img.src = '../images/Custom_block/left_menu/second_floor/Ellipse 3.png';
        dried_orange_img.src = '../images/Custom_block/left_menu/second_floor/Ellipse 4.png';
        dried_kiwi_fruit_img.src = '../images/Custom_block/left_menu/second_floor/Ellipse 5.png';
        dry_petals_img.src = '../images/Custom_block/left_menu/second_floor/Ellipse 6.png';
    }
    )
};


/* ↑↑配料區區塊↑↑ */

middle_div1_box_div1.addEventListener('drop', (e) => {
    console.log('目標區域');
});

/* 監聽滑鼠座標位置 */
window.addEventListener('mousemove', (e) => {
  });

/* 監聽滑鼠座標位置是否在框框內 */

// middle_div1_box_div1.addEventListener('click', (e) => {
//     console.log(e);
//     middle_div1_box_div1.innerHTML = `X:${e.offsetX},Y: ${e.offsetY}`
// });





/* 取得第一個盒子的XY範圍 */
let middle_box1 = middle_div1_box_div1.getBoundingClientRect();
let xStart = middle_box1.left;  // 左邊界的 X 座標
let yStart = middle_box1.top;   // 上邊界的 Y 座標
let xEnd = middle_box1.right;   // 右邊界的 X 座標
let yEnd = middle_box1.bottom;  // 下邊界的 Y 座標
// console.log(xStart);
middle_div1_box_div1.addEventListener('click', (e) => {
    console.log(`X 範圍: ${xStart} 到 ${xEnd}`);
    console.log(`Y 範圍: ${yStart} 到 ${yEnd}`);
});

/* 取得第二個盒子的XY範圍 */
let middle_box2 = middle_div1_box_div2.getBoundingClientRect();
let xStart2 = middle_box2.left;  // 左邊界的 X 座標
let yStart2 = middle_box2.top;   // 上邊界的 Y 座標
let xEnd2 = middle_box2.right;   // 右邊界的 X 座標
let yEnd2 = middle_box2.bottom;  // 下邊界的 Y 座標
/* 取得第三個盒子的XY範圍 */
let middle_box3 = middle_div1_box_div3.getBoundingClientRect();
let xStart3 = middle_box3.left;  // 左邊界的 X 座標
let yStart3 = middle_box3.top;   // 上邊界的 Y 座標
let xEnd3 = middle_box3.right;   // 右邊界的 X 座標
let yEnd3 = middle_box3.bottom;  // 下邊界的 Y 座標
/* 取得第四個盒子的XY範圍 */
let middle_box4 = middle_div1_box_div4.getBoundingClientRect();
let xStart4 = middle_box4.left;  // 左邊界的 X 座標
let yStart4 = middle_box4.top;   // 上邊界的 Y 座標
let xEnd4 = middle_box4.right;   // 右邊界的 X 座標
let yEnd4 = middle_box4.bottom;  // 下邊界的 Y 座標
/* 取得第五個盒子的XY範圍 */
let middle_box5 = middle_div1_box_div5.getBoundingClientRect();
let xStart5 = middle_box5.left;  // 左邊界的 X 座標
let yStart5 = middle_box5.top;   // 上邊界的 Y 座標
let xEnd5 = middle_box5.right;   // 右邊界的 X 座標
let yEnd5 = middle_box5.bottom;  // 下邊界的 Y 座標
/* 取得第六個盒子的XY範圍 */
let middle_box6 = middle_div1_box_div6.getBoundingClientRect();
let xStart6 = middle_box6.left;  // 左邊界的 X 座標
let yStart6 = middle_box6.top;   // 上邊界的 Y 座標
let xEnd6 = middle_box6.right;   // 右邊界的 X 座標
let yEnd6 = middle_box6.bottom;  // 下邊界的 Y 座標
/* 取得第七個盒子的XY範圍 */
let middle_box7 = middle_div1_box_div7.getBoundingClientRect();
let xStart7 = middle_box7.left;  // 左邊界的 X 座標
let yStart7 = middle_box7.top;   // 上邊界的 Y 座標
let xEnd7 = middle_box7.right;   // 右邊界的 X 座標
let yEnd7 = middle_box7.bottom;  // 下邊界的 Y 座標
/* 取得第八個盒子的XY範圍 */
let middle_box8 = middle_div1_box_div8.getBoundingClientRect();
let xStart8 = middle_box8.left;  // 左邊界的 X 座標
let yStart8 = middle_box8.top;   // 上邊界的 Y 座標
let xEnd8 = middle_box8.right;   // 右邊界的 X 座標
let yEnd8 = middle_box8.bottom;  // 下邊界的 Y 座標
/* 取得第九個盒子的XY範圍 */
let middle_box9 = middle_div1_box_div9.getBoundingClientRect();
let xStart9 = middle_box9.left;  // 左邊界的 X 座標
let yStart9 = middle_box9.top;   // 上邊界的 Y 座標
let xEnd9 = middle_box9.right;   // 右邊界的 X 座標
let yEnd9 = middle_box9.bottom;  // 下邊界的 Y 座標
/* 取得第十個盒子的XY範圍 */
let middle_box10 = middle_div1_box_div10.getBoundingClientRect();
let xStart10 = middle_box10.left;  // 左邊界的 X 座標
let yStart10 = middle_box10.top;   // 上邊界的 Y 座標
let xEnd10 = middle_box10.right;   // 右邊界的 X 座標
let yEnd10 = middle_box10.bottom;  // 下邊界的 Y 座標
/* 取得第十一個盒子的XY範圍 */
let middle_box11 = middle_div1_box_div11.getBoundingClientRect();
let xStart11 = middle_box11.left;  // 左邊界的 X 座標
let yStart11 = middle_box11.top;   // 上邊界的 Y 座標
let xEnd11 = middle_box11.right;   // 右邊界的 X 座標
let yEnd11 = middle_box11.bottom;  // 下邊界的 Y 座標
/* 取得第十二個盒子的XY範圍 */
let middle_box12 = middle_div1_box_div12.getBoundingClientRect();
let xStart12 = middle_box12.left;  // 左邊界的 X 座標
let yStart12 = middle_box12.top;   // 上邊界的 Y 座標
let xEnd12 = middle_box12.right;   // 右邊界的 X 座標
let yEnd12 = middle_box12.bottom;  // 下邊界的 Y 座標
/* 取得第十三個盒子的XY範圍 */
let middle_box13 = middle_div1_box_div13.getBoundingClientRect();
let xStart13 = middle_box13.left;  // 左邊界的 X 座標
let yStart13 = middle_box13.top;   // 上邊界的 Y 座標
let xEnd13 = middle_box13.right;   // 右邊界的 X 座標
let yEnd13 = middle_box13.bottom;  // 下邊界的 Y 座標
/* 取得第十四個盒子的XY範圍 */
let middle_box14 = middle_div1_box_div14.getBoundingClientRect();
let xStart14 = middle_box14.left;  // 左邊界的 X 座標
let yStart14 = middle_box14.top;   // 上邊界的 Y 座標
let xEnd14 = middle_box14.right;   // 右邊界的 X 座標
let yEnd14 = middle_box14.bottom;  // 下邊界的 Y 座標
/* 取得第十五個盒子的XY範圍 */
let middle_box15 = middle_div1_box_div15.getBoundingClientRect();
let xStart15 = middle_box15.left;  // 左邊界的 X 座標
let yStart15 = middle_box15.top;   // 上邊界的 Y 座標
let xEnd15 = middle_box15.right;   // 右邊界的 X 座標
let yEnd15 = middle_box15.bottom;  // 下邊界的 Y 座標



let allBox = [
    middle_box1,
    middle_box2,
    middle_box3,
    middle_box4,
    middle_box5,
    middle_box6,
    middle_box7,
    middle_box8,
    middle_box9,
    middle_box10,
    middle_box11,
    middle_box12,
    middle_box13,
    middle_box14,
    middle_box15]



/* 文字模板區塊 */
let left_menu3_div3_div_img1 = document.getElementById('left_menu3_div3_div_img1');
let left_menu3_div3_div_img2 = document.getElementById('left_menu3_div3_div_img2');
let left_menu3_div3_div_img3 = document.getElementById('left_menu3_div3_div_img3');
let left_menu3_div3_div_img4 = document.getElementById('left_menu3_div3_div_img4');
let left_menu3_div3_div_img5 = document.getElementById('left_menu3_div3_div_img5');
let left_menu3_div3_div_img6 = document.getElementById('left_menu3_div3_div_img6');
let left_menu3_div3_div_img7 = document.getElementById('left_menu3_div3_div_img7');
let left_menu3_div3_div_img8 = document.getElementById('left_menu3_div3_div_img8');
let left_menu3_div3_div_img9 = document.getElementById('left_menu3_div3_div_img9');

let left_menu3_div3_allDivImg = [
    left_menu3_div3_div_img1,
    left_menu3_div3_div_img2,
    left_menu3_div3_div_img3,
    left_menu3_div3_div_img4,
    left_menu3_div3_div_img5,
    left_menu3_div3_div_img6,
    left_menu3_div3_div_img7,
    left_menu3_div3_div_img8,
    left_menu3_div3_div_img9,
]



for (let i = 0; i < left_menu3_div3_allDivImg.length; i++) {
    left_menu3_div3_allDivImg[i].addEventListener('drag', (e) => {
        middle_div1_box_div1.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div2.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div3.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div4.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div5.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div6.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div7.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div8.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div9.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div10.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div11.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div12.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div13.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div14.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        middle_div1_box_div15.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
    }
    )
};


for (let i = 0; i < left_menu3_div3_allDivImg.length; i++) {
    left_menu3_div3_allDivImg[i].addEventListener('dragend', (e) => {
        middle_div1_box_div1.style.border = 'none';
        middle_div1_box_div2.style.border = 'none';
        middle_div1_box_div3.style.border = 'none';
        middle_div1_box_div4.style.border = 'none';
        middle_div1_box_div5.style.border = 'none';
        middle_div1_box_div6.style.border = 'none';
        middle_div1_box_div7.style.border = 'none';
        middle_div1_box_div8.style.border = 'none';
        middle_div1_box_div9.style.border = 'none';
        middle_div1_box_div10.style.border = 'none';
        middle_div1_box_div11.style.border = 'none';
        middle_div1_box_div12.style.border = 'none';
        middle_div1_box_div13.style.border = 'none';
        middle_div1_box_div14.style.border = 'none';
        middle_div1_box_div15.style.border = 'none';
    }
    )
};



/* 第一頁客製化拖曳圖片整合器 */


let allBtnevent = [
    left_menu4_img1,
    left_menu4_img2,
    left_menu4_img3,
    left_menu4_img4,
    left_menu4_img5,
    left_menu4_img6,
    left_menu4_img7,
    left_menu4_img8,
    left_menu4_img9,
    pistachio_img,
    almond_img_img,
    dried_strawberries_img,
    dried_orange_img,
    dried_kiwi_fruit_img,
    dry_petals_img,
    left_menu3_div3_div_img1,
    left_menu3_div3_div_img2,
    left_menu3_div3_div_img3,
    left_menu3_div3_div_img4,
    left_menu3_div3_div_img5,
    left_menu3_div3_div_img6,
    left_menu3_div3_div_img7,
    left_menu3_div3_div_img8,
    left_menu3_div3_div_img9,
]


let Select_function = document.getElementById('Select_function');
let menu_below_li_left1 = document.getElementById('menu_below_li_left1');
let menu_below_li_left2 = document.getElementById('menu_below_li_left2')
let menu_below_li_right1 = document.getElementById('menu_below_li_right1');
let garbage_can = document.getElementById('garbage_can');
let menu_below_li_right2 = document.getElementById('menu_below_li_right2');
let menu_below_li_right3 = document.getElementById('menu_below_li_right3');
let middle_box_divbox = document.getElementById('middle_box_divbox');
let angle = 0;//這個是轉角度
let angle2 = 0;//這個是轉角度
let flip = 0;//這個是翻轉
let flip2 = 0;//這個是翻轉
let Lock_picture = null;
let Lock_picture2 = null;
let Delete_parent_box = null;
let Delete_box = null;
let Delete_parent_box2 = null;
let Delete_box2 = null;
// let last1 = '';//裝圖片的盒子
let last_to_do = '';//最後做的事情
// let number = 0;
/* 把拖曳物件輸入到Local storage測試區塊 */
// window.localStorage.setItem('a1','3');
// 放開文字模板時   (盒子整合器)


for (let i = 0; i < allBtnevent.length; i++) {
    allBtnevent[i].addEventListener('dragend', (e) => {
        // console.log('拖曳中');
        // console.log(allBtnevent[i]);
        for (let j = 0; j < allBox.length; j++) {
            if ((e.clientX >= allBox[j].left) && (e.clientX <= allBox[j].right) &&
                (e.clientY >= allBox[j].top) && (e.clientY <= allBox[j].bottom)) {
                console.log('在盒子內2');
                console.log('在範圍內2');
                if (middle_div1_box_allDiv[j].childElementCount < 2) {
                    let imgsClone = allBtnevent[i].cloneNode(true);
                    middle_div1_box_allDiv[j].appendChild(imgsClone);
                    let imgsClone2 = allBtnevent[i].cloneNode(true);
                    middle_small_allDiv[j].appendChild(imgsClone2);
                    imgsClone.addEventListener('dragend', (e) => {
                        for (let k = 0; k < allBox.length; k++) {
                            if ((e.clientX >= allBox[k].left) && (e.clientX <= allBox[k].right) &&
                                (e.clientY >= allBox[k].top) && (e.clientY <= allBox[k].bottom)) {
                                if (middle_div1_box_allDiv[k].childElementCount < 2) {
                                    middle_div1_box_allDiv[k].appendChild(imgsClone);
                                    middle_small_allDiv[k].appendChild(imgsClone2);
                                    console.log('1545343')
                                }
                            } else {
                                console.log('xxxxx')
                            }
                        }
                    });
                    if (imgsClone.addEventListener('click', () => {
                        Lock_picture = imgsClone;
                        Lock_picture2 = imgsClone2;
                        Lock_picture.style.border = "2px solid #444"
                        Lock_picture2.style.border = "2px solid #444"
                        console.log(Lock_picture);
                        // last_to_do = 'Rotate_Image';
                    }));
                    if (Select_function.addEventListener('click', () => {
                        Lock_picture = imgsClone;
                        Lock_picture2 = imgsClone2;
                        Lock_picture.style.border = "0px solid #444"
                        Lock_picture2.style.border = "0px solid #444"
                        console.log("xxx");
                    }));
                    if (menu_below_li_left2.addEventListener('click', () => {
                        if (Lock_picture) {
                            Lock_picture.style.width = '30px';
                            Lock_picture.style.height = '30px';
                            console.log('你按了縮放');
                            last_to_do = '1';
                        }
                        if (Lock_picture2) {
                            Lock_picture2.style.width = '15px';
                            Lock_picture2.style.height = '15px';
                            console.log('有成功嗎?');
                        }
                    }));
                    if (menu_below_li_left1.addEventListener('click', () => {
                        if (Lock_picture) {
                            angle = angle + 45;
                            Lock_picture.style.transform = `rotate(${angle}deg)`;
                            console.log(angle);
                            console.log('你按了旋轉');
                            last_to_do = '2';
                        }
                        if (Lock_picture2) {
                            angle2 = angle2 + 45;
                            Lock_picture2.style.transform = `rotate(${angle2}deg)`;
                            console.log(angle2);
                            console.log('你按了旋轉');
                        }
                    }));
                    if (menu_below_li_right1.addEventListener('click', () => {
                        if (Lock_picture) {
                            flip = flip + 180;
                            Lock_picture.style.transform = `rotate(${flip}deg)`;
                            console.log('你按了翻轉');
                            last_to_do = '3';
                        }
                        if (Lock_picture2) {
                            flip2 = flip2 + 180;
                            Lock_picture2.style.transform = `rotate(${flip2}deg)`;
                            console.log('你按了翻轉');
                        }
                    }));
                    if (garbage_can.addEventListener('click', () => {
                        if (Lock_picture) {
                            Delete_box = Lock_picture;
                            Delete_parent_box = Lock_picture.parentNode;
                            Lock_picture.remove();
                            console.log('你按了刪除');
                                                    }
                        if (Lock_picture2) {
                            Delete_box2 = Lock_picture2;
                            Delete_parent_box2 = Lock_picture2.parentNode;
                            Lock_picture2.remove();
                            console.log('你按了刪除');
                        }
                    }));
                                      if (menu_below_li_right3.addEventListener('click', () => {
                        console.log('0000');
                        location.reload();
                    }));
                    if (menu_below_li_right2.addEventListener('click', (e) => {
                        console.log('有成功嗎?');
                        console.log(last_to_do);
                        if (last_to_do === '1') {
                            Lock_picture.style.width = '60px';
                            Lock_picture.style.height = '60px';
                            Lock_picture2.style.width = '30px';
                            Lock_picture2.style.height = '30px';
                        };
                        if (last_to_do === '2') {
                            angle = angle - 45;
                            Lock_picture.style.transform = `rotate(${angle}deg)`;
                            angle2 = angle2 - 45;
                            Lock_picture2.style.transform = `rotate(${angle2}deg)`;
                        };
                        if (last_to_do === '3') {
                            flip = flip - 180;
                            Lock_picture.style.transform = `rotate(${flip}deg)`;
                            flip2 = flip2 - 180;
                            Lock_picture2.style.transform = `rotate(${flip2}deg)`;
                        };
                                        }));
                } else {
                    console.log('目標區域已達上限');
                    console.log(allBox)
                    console.log(middle_div1_box_allDiv)
                }
            } else {
                console.log('不在盒子內2');
                console.log('不在範圍內2');
            }
        }
    }
    );

};



menu_below_li_right3.addEventListener('click', () => {
    location.reload();
});



let Close_prompt = document.getElementsByClassName('Close_prompt');
let Operation_tips = document.getElementById('Operation_tips');

for (let i = 0; i < Close_prompt.length; i++) {
    Close_prompt[i].addEventListener('click', () => {
        Operation_tips.style.display = 'none';
    });
}


let Operation_tips_box1_first_row3_img2 = document.getElementById('Operation_tips_box1_first_row3_img2');
let Operation_tips_box1_div = document.getElementById('Operation_tips_box1_div');

let Operation_tips_box2_first_row3_img3 = document.getElementById('Operation_tips_box2_first_row3_img3');
let Operation_tips_box1_first_row3_img2_1 = document.getElementById('Operation_tips_box1_first_row3_img2_1');
let Operation_tips_box2_div = document.getElementById('Operation_tips_box2_div');

let Operation_tips_box3_first_row3_img3 = document.getElementById('Operation_tips_box3_first_row3_img3');
let Operation_tips_box3_first_row3_img2_1 = document.getElementById('Operation_tips_box3_first_row3_img2_1');
let Operation_tips_box3_div = document.getElementById('Operation_tips_box3_div');

let Operation_tips_box4_first_row3_img3 = document.getElementById('Operation_tips_box4_first_row3_img3');
let Operation_tips_box4_first_row3_img2_1 = document.getElementById('Operation_tips_box4_first_row3_img2_1');
let Operation_tips_box4_div = document.getElementById('Operation_tips_box4_div');

let Operation_tips_box1_first_row3_img3_1 = document.getElementById('Operation_tips_box1_first_row3_img3_1');
let Operation_tips_box5_div = document.getElementById('Operation_tips_box5_div');

Operation_tips_box1_first_row3_img2.addEventListener('click', () => {
    Operation_tips_box1_div.style.display = 'none';
    Operation_tips_box2_div.style.display = 'block';
});

Operation_tips_box2_first_row3_img3.addEventListener('click', () => {
    Operation_tips_box1_div.style.display = 'block';
    Operation_tips_box2_div.style.display = 'none';
});

Operation_tips_box1_first_row3_img2_1.addEventListener('click', () => {
    Operation_tips_box2_div.style.display = 'none';
    Operation_tips_box3_div.style.display = 'block';
});

Operation_tips_box3_first_row3_img3.addEventListener('click', () => {
    Operation_tips_box2_div.style.display = 'block';
    Operation_tips_box3_div.style.display = 'none';
});

Operation_tips_box3_first_row3_img2_1.addEventListener('click', () => {
    Operation_tips_box3_div.style.display = 'none';
    Operation_tips_box4_div.style.display = 'block';
});

Operation_tips_box4_first_row3_img3.addEventListener('click', () => {
    Operation_tips_box3_div.style.display = 'block';
    Operation_tips_box4_div.style.display = 'none';
});

Operation_tips_box4_first_row3_img2_1.addEventListener('click', () => {
    Operation_tips_box4_div.style.display = 'none';
    Operation_tips_box5_div.style.display = 'block';
});

Operation_tips_box1_first_row3_img3_1.addEventListener('click', () => {
    Operation_tips_box4_div.style.display = 'block';
    Operation_tips_box5_div.style.display = 'none';
});


