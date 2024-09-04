function Menu() {
    return (<>
        <div id="menu">
            <ul id="menu_id">
                <div id="menu_id_menu">
                    <li id="menu_id_li"><a href="./index.html">HOME</a></li>
                    <li id="menu_id_li"><a href="./shop.html">SHOP</a></li>
                    <li id="menu_id_li"><a href="./about.html">ABOUT</a></li>
                    <li id="menu_id_li"><a href="#">NEWS</a></li>
                    <li id="menu_id_li"><a href="./QnA.html">Q&A</a></li>
                    <li id="menu_id_menu_icon"><a href="./Customization.html" id="customized">
                        <p >customized</p>
                    </a></li>
                </div>
                <div id="menu_id_icon">
                    <li><a href="#" id="menu_id_icon_search"><img
                        src="./images/Custom_block/menu/material-symbols-light_search.svg" alt="" /></a>
                    </li>
                    <li id="menu_id_icon_show"><a href="#"><img src="./images/Custom_block/menu/Vector.svg" alt="" /></a>
                    </li>
                    <li><a href="./shopping_cart.html"><img src="./images/Custom_block/menu/shopping-cart-basket-1--shopping-basket.svg"
                        alt="" /></a></li>
                </div>
            </ul>
            <ul id="menu_id_search">
                <li id='menu_id_search_li'>
                    <div id="menu_id_search_divBox">

                        <a href="#" id="menu_id_search_divBox_a1"><img src="./images/Custom_block/menu/search.svg"
                            alt="" />
                            {/* <input type="text" placeholder="搜尋" id="menu_id_search_divBox_a1_input"/> */}
                            <p>搜尋</p>
                        </a>

                        <a href="#" id="menu_id_search_divBox_a2"><img src="./images/Custom_block/menu/Xicon.svg"
                            alt="" /></a>
                    </div>
                    <li><a href="#" id="menu_id_search_li2"><img src="./images/Custom_block/menu/Vector.svg" alt="" /></a>
                    </li>
                    <li><a href="./shopping_cart.html" id="menu_id_search_li3"><img
                        src="./images/Custom_block/menu/shopping-cart-basket-1--shopping-basket.svg" alt="" /></a>
                    </li>
                </li>
            </ul>
        </div></>)
};
