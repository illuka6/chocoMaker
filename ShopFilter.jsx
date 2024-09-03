function ShopFilter({ handleFestivalFilter,handlePriceFilter, handleCountsFilter, toggleDropdown, showPriceDropdown, showCountsDropdown, showFestivalDropdown ,showPermutationDropdown }) {
    const { useState, useRef, useEffect } = React;
    
        // 使用 useRef 來引用下拉菜單和按鈕
        const festivalRef = useRef(null);
        const countsRef = useRef(null);
        const priceRef = useRef(null);
        const permutationRef = useRef(null);
        useEffect(() => {
            const handleClickOutside = (event) => {
                // 檢查點擊的目標是否在下拉菜單或按鈕範圍內
                if (
                    festivalRef.current && !festivalRef.current.contains(event.target) &&
                    countsRef.current && !countsRef.current.contains(event.target) &&
                    priceRef.current && !priceRef.current.contains(event.target) &&
                    permutationRef.current && !permutationRef.current.contains(event.target)
                ) {
                    // 點擊在下拉菜單外部時，關閉下拉菜單
                    toggleDropdown('festival', false);
                    toggleDropdown('counts', false);
                    toggleDropdown('price', false);
                    toggleDropdown('permutation', false);
                }
            };
    
            // 添加點擊事件處理程序
            document.addEventListener('mousedown', handleClickOutside);
    
            // 清理事件處理程序
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [toggleDropdown]);/* 每次toggleDropdown時渲染 */
        

   
    return (<>
        <div id="filter" class="filter">
            <div class="filter_list">
                <ul class="drop-down-menu">
                    <li id="festivalBtn"  ref={festivalRef} onClick={() => toggleDropdown('festival', !showFestivalDropdown)} ><img class="BtnPic" src="./images/shop_images/filter_btn1_down.svg" alt="" />
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
                    <li id="countsBtn" ref={countsRef}
                            onClick={() => toggleDropdown('counts', !showCountsDropdown)}><img class="BtnPic" src="./images/shop_images/filter_btn2_down.svg" alt="" />
                    {showCountsDropdown  && (
                        <ul id="countsList">
                            <li onClick={() => handleCountsFilter('are4')}><a>4入</a></li>
                            <li onClick={() => handleCountsFilter('are6')}><a>6入</a></li>
                            <li onClick={() => handleCountsFilter('are12')}><a>12入</a></li>
                            <li onClick={() => handleCountsFilter('are24')}><a>24入</a></li>
                        </ul>
                    )}
                    </li>
                    <li id="priceBtn" ref={priceRef}
                            onClick={() => toggleDropdown('price', !showPriceDropdown)} ><img class="BtnPic" src="./images/shop_images/filter_btn3_down.svg" alt=""/>
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
                <div class="permutation_btn" id="permutationBtn" ref={permutationRef}
                        onClick={() => toggleDropdown('permutation', !showPermutationDropdown)}>
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