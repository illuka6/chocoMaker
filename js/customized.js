 //測試一
            /*         function click_box(box) {
                        const who_click = document.getElementById(click_box_1);
                        console.log(box);
                    } */

            //測試二
            /* const who_click = document.getElementById("click_box_1");
            who_click.addEventListener("click", function () {
                console.log(who_click);
            }); */

            //正式環境
            //函式物件的被點擊
            let outer_box = Array.from(document.getElementsByClassName("click_box"));
            //函式物件被加入資料
            let block_box = Array.from(document.getElementsByClassName("decorative__block_box_sidebar"));
            outer_box.forEach((blockbox, usebox) => {
                blockbox.addEventListener("click", () => {
                    console.log('clicked');
                    //套用下面()的函式資料
                    who_click(outer_box, usebox);
                    who_click(block_box, usebox);
                })
            })

            console.log(outer_box);
            console.log(block_box);


            //上面函式丟下來跑回圈

            //函式執行刪除及加入('alert')
            function who_click(outbox, inbox) {
                //此處的outbox為outer_box的連接點
                //inbox為outer_box的陣列[i]的位置
                outbox.forEach((who) => {
                    //刪除上面丟下來的資料的 ('alert')
                    who.classList.remove('alert');
                });
                console.log(outbox[inbox]);
                //在指定的 outbox[inbox] inbox裡面加入("alert")
                outbox[inbox].classList.add("alert");
            }

            function add(a, b) {
                return a + b;
            }
