function ShopFilter({ handleFestivalFilter,handlePriceFilter, handleCountsFilter, toggleDropdown, showPriceDropdown, showCountsDropdown, showFestivalDropdown ,showPermutationDropdown }) {


    return (<>
        <div id="filter" class="filter">
            <div class="filter_list">
                <ul class="drop-down-menu">
                    <li id="festivalBtn" onClick={() => toggleDropdown('festival')} ><img class="BtnPic" src="./images/shop_images/filter_btn1_down.svg" alt="" />
                        {showFestivalDropdown && (
                        <ul id="festivalList">
                            <li onClick={() => handleFestivalFilter('valentines')}><a>情人節</a>
                            </li>
                            <li onClick={() => handleFestivalFilter('birthday')}><a>生日</a>
                            </li>
                            <li onClick={() => handleFestivalFilter('graduation')}><a>畢業</a>
                            </li>
                            <li onClick={() => handleFestivalFilter('otherDay')}><a>其它節慶</a>
                            </li>
                        </ul>
                        )}
                    </li>
                    <li id="countsBtn"  onClick={() => toggleDropdown('counts')}><img class="BtnPic" src="./images/shop_images/filter_btn2_down.svg" alt="" />
                    {showCountsDropdown  && (
                        <ul id="countsList">
                            <li onClick={() => handleCountsFilter('are4')}><a>4入</a></li>
                            <li onClick={() => handleCountsFilter('are6')}><a>6入</a></li>
                            <li onClick={() => handleCountsFilter('are12')}><a>12入</a></li>
                            <li onClick={() => handleCountsFilter('are24')}><a>24入</a></li>
                        </ul>
                    )}
                    </li>
                    <li id="priceBtn"  onClick={() => toggleDropdown('price')} ><img class="BtnPic" src="./images/shop_images/filter_btn3_down.svg" alt=""/>
                        {showPriceDropdown && (
                            <ul id="priceList">
                                <li onClick={() => handlePriceFilter('below500')}><a >500元以下</a></li>
                                <li onClick={() => handlePriceFilter('below1000')}><a >1000元以下</a></li>
                                <li onClick={() => handlePriceFilter('below2000')}><a >2000元以下</a></li>
                                <li onClick={() => handlePriceFilter('above2000')}><a >2000元以上</a></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            <div class="permutation">
                <div class="permutation_btn" id="permutationBtn" onClick={() => toggleDropdown('permutation')}>
                    <img src="./images/shop_images/permutation.svg" alt="" />
                    {showPermutationDropdown && (
                    <ul id="permutationList">
                        <li><a href="">熱門</a></li>
                        <li><a href="">推薦</a></li>
                        <li><a href="">價格由低到高</a></li>
                        <li><a href="">價格由高到低</a></li>
                    </ul>
                    )}
                </div>
            </div>
        </div>
    </>)
};
export default ShopFilter;