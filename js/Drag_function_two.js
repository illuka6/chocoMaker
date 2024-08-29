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

/* 在目標區域的小盒子執行複製顯示動作 */
let second_page_smallbox_div1 = document.getElementById('second_page_smallbox_div1');
let second_page_smallbox_div2 = document.getElementById('second_page_smallbox_div2');
let second_page_smallbox_div3 = document.getElementById('second_page_smallbox_div3');



let second_page_smallbox = [
    second_page_smallbox_div1,
    second_page_smallbox_div2,
    second_page_smallbox_div3,
]

function smallbox_allDiv() {
    center_display_second_page_box_div1.style.border = '0px solid #777'
    center_display_second_page_box_div2.style.border = '0px solid #777'
    center_display_second_page_box_div3.style.border = '0px solid #777'
};
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

/* 刪除區塊的XY範圍 */
let garbage_can_img = document.getElementById('garbage_can_img');
let garbage_can_imga = garbage_can_img.getBoundingClientRect();
let xgarbage_can_img = garbage_can_imga.left;  // 左邊界的 X 座標
let ygarbage_can_img = garbage_can_imga.top;   // 上邊界的 Y 座標
let x_garbage_can_img_End3 = garbage_can_imga.right;   // 右邊界的 X 座標
let y_garbage_can_img_End3 = garbage_can_imga.bottom;  // 下邊界的 Y 座標

let All_boxes_second_page = [
    center_display_second_page_box1,
    center_display_second_page_box2,
    center_display_second_page_box3
];



let angle = 0;//這個是轉角度
let angle2 = 0;//這個是轉角度
let flip = 0;//這個是翻轉
let flip2 = 0;//這個是翻轉
let Lock_picture = null;
let Lock_picture2 = null;
let smalllchocolate_ast_to_do = '';//最後做的事情
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
                if (center_display_second_page_box_allDiv[j].childElementCount < 1) {
                    let imgsClone = imgs[i].cloneNode(true);
                    center_display_second_page_box_allDiv[j].appendChild(imgsClone);
                    let imgsClone2 = imgs[i].cloneNode(true);
                    second_page_smallbox[j].appendChild(imgsClone2);
                    for (let k = 0; k < All_boxes_second_page.length; k++) {
                        imgsClone.addEventListener('dragend', (e) => {
                            if ((e.clientX >= All_boxes_second_page[k].left) && (e.clientX <= All_boxes_second_page[k].right) &&
                                (e.clientY >= All_boxes_second_page[k].top) && (e.clientY <= All_boxes_second_page[k].bottom)) {
                                center_display_second_page_box_allDiv[k].appendChild(imgsClone);
                                console.log('66545')
                            } else {
                                console.log('XXXX')
                            }
                        })
                    };
                    if (imgsClone.addEventListener('click', () => {
                        Lock_picture = imgsClone;
                        Lock_picture2 = imgsClone2;
                        Lock_picture.style.border = "2px solid #444"
                        Lock_picture2.style.border = "2px solid #444"
                        console.log(Lock_picture);
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
                            Lock_picture.style.width = '80px';
                            Lock_picture.style.height = '80px';
                            console.log('你按了縮放');
                            smalllchocolate_ast_to_do = '1';
                        }
                        if (Lock_picture2) {
                            Lock_picture2.style.width = '20px';
                            Lock_picture2.style.height = '20px';
                        }
                    }));
                    if (menu_below_li_left1.addEventListener('click', () => {
                        if (Lock_picture) {
                            Lock_picture = imgsClone;
                            angle = angle + 45;
                            Lock_picture.style.transform = `rotate(${angle}deg)`;
                            console.log(angle);
                            console.log('你按了旋轉');
                            smalllchocolate_ast_to_do = '2';
                        }
                        if (Lock_picture2) {
                            Lock_picture2 = imgsClone2;
                            angle2 = angle2 + 45;
                            Lock_picture2.style.transform = `rotate(${angle2}deg)`;
                        }
                    }));
                    if (menu_below_li_right1.addEventListener('click', () => {
                        if (Lock_picture) {
                            flip = flip + 180;
                            Lock_picture.style.transform = `rotate(${flip}deg)`;
                            console.log('你按了翻轉');
                            smalllchocolate_ast_to_do = '3';
                        }
                        if (Lock_picture2) {
                            flip2 = flip2 + 180;
                            Lock_picture2.style.transform = `rotate(${flip2}deg)`;
                        }
                    }));
                    if (garbage_can.addEventListener('click', () => {
                        if (Lock_picture) {
                            Lock_picture.remove();
                            console.log('你按了刪除');
                        }
                        if (Lock_picture2) {
                            Lock_picture2.remove();
                        }
                    }));
                    imgsClone.addEventListener('dragend', () => {
                        console.log('嘗試成功嗎?')
                        imgsClone.remove();
                        imgsClone2.remove();
                    });
                    if (menu_below_li_right3.addEventListener('click', () => {
                        console.log('0000');
                        location.reload();
                    }));
                    if (menu_below_li_right2.addEventListener('click', (e) => {
                        console.log('有成功嗎?');
                        console.log(smalllchocolate_ast_to_do);
                        if (smalllchocolate_ast_to_do === '1') {
                            Lock_picture.style.width = '120px';
                            Lock_picture.style.height = '120px';
                            Lock_picture2.style.width = '40px';
                            Lock_picture2.style.height = '40px';
                        };
                        if (menu_below_li_right2.addEventListener('click', (e) => {
                            if (smalllchocolate_ast_to_do === '2') {
                                angle = angle - 45;
                                Lock_picture.style.transform = `rotate(${angle}deg)`;
                                angle2 = angle2 - 45;
                                Lock_picture2.style.transform = `rotate(${angle2}deg)`;
                            };
                        }
                        ));
                        if (smalllchocolate_ast_to_do === '3') {
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
    });
};


let Basic_small_chocolate1 = document.getElementById('Basic_small_chocolate1');
let Basic_small_chocolate2 = document.getElementById('Basic_small_chocolate2');
let Basic_small_chocolate3 = document.getElementById('Basic_small_chocolate3');

let Basic_chocolate = [
    Basic_small_chocolate1,
    Basic_small_chocolate2,
    Basic_small_chocolate3]

let Basic_small_chocolate4 = document.getElementById('Basic_small_chocolate4');
let Basic_small_chocolate5 = document.getElementById('Basic_small_chocolate5');
let Basic_small_chocolate6 = document.getElementById('Basic_small_chocolate6');

let Basic_chocolate2 = [
    Basic_small_chocolate4,
    Basic_small_chocolate5,
    Basic_small_chocolate6]

// let second_page_box1 = document.getElementById('center_display_second_page_box1');
// let second_page_box2 = document.getElementById('Basic_small_chocolate2');
// let second_page_box3 = document.getElementById('Basic_small_chocolate3');

// let Basic_chocolate = [
//     Basic_small_chocolate1,
//     Basic_small_chocolate2,
//     Basic_small_chocolate3]



for (let i = 0; i < center_display_second_page_box_allDiv.length; i++) {
    if (center_display_second_page_box_allDiv[i].addEventListener('click', () => {
        smallbox_allDiv();
        let small_chocolate_base = center_display_second_page_box_allDiv[i];
        center_display_second_page_box_allDiv[i].style.border = '2px solid #444';
        if (garbage_can.addEventListener('click', () => {
            Basic_chocolate[i].remove();
            // second_page_smallbox[i].remove();
            Basic_chocolate2[i].remove();
            smallbox_allDiv();
        }));
        if (menu_below_li_left2.addEventListener('click', () => {
            if (Basic_chocolate) {
                Basic_chocolate[i].style.width = '80px';
                Basic_chocolate[i].style.height = '80px';
            }
            if (Basic_chocolate2) {
                Basic_chocolate2[i].style.width = '20px';
                Basic_chocolate2[i].style.height = '20px';
            }
        }));
        if (menu_below_li_left1.addEventListener('click', () => {
            if (Basic_chocolate) {
                // Basic_chocolate = imgsClone2;
                angle = angle + 45;
                Basic_chocolate[i].style.transform = `rotate(${angle}deg)`;
                console.log(angle);
                console.log('你按了旋轉');
            }
            if (Lock_picture2) {
                // Basic_chocolate2 = imgsClone2;
                angle2 = angle2 + 45;
                Basic_chocolate2[i].style.transform = `rotate(${angle2}deg)`;
            }
        }));
        if (menu_below_li_right1.addEventListener('click', () => {
            if (Basic_chocolate[i]) {
                flip = flip + 180;
                Basic_chocolate[i].style.transform = `rotate(${flip}deg)`;
                console.log('你按了翻轉');
                smalllchocolate_ast_to_do = '3';
            }
            if (Basic_chocolate2[i]) {
                flip2 = flip2 + 180;
                Basic_chocolate2[i].style.transform = `rotate(${flip2}deg)`;
            }
        }));
    }));
};


Basic_small_chocolate1.addEventListener('dragend', () => {
    Basic_small_chocolate1.remove();
    Basic_small_chocolate4.remove();
});

Basic_small_chocolate2.addEventListener('dragend', () => {
    Basic_small_chocolate2.remove();
    Basic_small_chocolate5.remove();
});

Basic_small_chocolate3.addEventListener('dragend', () => {
    Basic_small_chocolate3.remove();
    Basic_small_chocolate6.remove();
});





menu_below_li_right3.addEventListener('click', () => {
    location.reload();
    console.log('6554')
});


// menu_below_li_right3.addEventListener('click', () => {
//     Basic_small_chocolate1.remove();
//     Basic_small_chocolate2.remove();
//     Basic_small_chocolate3.remove();
// });

// for (let i = 0; i < imgs.length; i++) {
//     imgs[i].addEventListener('dragend', (e) => {
//         console.log('拖曳中');
//         console.log(imgs[i]);
//         for (let j = 0; j < All_boxes_second_page.length; j++) {
//             if ((e.clientX >= All_boxes_second_page[j].left) && (e.clientX <= All_boxes_second_page[j].right) &&
//                 (e.clientY >= All_boxes_second_page[j].top) && (e.clientY <= All_boxes_second_page[j].bottom)) {
//                 console.log('在盒子內2');
//                 console.log('在範圍內2');
//                 if (center_display_second_page_box_allDiv[j].childElementCount < 2) {
//                     let imgsClone = allBtnevent[i].cloneNode(true);
//                     center_display_second_page_box_allDiv[j].appendChild(imgsClone);
//                     // number = number + 1;
//                     // let key = 'a' + number;
//                     // window.localStorage.setItem(key, middle_div1_box_allDiv[j]);
//                     // allBox[j].style.border = '0px solid #999'
//                     if (imgsClone.addEventListener('click', () => {
//                         Lock_picture = imgsClone;
//                         Lock_picture.style.border = "2px solid #444"
//                         console.log(Lock_picture);
//                     }));
//                     if (Select_function.addEventListener('click', () => {
//                         Lock_picture = imgsClone;
//                         Lock_picture.style.border = "0px solid #444"
//                         console.log("xxx");
//                     }));
//                     if (menu_below_li_left2.addEventListener('click', () => {
//                         if (Lock_picture) {
//                             Lock_picture.style.width = '30px';
//                             Lock_picture.style.height = '30px';
//                             console.log('你按了縮放');
//                         }
//                     }));
//                     if (menu_below_li_left1.addEventListener('click', () => {
//                         if (Lock_picture) {
//                             angle = angle + 45;
//                             Lock_picture.style.transform = `rotate(${angle}deg)`;
//                             console.log(angle);
//                             console.log('你按了旋轉');
//                         }
//                     }));
//                     if (menu_below_li_right1.addEventListener('click', () => {
//                         if (Lock_picture) {
//                             flip = flip + 180;
//                             Lock_picture.style.transform = `rotate(${flip}deg)`;
//                             console.log('你按了翻轉');
//                         }
//                     }));
//                     if (garbage_can.addEventListener('click', () => {
//                         if (Lock_picture) {
//                             Lock_picture.remove();
//                             console.log('你按了刪除');
//                         }
//                     })); /* console.log(key); */
//                     if (menu_below_li_right1.addEventListener('click', () => {
//                         if (Lock_picture) {
//                             flip = flip + 180;
//                             Lock_picture.style.transform = `rotate(${flip}deg)`;
//                             console.log('你按了翻轉');
//                         }
//                     }));
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



// let all_Divbox = window.localStorage.getItem('middle_div1_box_allDiv');
// let all_Divbox_Reorganize = JSON.parse(all_Divbox);
// console.log(all_Divbox_Reorganize);


/* 下方功能按鈕切換器 */
let Select_function_img = document.getElementById('Select_function_img');
let menu_below_li_left2_img = document.getElementById('menu_below_li_left2_img');
let menu_below_bug_img = document.getElementById('menu_below_bug_img');
// let garbage_can_img = document.getElementById('garbage_can_img');
let menu_below_li_right1_img = document.getElementById('menu_below_li_right1_img');
let menu_below_li_right2_img = document.getElementById('menu_below_li_right2_img');
let menu_below_li_right3_img = document.getElementById('menu_below_li_right3_img');



function Function_button_img() {
    Select_function_img.src = './images/Custom_block/menu_below/Frame 1.svg';
    menu_below_li_left2_img.src = './images/Custom_block/menu_below/Frame 2.svg';
    menu_below_bug_img.src = './images/Custom_block/menu_below/Frame 3.svg';
    garbage_can_img.src = './images/Custom_block/menu_below/Frame 4.svg';
    menu_below_li_right1_img.src = './images/Custom_block/menu_below/Frame 5.svg';
    menu_below_li_right2_img.src = './images/Custom_block/menu_below/Frame 6.svg';
    menu_below_li_right3_img.src = './images/Custom_block/menu_below/Frame 7.svg';
};

/* 第一個按鈕 */
let Restore_button = true;
Select_function_img.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        Select_function_img.src = './images/Custom_block/menu_below/Frame 1-click.svg';
    } else {
        Select_function_img.src = './images/Custom_block/menu_below/Frame 1.svg';
    }
});

menu_below_li_left2_img.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        menu_below_li_left2_img.src = './images/Custom_block/menu_below/Frame 2-click.svg';
    } else {
        menu_below_li_left2_img.src = './images/Custom_block/menu_below/Frame 2.svg';
    }
});

menu_below_bug.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        menu_below_bug_img.src = './images/Custom_block/menu_below/Frame 3-click.svg';
    } else {
        menu_below_bug_img.src = './images/Custom_block/menu_below/Frame 3.svg';
    }
});

garbage_can_img.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        garbage_can_img.src = './images/Custom_block/menu_below/Frame 4-click.svg';
    } else {
        garbage_can_img.src = './images/Custom_block/menu_below/Frame 4.svg';
    }
});

menu_below_li_right1_img.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        menu_below_li_right1_img.src = './images/Custom_block/menu_below/Frame 5-click.svg';
    } else {
        menu_below_li_right1_img.src = './images/Custom_block/menu_below/Frame 5.svg';
    }
});

menu_below_li_right2_img.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        menu_below_li_right2_img.src = './images/Custom_block/menu_below/Frame 6-click.svg';
    } else {
        menu_below_li_right2_img.src = './images/Custom_block/menu_below/Frame 6.svg';
    }
});

menu_below_li_right3_img.addEventListener('click', () => {
    Function_button_img();
    if (Restore_button) {
        menu_below_li_right3_img.src = './images/Custom_block/menu_below/Frame 7-click.svg';
    } else {
        menu_below_li_right3_img.src = './images/Custom_block/menu_below/Frame 7.svg';
    }
});



