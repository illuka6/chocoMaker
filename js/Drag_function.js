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


/* 拖曳功能區塊 */

/* 拖曳開始 */
let middle_div1 = document.getElementById("middle_div1");
// let left_menu4_img1 = document.getElementById('left_menu4_img1');
// function dragBox() {
let left_menu4_img1 = document.getElementById('left_menu4_img1');
let left_menu4_img2 = document.getElementById('left_menu4_img2');
let left_menu4_img3 = document.getElementById('left_menu4_img3');
let left_menu4_img4 = document.getElementById('left_menu4_img4');
let left_menu4_img5 = document.getElementById('left_menu4_img5');
let left_menu4_img6 = document.getElementById('left_menu4_img6');
let left_menu4_img7 = document.getElementById('left_menu4_img7');
let left_menu4_img8 = document.getElementById('left_menu4_img8');
let left_menu4_img9 = document.getElementById('left_menu4_img9');
// }


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


// if (e.clientX >= imgs.left && e.clientX <= imgs.right &&
//     e.clientY >= imgs.top && e.clientY <= imgs.bottom) {
//     console.log('在盒子內1');
//     console.log('在範圍內1');
//     let img = document.getElementById('left_menu4_img1');
//     img.src = './images/Custom_block/Ellipse 5.svg';
//     middle_div1_box_div1.appendChild(img);
//     middle_div1_box_div1.style.border = '0px solid #999'
// } else {
//     console.log('不在盒子內1');
//     console.log('不在範圍內1');
// }
//     });
// }

// left_menu4_img1.addEventListener('drag  start', () => {
//     left_menu4_img1.style.border = '2px solid #444';
// });

/* 拖曳開始(進階用法) */
// left_menu4_img1.addEventListener('drag', () => {
//     left_menu4_img1.style.border = '0px solid #444';
//     middle_div1.style.border = '0px solid #444';
//     middle_div1_box_div1.style.border = '2px solid red';
//     middle_div1_box_div2.style.border = '2px solid red';
//     middle_div1_box_div3.style.border = '2px solid red';
//     middle_div1_box_div4.style.border = '2px solid red';
//     middle_div1_box_div5.style.border = '2px solid red';
//     middle_div1_box_div6.style.border = '2px solid red';
// });

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragstart', (e) => {
        middle_div1_box_div1.style.border = '2px dotted rgba(255, 255, 255, 0.5)';
        middle_div1_box_div2.style.border = '2px dotted rgba(255, 255, 255, 0.5)';
        middle_div1_box_div3.style.border = '2px dotted rgba(255, 255, 255, 0.5)';
        middle_div1_box_div4.style.border = '2px dotted rgba(255, 255, 255, 0.5)';
        middle_div1_box_div5.style.border = '2px dotted rgba(255, 255, 255, 0.5)';
        middle_div1_box_div6.style.border = '2px dotted rgba(255, 255, 255, 0.5)';
        middle_div1_box_div7.style.border = '2px dotted rgba(255, 255, 255, 0.5)';
        middle_div1_box_div8.style.border = '2px dotted rgba(255, 255, 255, 0.5)';
        middle_div1_box_div9.style.border = '2px dotted rgba(255, 255, 255, 0.5)';
        middle_div1_box_div10.style.border = '2px dotted rgba(255, 255, 255, 0.5)';
        middle_div1_box_div11.style.border = '2px dotted rgba(255, 255, 255, 0.5)';
        middle_div1_box_div12.style.border = '2px dotted rgba(255, 255, 255, 0.5)';
        middle_div1_box_div13.style.border = '2px dotted rgba(255, 255, 255, 0.5)';
        middle_div1_box_div14.style.border = '2px dotted rgba(255, 255, 255, 0.5)';
        middle_div1_box_div15.style.border = '2px dotted rgba(255, 255, 255, 0.5)';
        // imgs[i].style.border='2px solid #444';
        // imgs[i].style.backgroundColor = '#444';
        // imgs[i].style.borderRadius = '12px    ';

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
        // imgs[i].style.backgroundColor = 'none';
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

// 拖曳花時
left_menu4_img1.addEventListener('drag', (e) => {
    console.log('拖曳中');
    // e.preventDefault();
    // let img = document.getElementById('left_menu4_img1');
    // img.src = './images/Custom_block/Ellipse 5.svg';
    // console.log(img);
    // console.log(middle_div1_box_div1);
});



// 放開花時   (盒子一)
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(imgs[i]);
        if (e.clientX >= middle_box1.left && e.clientX <= middle_box1.right &&
            e.clientY >= middle_box1.top && e.clientY <= middle_box1.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = imgs[i].cloneNode(true);
            // imgsClone.style.position = 'absolute';
            // imgsClone.style.zIndex = i + 1;

            middle_div1_box_div1.appendChild(imgsClone);
            middle_div1_box_div1.style.border = '0px solid #999'
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
        if (e.clientX >= middle_box2.left && e.clientX <= middle_box2.right &&
            e.clientY >= middle_box2.top && e.clientY <= middle_box2.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = imgs[i].cloneNode(true);
            middle_div1_box_div1.appendChild(imgsClone);
            middle_div1_box_div1.style.border = '0px solid #999'
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
        if (e.clientX >= middle_box3.left && e.clientX <= middle_box3.right &&
            e.clientY >= middle_box3.top && e.clientY <= middle_box3.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = imgs[i].cloneNode(true);
            middle_div1_box_div3.appendChild(imgsClone);
            middle_div1_box_div3.style.border = '0px solid #999'
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};

// 放開花時   (盒子四)
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(imgs[i]);
        if (e.clientX >= middle_box4.left && e.clientX <= middle_box4.right &&
            e.clientY >= middle_box4.top && e.clientY <= middle_box4.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = imgs[i].cloneNode(true);
            middle_div1_box_div4.appendChild(imgsClone);
            middle_div1_box_div4.style.border = '0px solid #999'
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};

// 放開花時   (盒子五)
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(imgs[i]);
        if (e.clientX >= middle_box5.left && e.clientX <= middle_box5.right &&
            e.clientY >= middle_box5.top && e.clientY <= middle_box5.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = imgs[i].cloneNode(true);
            middle_div1_box_div5.appendChild(imgsClone);
            middle_div1_box_div5.style.border = '0px solid #999'
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};


// 放開花時   (盒子六)
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(imgs[i]);
        if (e.clientX >= middle_box6.left && e.clientX <= middle_box6.right &&
            e.clientY >= middle_box6.top && e.clientY <= middle_box6.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = imgs[i].cloneNode(true);
            middle_div1_box_div6.appendChild(imgsClone);
            middle_div1_box_div6.style.border = '0px solid #999'
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};

// 放開花時   (盒子七)
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(imgs[i]);
        if (e.clientX >= middle_box7.left && e.clientX <= middle_box7.right &&
            e.clientY >= middle_box7.top && e.clientY <= middle_box7.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = imgs[i].cloneNode(true);
            middle_div1_box_div7.appendChild(imgsClone);
            middle_div1_box_div7.style.border = '0px solid #999'
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};

// 放開花時   (盒子八)
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(imgs[i]);
        if (e.clientX >= middle_box8.left && e.clientX <= middle_box8.right &&
            e.clientY >= middle_box8.top && e.clientY <= middle_box8.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = imgs[i].cloneNode(true);
            middle_div1_box_div8.appendChild(imgsClone);
            middle_div1_box_div8.style.border = '0px solid #999'
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};

// 放開花時   (盒子九)
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(imgs[i]);
        if (e.clientX >= middle_box9.left && e.clientX <= middle_box9.right &&
            e.clientY >= middle_box9.top && e.clientY <= middle_box9.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = imgs[i].cloneNode(true);
            middle_div1_box_div9.appendChild(imgsClone);
            middle_div1_box_div9.style.border = '0px solid #999'
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};

// 放開花時   (盒子十)
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(imgs[i]);
        if (e.clientX >= middle_box10.left && e.clientX <= middle_box10.right &&
            e.clientY >= middle_box10.top && e.clientY <= middle_box10.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = imgs[i].cloneNode(true);
            middle_div1_box_div10.appendChild(imgsClone);
            middle_div1_box_div10.style.border = '0px solid #999'
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};

// 放開花時   (盒子十一)
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(imgs[i]);
        if (e.clientX >= middle_box11.left && e.clientX <= middle_box11.right &&
            e.clientY >= middle_box11.top && e.clientY <= middle_box11.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = imgs[i].cloneNode(true);
            middle_div1_box_div11.appendChild(imgsClone);
            middle_div1_box_div11.style.border = '0px solid #999'
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};

// 放開花時   (盒子十二)
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(imgs[i]);
        if (e.clientX >= middle_box12.left && e.clientX <= middle_box12.right &&
            e.clientY >= middle_box12.top && e.clientY <= middle_box12.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = imgs[i].cloneNode(true);
            middle_div1_box_div12.appendChild(imgsClone);
            middle_div1_box_div12.style.border = '0px solid #999'
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};

// 放開花時   (盒子十三)
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(imgs[i]);
        if (e.clientX >= middle_box13.left && e.clientX <= middle_box13.right &&
            e.clientY >= middle_box13.top && e.clientY <= middle_box13.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = imgs[i].cloneNode(true);
            middle_div1_box_div13.appendChild(imgsClone);
            middle_div1_box_div13.style.border = '0px solid #999'
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};

// 放開花時   (盒子十四)
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(imgs[i]);
        if (e.clientX >= middle_box14.left && e.clientX <= middle_box14.right &&
            e.clientY >= middle_box14.top && e.clientY <= middle_box14.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = imgs[i].cloneNode(true);
            middle_div1_box_div14.appendChild(imgsClone);
            middle_div1_box_div14.style.border = '0px solid #999'
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};

// 放開花時   (盒子十五)
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(imgs[i]);
        if (e.clientX >= middle_box15.left && e.clientX <= middle_box15.right &&
            e.clientY >= middle_box15.top && e.clientY <= middle_box15.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = imgs[i].cloneNode(true);
            middle_div1_box_div15.appendChild(imgsClone);
            middle_div1_box_div15.style.border = '0px solid #999'
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};

/* 
// 放開花時   (盒子一)
left_menu4_img1.addEventListener('dragend', (e) => {
    console.log('放開了');
    // if (e.mouseup === middle_div1_box_div1) {
    //     console.log('在盒子內');
    //     return;
    // } else {
    //     console.log('在盒子外面')
    // }

    if (e.clientX >= middle_box1.left && e.clientX <= middle_box1.right &&
        e.clientY >= middle_box1.top && e.clientY <= middle_box1.bottom) {
        console.log('在盒子內1');
    } else {
        console.log('不在盒子內1');
    }

    if (e.clientX >= xStart && e.clientX <= xEnd &&
        e.clientY >= yStart && e.clientY <= yEnd) {
        console.log('在範圍內1');
        let img = document.getElementById('left_menu4_img1');
        img.src = './images/Custom_block/Ellipse 5.svg';
        middle_div1_box_div1.appendChild(img);
        middle_div1_box_div1.style.border = '0px solid #999'
    } else {
        console.log('不在範圍內1');
    }
});



// 放開花時   (盒子二)
left_menu4_img1.addEventListener('dragend', (e) => {
    console.log('放開了');
    // if (e.mouseup === middle_div1_box_div1) {
    //     console.log('在盒子內');
    //     return;
    // } else {
    //     console.log('在盒子外面')
    // }

    if (e.clientX >= middle_box2.left && e.clientX <= middle_box2.right &&
        e.clientY >= middle_box2.top && e.clientY <= middle_box2.bottom) {
        console.log('在盒子內2');
        console.log('在範圍內2');
        let img = document.getElementById('left_menu4_img1');
        img.src = './images/Custom_block/Ellipse 5.svg';
        middle_div1_box_div2.appendChild(img);
        middle_div1_box_div2.style.border = '0px solid #999'
    } else {
        console.log('不在盒子內2');
        console.log('不在範圍內2');
    }
});

// 放開花時   (盒子三)
left_menu4_img1.addEventListener('dragend', (e) => {
    console.log('放開了');
    if (e.clientX >= middle_box3.left && e.clientX <= middle_box3.right &&
        e.clientY >= middle_box3.top && e.clientY <= middle_box3.bottom) {
        console.log('在盒子內3');
        console.log('在範圍內3');
        let img = document.getElementById('left_menu4_img1');
        img.src = './images/Custom_block/Ellipse 5.svg';
        middle_div1_box_div3.appendChild(img);
        middle_div1_box_div3.style.border = '0px solid #999'
    } else {
        console.log('不在盒子內3');
        console.log('不在範圍內3');
    }
});

// 放開花時   (盒子四)
left_menu4_img1.addEventListener('dragend', (e) => {
    console.log('放開了');
    if (e.clientX >= middle_box4.left && e.clientX <= middle_box4.right &&
        e.clientY >= middle_box4.top && e.clientY <= middle_box4.bottom) {
        console.log('在盒子內4');
        console.log('在範圍內4');
        let img = document.getElementById('left_menu4_img1');
        img.src = './images/Custom_block/Ellipse 5.svg';
        middle_div1_box_div4.appendChild(img);
        middle_div1_box_div4.style.border = '0px solid #999'
    } else {
        console.log('不在盒子內4');
        console.log('不在範圍內4');
    }
});

// 放開花時   (盒子五)
left_menu4_img1.addEventListener('dragend', (e) => {
    console.log('放開了');
    if (e.clientX >= middle_box5.left && e.clientX <= middle_box5.right &&
        e.clientY >= middle_box5.top && e.clientY <= middle_box5.bottom) {
        console.log('在盒子內5');
        console.log('在範圍內5');
        let img = document.getElementById('left_menu4_img1');
        img.src = './images/Custom_block/Ellipse 5.svg';
        middle_div1_box_div5.appendChild(img);
        middle_div1_box_div5.style.border = '0px solid #999'
    } else {
        console.log('不在盒子內5');
        console.log('不在範圍內5');
    }
});


// 放開花時   (盒子六)
left_menu4_img1.addEventListener('dragend', (e) => {
    console.log('放開了');
    if (e.clientX >= middle_box6.left && e.clientX <= middle_box6.right &&
        e.clientY >= middle_box6.top && e.clientY <= middle_box6.bottom) {
        console.log('在盒子內6');
        console.log('在範圍內6');
        let img = document.getElementById('left_menu4_img1');
        img.src = './images/Custom_block/Ellipse 5.svg';
        middle_div1_box_div6.appendChild(img);
        middle_div1_box_div6.style.border = '0px solid #999'
    } else {
        console.log('不在盒子內6');
        console.log('不在範圍內6');
    }
});
 */

/* ↑↑裝飾品區域↑↑ */


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
    roses_img,
    chrysanthemum_img,
    lavender_img]


for (let i = 0; i < ingredients.length; i++) {
    ingredients[i].addEventListener('drag', (e) => {
        middle_div1_box_div1.style.border = '2px solid red';
        middle_div1_box_div2.style.border = '2px solid red';
        middle_div1_box_div3.style.border = '2px solid red';
        middle_div1_box_div4.style.border = '2px solid red';
        middle_div1_box_div5.style.border = '2px solid red';
        middle_div1_box_div6.style.border = '2px solid red';
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
    }
    )
};



// 放開花時   (盒子一)
for (let i = 0; i < ingredients.length; i++) {
    ingredients[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(ingredients[i]);
        if (e.clientX >= middle_box1.left && e.clientX <= middle_box1.right &&
            e.clientY >= middle_box1.top && e.clientY <= middle_box1.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = ingredients[i].cloneNode(true);
            // imgsClone.style.position = 'absolute';
            // imgsClone.style.zIndex = i + 1;
            middle_div1_box_div1.appendChild(imgsClone);
            middle_div1_box_div1.style.border = '0px solid #999'
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};

// 放開花時   (盒子二)
for (let i = 0; i < ingredients.length; i++) {
    ingredients[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(ingredients[i]);
        if (e.clientX >= middle_box2.left && e.clientX <= middle_box2.right &&
            e.clientY >= middle_box2.top && e.clientY <= middle_box2.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = ingredients[i].cloneNode(true);
            middle_div1_box_div1.appendChild(imgsClone);
            middle_div1_box_div1.style.border = '0px solid #999'
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};

// 放開花時   (盒子三)
for (let i = 0; i < ingredients.length; i++) {
    ingredients[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(ingredients[i]);
        if (e.clientX >= middle_box3.left && e.clientX <= middle_box3.right &&
            e.clientY >= middle_box3.top && e.clientY <= middle_box3.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = ingredients[i].cloneNode(true);
            middle_div1_box_div3.appendChild(imgsClone);
            middle_div1_box_div3.style.border = '0px solid #999'
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};

// 放開花時   (盒子四)
for (let i = 0; i < ingredients.length; i++) {
    ingredients[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(ingredients[i]);
        if (e.clientX >= middle_box4.left && e.clientX <= middle_box4.right &&
            e.clientY >= middle_box4.top && e.clientY <= middle_box4.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = ingredients[i].cloneNode(true);
            middle_div1_box_div4.appendChild(imgsClone);
            middle_div1_box_div4.style.border = '0px solid #999'
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};

// 放開花時   (盒子五)
for (let i = 0; i < ingredients.length; i++) {
    ingredients[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(ingredients[i]);
        if (e.clientX >= middle_box5.left && e.clientX <= middle_box5.right &&
            e.clientY >= middle_box5.top && e.clientY <= middle_box5.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = ingredients[i].cloneNode(true);
            middle_div1_box_div5.appendChild(imgsClone);
            middle_div1_box_div5.style.border = '0px solid #999'
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};


// 放開花時   (盒子六)
for (let i = 0; i < ingredients.length; i++) {
    ingredients[i].addEventListener('dragend', (e) => {
        console.log('拖曳中');
        console.log(ingredients[i]);
        if (e.clientX >= middle_box6.left && e.clientX <= middle_box6.right &&
            e.clientY >= middle_box6.top && e.clientY <= middle_box6.bottom) {
            console.log('在盒子內2');
            console.log('在範圍內2');
            // let img = document.getElementById('left_menu4_img1');
            // img.src = './images/Custom_block/Ellipse 5.svg';
            let imgsClone = ingredients[i].cloneNode(true);
            middle_div1_box_div6.appendChild(imgsClone);
            middle_div1_box_div6.style.border = '0px solid #999'
        } else {
            console.log('不在盒子內2');
            console.log('不在範圍內2');
        }
    });
};

/* ↑↑配料區區塊↑↑ */

middle_div1_box_div1.addEventListener('drop', (e) => {
    console.log('目標區域');
    // e.preventDefault();
    // if (e.target.className === 'middle_div1_box_div1') {
    //     middle_div1_box_div1.appendChild(img);
    //     middle_div1_box_div1.style.border = '2px solid #999'
    //     console.log('有在目標內');
    // }
});

/* 監聽滑鼠座標位置 */
window.addEventListener('mousemove', (e) => {
    // console.log(`${event.pageX},${event.pageY}`);
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
let xStart2 = middle_box1.left;  // 左邊界的 X 座標
let yStart2 = middle_box1.top;   // 上邊界的 Y 座標
let xEnd2 = middle_box1.right;   // 右邊界的 X 座標
let yEnd2 = middle_box1.bottom;  // 下邊界的 Y 座標
/* 取得第三個盒子的XY範圍 */
let middle_box3 = middle_div1_box_div3.getBoundingClientRect();
let xStart3 = middle_box1.left;  // 左邊界的 X 座標
let yStart3 = middle_box1.top;   // 上邊界的 Y 座標
let xEnd3 = middle_box1.right;   // 右邊界的 X 座標
let yEnd3 = middle_box1.bottom;  // 下邊界的 Y 座標
/* 取得第四個盒子的XY範圍 */
let middle_box4 = middle_div1_box_div4.getBoundingClientRect();
let xStart4 = middle_box1.left;  // 左邊界的 X 座標
let yStart4 = middle_box1.top;   // 上邊界的 Y 座標
let xEnd4 = middle_box1.right;   // 右邊界的 X 座標
let yEnd4 = middle_box1.bottom;  // 下邊界的 Y 座標
/* 取得第五個盒子的XY範圍 */
let middle_box5 = middle_div1_box_div5.getBoundingClientRect();
let xStart5 = middle_box1.left;  // 左邊界的 X 座標
let yStart5 = middle_box1.top;   // 上邊界的 Y 座標
let xEnd5 = middle_box1.right;   // 右邊界的 X 座標
let yEnd5 = middle_box1.bottom;  // 下邊界的 Y 座標
/* 取得第六個盒子的XY範圍 */
let middle_box6 = middle_div1_box_div6.getBoundingClientRect();
let xStart6 = middle_box1.left;  // 左邊界的 X 座標
let yStart6 = middle_box1.top;   // 上邊界的 Y 座標
let xEnd6 = middle_box1.right;   // 右邊界的 X 座標
let yEnd6 = middle_box1.bottom;  // 下邊界的 Y 座標
/* 取得第七個盒子的XY範圍 */
let middle_box7 = middle_div1_box_div7.getBoundingClientRect();
let xStart7 = middle_box1.left;  // 左邊界的 X 座標
let yStart7 = middle_box1.top;   // 上邊界的 Y 座標
let xEnd7 = middle_box1.right;   // 右邊界的 X 座標
let yEnd7 = middle_box1.bottom;  // 下邊界的 Y 座標
/* 取得第八個盒子的XY範圍 */
let middle_box8 = middle_div1_box_div8.getBoundingClientRect();
let xStart8 = middle_box1.left;  // 左邊界的 X 座標
let yStart8 = middle_box1.top;   // 上邊界的 Y 座標
let xEnd8 = middle_box1.right;   // 右邊界的 X 座標
let yEnd8 = middle_box1.bottom;  // 下邊界的 Y 座標
/* 取得第九個盒子的XY範圍 */
let middle_box9 = middle_div1_box_div9.getBoundingClientRect();
let xStart9 = middle_box1.left;  // 左邊界的 X 座標
let yStart9 = middle_box1.top;   // 上邊界的 Y 座標
let xEnd9 = middle_box1.right;   // 右邊界的 X 座標
let yEnd9 = middle_box1.bottom;  // 下邊界的 Y 座標
/* 取得第十個盒子的XY範圍 */
let middle_box10 = middle_div1_box_div10.getBoundingClientRect();
let xStart10 = middle_box1.left;  // 左邊界的 X 座標
let yStart10 = middle_box1.top;   // 上邊界的 Y 座標
let xEnd10 = middle_box1.right;   // 右邊界的 X 座標
let yEnd10 = middle_box1.bottom;  // 下邊界的 Y 座標
/* 取得第十一個盒子的XY範圍 */
let middle_box11 = middle_div1_box_div11.getBoundingClientRect();
let xStart11 = middle_box1.left;  // 左邊界的 X 座標
let yStart11 = middle_box1.top;   // 上邊界的 Y 座標
let xEnd11 = middle_box1.right;   // 右邊界的 X 座標
let yEnd11 = middle_box1.bottom;  // 下邊界的 Y 座標
/* 取得第十二個盒子的XY範圍 */
let middle_box12 = middle_div1_box_div12.getBoundingClientRect();
let xStart12 = middle_box1.left;  // 左邊界的 X 座標
let yStart12 = middle_box1.top;   // 上邊界的 Y 座標
let xEnd12 = middle_box1.right;   // 右邊界的 X 座標
let yEnd12 = middle_box1.bottom;  // 下邊界的 Y 座標
/* 取得第十三個盒子的XY範圍 */
let middle_box13 = middle_div1_box_div13.getBoundingClientRect();
let xStart13 = middle_box1.left;  // 左邊界的 X 座標
let yStart13 = middle_box1.top;   // 上邊界的 Y 座標
let xEnd13 = middle_box1.right;   // 右邊界的 X 座標
let yEnd13 = middle_box1.bottom;  // 下邊界的 Y 座標
/* 取得第十四個盒子的XY範圍 */
let middle_box14 = middle_div1_box_div14.getBoundingClientRect();
let xStart14 = middle_box1.left;  // 左邊界的 X 座標
let yStart14 = middle_box1.top;   // 上邊界的 Y 座標
let xEnd14 = middle_box1.right;   // 右邊界的 X 座標
let yEnd14 = middle_box1.bottom;  // 下邊界的 Y 座標
/* 取得第十五個盒子的XY範圍 */
let middle_box15 = middle_div1_box_div15.getBoundingClientRect();
let xStart15 = middle_box1.left;  // 左邊界的 X 座標
let yStart15 = middle_box1.top;   // 上邊界的 Y 座標
let xEnd15 = middle_box1.right;   // 右邊界的 X 座標
let yEnd15 = middle_box1.bottom;  // 下邊界的 Y 座標