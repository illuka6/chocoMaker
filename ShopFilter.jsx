function ShopFilter(handlePriceFilter) {
    return (<>
        <div id="filter" class="filter">
            <div class="filter_list">
                <ul class="drop-down-menu">
                    <li id="festivalBtn"><img class="BtnPic" src="./images/shop_images/filter_btn1_down.svg"
                        alt="" />
                        <ul id="festivalList">
                            <li><a href="#">情人節</a>
                            </li>
                            <li><a href="#">生日</a>
                            </li>
                            <li><a href="#">畢業</a>
                            </li>
                            <li><a href="#">其它節慶</a>
                            </li>
                        </ul>
                    </li>
                    <li id="countsBtn"><img class="BtnPic" src="./images/shop_images/filter_btn2_down.svg" alt="" />
                        <ul id="countsList">
                            <li><a href="#">4入</a>
                            </li>
                            <li><a href="#">6入</a>
                            </li>
                            <li><a href="#">12入</a>
                            </li>
                            <li><a href="#">24入</a>
                            </li>
                        </ul>
                    </li>
                    <li id="priceBtn"><img class="BtnPic" src="./images/shop_images/filter_btn3_down.svg" alt="" />
                        <ul id="priceList">
                            <li><a href="#" onClick={() => handlePriceFilter('below500')}>500元以下</a></li>
                            <li><a href="#" onClick={() => handlePriceFilter('below1000')}>1000元以下</a></li>
                            <li><a href="#" onClick={() => handlePriceFilter('below2000')}>2000元以下</a></li>
                            <li><a href="#" onClick={() => handlePriceFilter('above2000')}>2000元以上</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="permutation">
                <div class="permutation_btn" id="permutationBtn">
                    <a><img src="./images/shop_images/permutation.svg" alt="" /></a>
                    <ul id="permutationList">
                        <li><a href="">熱門</a></li>
                        <li><a href="">推薦</a></li>
                        <li><a href="">價格由低到高</a></li>
                        <li><a href="">價格由高到低</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>)
};