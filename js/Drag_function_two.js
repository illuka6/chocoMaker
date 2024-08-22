/* ↓↓裝飾品區域↓↓ */

/* 在目標區域的div執行放下動作 */
let center_display_second_page_box_div1 = document.getElementById('center_display_second_page_box_div1');
let center_display_second_page_box_div2 = document.getElementById('center_display_second_page_box_div2');
let center_display_second_page_box_div3 = document.getElementById('center_display_second_page_box_div3');



let center_display_second_page_box_allDiv = [
    center_display_second_page_box_div1,
    center_display_second_page_box_div2,
    center_display_second_page_box_div3,
]


/* 拖曳功能區塊 */

/* 拖曳開始 */
// let middle_div1 = document.getElementById("middle_div1");
let select_field3__second_page_img1 = document.getElementById('select_field3__second_page_img1');
let select_field3__second_page_img2 = document.getElementById('select_field3__second_page_img2');
let select_field3__second_page_img3 = document.getElementById('select_field3__second_page_img3');
let select_field3__second_page_img4 = document.getElementById('select_field3__second_page_img4');
let select_field3__second_page_img5 = document.getElementById('select_field3__second_page_img5');
let select_field3__second_page_img6 = document.getElementById('select_field3__second_page_img6');
let select_field3__second_page_img7 = document.getElementById('select_field3__second_page_img7');
let select_field3__second_page_img8 = document.getElementById('select_field3__second_page_img8');
let select_field3__second_page_img9 = document.getElementById('select_field3__second_page_img9');
let select_field3__second_page_img10 = document.getElementById('select_field3__second_page_img10');
let select_field3__second_page_img11 = document.getElementById('select_field3__second_page_img11');
let select_field3__second_page_img12 = document.getElementById('select_field3__second_page_img12');


/* 圖片整合 */
let imgs = [
    select_field3__second_page_img1,
    select_field3__second_page_img2,
    select_field3__second_page_img3,
    select_field3__second_page_img4,
    select_field3__second_page_img5,
    select_field3__second_page_img6,
    select_field3__second_page_img7,
    select_field3__second_page_img8,
    select_field3__second_page_img9,
    select_field3__second_page_img10,
    select_field3__second_page_img11,
    select_field3__second_page_img12,]


for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragstart', (e) => {
        center_display_second_page_box_div1.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        center_display_second_page_box_div2.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        center_display_second_page_box_div3.style.border = '2px dotted rgba(255, 255, 255, 0.1)';
        console.log(imgs[i]);
    }
    )
};




/* 拖曳結束 */
// left_menu4_img1.addEventListener('dragend', () => {
//     left_menu4_img1.style.border = "none";
//     middle_div1.style.border = 'none';
//     middle_div1_box_div1.style.border = 'none';
//     middle_div1_box_div2.style.border = 'none';
//     middle_div1_box_div3.style.border = 'none';
//     middle_div1_box_div4.style.border = 'none';
//     middle_div1_box_div5.style.border = 'none';
//     middle_div1_box_div6.style.border = 'none';
// });

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragend', (e) => {
        center_display_second_page_box_div1.style.border = 'none';
        center_display_second_page_box_div2.style.border = 'none';
        center_display_second_page_box_div3.style.border = 'none';
        console.log(imgs[i])
    }
    )
};



/* 拖曳進去目標時 */

// left_menu4_img1.addEventListener('dragenter', () => {
//     middle_div1.style.border = '2px solid #444';
// });


/* 讓圖片進去目標區域 (暫時完成)  */
// left_menu4_img1.addEventListener('drag', (e) => {
//     e.preventDefault;
//     let img = document.getElementById('left_menu4_img1');
//     img.src = './images/Custom_block/Ellipse 5.svg';
//     middle_div1.appendChild(img);
//     console.log(img);
// });






// left_menu4_img1.addEventListener('mousedown', (e) => {
//     e.preventDefault();
//     // let img = document.getElementById('left_menu4_img1');
//     img.src = './images/Custom_block/Ellipse 5.svg';
//     middle_div1_box_div1.addEventListener('mouseup', (e) => {
//         // if (e.target === middle_div1_box_div1) {
//         middle_div1_box_div1.appendChild(img);
//         middle_div1_box_div1.style.border = '2px solid #999'
//         console.log('有在目標內');
//         // }
//     })
//     // console.log(img);
//     // console.log(middle_div1_box_div1);
// });





// // 拖曳花時
// imgs[i].addEventListener('drag', (e) => {
//     console.log('拖曳中');
//     // e.preventDefault();
//     // let img = document.getElementById('left_menu4_img1');
//     // img.src = './images/Custom_block/Ellipse 5.svg';
//     // console.log(img);
//     // console.log(middle_div1_box_div1);
// });





/*



// 放開花時   (盒子一)
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(imgs[i]);
        if (e.clientX >= center_display_second_page_box1.left && e.clientX <= center_display_second_page_box1.right &&
            e.clientY >= center_display_second_page_box1.top && e.clientY <= center_display_second_page_box1.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            if (center_display_second_page_box_div1.childElementCount < 1) {
                let imgsClone = imgs[i].cloneNode(true);
                center_display_second_page_box_div1.appendChild(imgsClone);
            } else {
                console.log('目標區域已達上限')
            }
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};


// 放開花時   (盒子二)
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(imgs[i]);
        if (e.clientX >= center_display_second_page_box2.left && e.clientX <= center_display_second_page_box2.right &&
            e.clientY >= center_display_second_page_box2.top && e.clientY <= center_display_second_page_box2.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            if (center_display_second_page_box_div2.childElementCount < 1) {
                let imgsClone = imgs[i].cloneNode(true);
                center_display_second_page_box_div2.appendChild(imgsClone);
            } else {
                console.log('目標區域已達上限')
            }
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};


// 放開花時   (盒子三)
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(imgs[i]);
        if (e.clientX >= center_display_second_page_box3.left && e.clientX <= center_display_second_page_box3.right &&
            e.clientY >= center_display_second_page_box3.top && e.clientY <= center_display_second_page_box3.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            if (center_display_second_page_box_div3.childElementCount < 1) {
                let imgsClone = imgs[i].cloneNode(true);
                center_display_second_page_box_div3.appendChild(imgsClone);
            } else {
                console.log('目標區域已達上限')
            }
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};
*/



/* 取得第一個盒子的XY範圍 */
let center_display_second_page_box1 = center_display_second_page_box_div1.getBoundingClientRect();
let xStart = center_display_second_page_box1.left;  // 左邊界的 X 座標
let yStart = center_display_second_page_box1.top;   // 上邊界的 Y 座標
let xEnd = center_display_second_page_box1.right;   // 右邊界的 X 座標
let yEnd = center_display_second_page_box1.bottom;  // 下邊界的 Y 座標
// console.log(xStart);
center_display_second_page_box_div1.addEventListener('click', () => {
    console.log(`X 範圍: ${xStart} 到 ${xEnd}`);
    console.log(`Y 範圍: ${yStart} 到 ${yEnd}`);
});

/* 取得第二個盒子的XY範圍 */
let center_display_second_page_box2 = center_display_second_page_box_div2.getBoundingClientRect();
let xStart2 = center_display_second_page_box2.left;  // 左邊界的 X 座標
let yStart2 = center_display_second_page_box2.top;   // 上邊界的 Y 座標
let xEnd2 = center_display_second_page_box2.right;   // 右邊界的 X 座標
let yEnd2 = center_display_second_page_box2.bottom;  // 下邊界的 Y 座標
/* 取得第三個盒子的XY範圍 */
let center_display_second_page_box3 = center_display_second_page_box_div3.getBoundingClientRect();
let xStart3 = center_display_second_page_box3.left;  // 左邊界的 X 座標
let yStart3 = center_display_second_page_box3.top;   // 上邊界的 Y 座標
let xEnd3 = center_display_second_page_box3.right;   // 右邊界的 X 座標
let yEnd3 = center_display_second_page_box3.bottom;  // 下邊界的 Y 座標


let All_boxes_second_page = [
    center_display_second_page_box1,
    center_display_second_page_box2,
    center_display_second_page_box3
]



// 放開模板時   (盒子整合器)
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(imgs[i]);
        for (let j = 0; j < All_boxes_second_page.length; j++) {
            if ((e.clientX >= All_boxes_second_page[j].left) && (e.clientX <= All_boxes_second_page[j].right) &&
                (e.clientY >= All_boxes_second_page[j].top) && (e.clientY <= All_boxes_second_page[j].bottom)) {
                console.log('在盒子內2');
                console.log('在範圍內2');
                if (center_display_second_page_box_allDiv[j].childElementCount < 2) {
                    let imgsClone = imgs[i].cloneNode(true);
                    center_display_second_page_box_allDiv[j].appendChild(imgsClone);
                    // allBox[j].style.border = '0px solid #999'
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
    });
};





// /* 取得第四個盒子的XY範圍 */
// let middle_box4 = middle_div1_box_div4.getBoundingClientRect();
// let xStart4 = middle_box1.left;  // 左邊界的 X 座標
// let yStart4 = middle_box1.top;   // 上邊界的 Y 座標
// let xEnd4 = middle_box1.right;   // 右邊界的 X 座標
// let yEnd4 = middle_box1.bottom;  // 下邊界的 Y 座標
// /* 取得第五個盒子的XY範圍 */
// let middle_box5 = middle_div1_box_div5.getBoundingClientRect();
// let xStart5 = middle_box1.left;  // 左邊界的 X 座標
// let yStart5 = middle_box1.top;   // 上邊界的 Y 座標
// let xEnd5 = middle_box1.right;   // 右邊界的 X 座標
// let yEnd5 = middle_box1.bottom;  // 下邊界的 Y 座標
// /* 取得第六個盒子的XY範圍 */
// let middle_box6 = middle_div1_box_div6.getBoundingClientRect();
// let xStart6 = middle_box1.left;  // 左邊界的 X 座標
// let yStart6 = middle_box1.top;   // 上邊界的 Y 座標
// let xEnd6 = middle_box1.right;   // 右邊界的 X 座標
// let yEnd6 = middle_box1.bottom;  // 下邊界的 Y 座標
// /* 取得第七個盒子的XY範圍 */
// let middle_box7 = middle_div1_box_div7.getBoundingClientRect();
// let xStart7 = middle_box1.left;  // 左邊界的 X 座標
// let yStart7 = middle_box1.top;   // 上邊界的 Y 座標
// let xEnd7 = middle_box1.right;   // 右邊界的 X 座標
// let yEnd7 = middle_box1.bottom;  // 下邊界的 Y 座標
// /* 取得第八個盒子的XY範圍 */
// let middle_box8 = middle_div1_box_div8.getBoundingClientRect();
// let xStart8 = middle_box1.left;  // 左邊界的 X 座標
// let yStart8 = middle_box1.top;   // 上邊界的 Y 座標
// let xEnd8 = middle_box1.right;   // 右邊界的 X 座標
// let yEnd8 = middle_box1.bottom;  // 下邊界的 Y 座標
// /* 取得第九個盒子的XY範圍 */
// let middle_box9 = middle_div1_box_div9.getBoundingClientRect();
// let xStart9 = middle_box1.left;  // 左邊界的 X 座標
// let yStart9 = middle_box1.top;   // 上邊界的 Y 座標
// let xEnd9 = middle_box1.right;   // 右邊界的 X 座標
// let yEnd9 = middle_box1.bottom;  // 下邊界的 Y 座標
// /* 取得第十個盒子的XY範圍 */
// let middle_box10 = middle_div1_box_div10.getBoundingClientRect();
// let xStart10 = middle_box1.left;  // 左邊界的 X 座標
// let yStart10 = middle_box1.top;   // 上邊界的 Y 座標
// let xEnd10 = middle_box1.right;   // 右邊界的 X 座標
// let yEnd10 = middle_box1.bottom;  // 下邊界的 Y 座標
// /* 取得第十一個盒子的XY範圍 */
// let middle_box11 = middle_div1_box_div11.getBoundingClientRect();
// let xStart11 = middle_box1.left;  // 左邊界的 X 座標
// let yStart11 = middle_box1.top;   // 上邊界的 Y 座標
// let xEnd11 = middle_box1.right;   // 右邊界的 X 座標
// let yEnd11 = middle_box1.bottom;  // 下邊界的 Y 座標
// /* 取得第十二個盒子的XY範圍 */
// let middle_box12 = middle_div1_box_div12.getBoundingClientRect();
// let xStart12 = middle_box1.left;  // 左邊界的 X 座標
// let yStart12 = middle_box1.top;   // 上邊界的 Y 座標
// let xEnd12 = middle_box1.right;   // 右邊界的 X 座標
// let yEnd12 = middle_box1.bottom;  // 下邊界的 Y 座標
// /* 取得第十三個盒子的XY範圍 */
// let middle_box13 = middle_div1_box_div13.getBoundingClientRect();
// let xStart13 = middle_box1.left;  // 左邊界的 X 座標
// let yStart13 = middle_box1.top;   // 上邊界的 Y 座標
// let xEnd13 = middle_box1.right;   // 右邊界的 X 座標
// let yEnd13 = middle_box1.bottom;  // 下邊界的 Y 座標
// /* 取得第十四個盒子的XY範圍 */
// let middle_box14 = middle_div1_box_div14.getBoundingClientRect();
// let xStart14 = middle_box1.left;  // 左邊界的 X 座標
// let yStart14 = middle_box1.top;   // 上邊界的 Y 座標
// let xEnd14 = middle_box1.right;   // 右邊界的 X 座標
// let yEnd14 = middle_box1.bottom;  // 下邊界的 Y 座標
// /* 取得第十五個盒子的XY範圍 */
// let middle_box15 = middle_div1_box_div15.getBoundingClientRect();
// let xStart15 = middle_box1.left;  // 左邊界的 X 座標
// let yStart15 = middle_box1.top;   // 上邊界的 Y 座標
// let xEnd15 = middle_box1.right;   // 右邊界的 X 座標
// let yEnd15 = middle_box1.bottom;  // 下邊界的 Y 座標



// let allBox = [
//     middle_box1,
//     middle_box2,
//     middle_box3,
//     middle_box4,
//     middle_box5,
//     middle_box6,
//     middle_box7,
//     middle_box8,
//     middle_box9,
//     middle_box10,
//     middle_box11,
//     middle_box12,
//     middle_box13,
//     middle_box14,
//     middle_box15]


// // 放開花時   (盒子整合器)
// for (let i = 0; i < ingredients.length; i++) {
//     ingredients[i].addEventListener('dragend', (e) => {
//         console.log('拖曳中');
//         console.log(ingredients[i]);
//         for (let j = 0; j < allBox.length; j++) {
//             if (e.clientX >= allBox[j].left && e.clientX <= allBox[j].right &&
//                 e.clientY >= allBox[j].top && e.clientY <= allBox[j].bottom) {
//                 console.log('在盒子內2');
//                 console.log('在範圍內2');
//                 if (allBox[j].childElementCount < 2) {
//                     let imgsClone = ingredients[i].cloneNode(true);
//                     allBox[j].appendChild(imgsClone);
//                     allBox[j].style.border = '0px solid #999'
//                 } else {
//                     console.log('目標區域已達上限');
//                     console.log(allBox)
//                     console.log(middle_div1_box_allDiv)
//                 }
//             } else {
//                 console.log('不在盒子內2');
//                 console.log('不在範圍內2');
//             }
//         }
//     });
// };

