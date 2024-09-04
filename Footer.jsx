   function Footer() {
        return (
            <footer>
                <div className="wrap">
                    <a className="logo" href="#"><img src="./images/footer_logo.svg" alt="" /></a>
                    <div className="bottom_nav">
                        <ul className="menu">
                            <li><a href="./index.html" id="home">首頁</a></li>
                            <li><a href="#" id="news">最新消息</a></li>
                            <li><a href="./shop.html" id="shop">商品一覽</a></li>
                            <li><a href="#" id="about">關於我們</a></li>
                            <li><a href="./QnA.html" id="Q&A">Q&A</a></li>
                            <li><a href="./shopping_cart.html" id="shopping_car">購物車</a></li>
                            <li><a href="#" id="member">會員專區</a></li>
                        </ul>
                    </div>
                    <div className="icon">
                        <a className="fb" href="#"></a>
                        <a className="ig" href="#"></a>
                        <a className="x" href="#"></a>
                    </div>
                </div>
                <div className="copyRight">© Mélange. All Rights Reserved.</div>
            </footer>
        )
    };