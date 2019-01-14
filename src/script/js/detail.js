$(function() {
    //动态生成 数据
    // 这里的id，是在前面 点击链接跳转到此页面的时候，手动给每一个链接后面 添加上  ?id=xxx
    var id = location.search.split('=')[1];
    $.ajax({
        url: '../../php/getproduct.php',
        type: 'get',
        data: {
            id: id
        },
        dataType: 'json',
        success: function(res) {
            console.log(res);
            var temp = `
                    <div class="bar">
                    <a href="#">首页</a>&nbsp; > &nbsp;
                    <a href="#">通用配件</a>&nbsp; > &nbsp;
                    <a href="#">充电器/线材</a>&nbsp; > &nbsp;
                    <a class="current" href="#">${res.title}</a>
                </div>

                <!-- 左边产品图片部分 -->
                <div class="product-img">
                    <div class="wrap">
                        <img src="${res.img}" alt="">
                        <p class="mask"></p>
                        <div class="bgimg"></div>
                    </div>
                    <div class="product-gallery-nav">
                        <a href="#"></a>
                        <a href="#"></a>
                        <div class="product-nav clear">
                            <ul>
                                <li class="current"><img src="https://res.vmallres.com/pimages//product/6901443265565/78_78_1540802855488mp.png" alt=""></li>
                                <li><img src="https://res.vmallres.com/pimages//product/6901443265565/group//78_78_1540802814920.png" alt=""></li>
                                <li><img src="https://res.vmallres.com/pimages//product/6901443265565/group//78_78_1540802824444.png" alt=""></li>
                                <li><img src="https://res.vmallres.com/pimages//product/6901443265565/group//78_78_1540802833752.png" alt=""></li>
                                <li><img src="https://res.vmallres.com/pimages//product/6901443265565/group//78_78_1540802841394.png" alt=""></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="pmes">
                    <div class="product-meta">
                    <h2>
                        ${res.title}
                    </h2>
                    <p class="product-slogan">
                        ${res.detail}
                    </p>
                </div>
                <div class="product-info">
                    <p><span class="indent">价 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 格</span><span><i>￥</i>${res.price}</span></p>
                    <div class="product-sale clear">
                        <div class="tit indent">
                            促 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 销
                        </div>
                        <div class="mes">
                            <p>
                                <em>赠送积分</em> 购买即赠商城积分，积分可抵现~
                            </p>
                        </div>
                    </div>
                </div>


                <!-- 商品编码  服务说明 -->
                <div class="service">
                    <p><span class="indent">服务说明</span>已满48元免运费<em>|</em>由华为商城负责发货，并提供售后服务</p>
                    <p><span class="indent">商品编码</span>3102020008202</p>
                    <div class="color">
                        <span class="indent">选择颜色</span>
                        <a href="#">
                            <img src="https://res.vmallres.com/pimages//product/6901443259298/40_40_1540802820764mp.png" alt="">
                            <span>标准版 白色</span>
                        </a>
                        <a href="#">
                            <img src="https://res.vmallres.com/pimages//product/6901443265565/40_40_1540802855488mp.png" alt="">
                            <span>标准版 黑色</span>
                        </a>
                        <a href="#">
                            <img src="https://res.vmallres.com/pimages//product/6901443259304/40_40_1539676429611mp.jpg" alt="">
                            <span>套装版 白色</span>
                        </a>
                    </div>
                </div>

                <!-- 加入购物车下单部分 -->
                <div class="buy">
                    <p class="select">
                        <span class="indent">已选择商品:</span><em>${res.color}</em>
                    </p>
                    <div class="operation">
                        <span class="clear">
                            <input class="quantity" type="text" value="${res.num}">
                            <p>
                            <a class='up' href="#">+</a>
                            <a class='down' href="#">-</a>
                            </p>
                        </span>
                        <a class="pushcar" href="#">加入购物车</a>
                        <a class="buynow">立即下单</a>
                    </div>
                </div>
                `;
            $('.fool').append(temp).find('.pushcar').on('click', function() {
                addShopcar(res.id, res.price, $('.quantity').val());
            });
        }
    });
});

// 加入购物车
function addShopcar(id, price, num) {
    var shop = getCookie('shop');
    var product = {
        id: id,
        price: price,
        num: num
    }

    if (shop) {
        shop = JSON.parse(shop); // cookie取出的都是 字符串   

        //如果 cookie里面的id 和传入的 商品详情id一致， 就以新添加的数量为准
        if (shop.some(ele => ele.id === id)) {
            shop.forEach((elm) => {
                // elm.id === id ? elm.num = num : null;
                elm.num = num;
            })
        } else {
            // 新添加一个内容不一样的  shop cookie
            shop.push(product);
        }
        setCookie('shop', JSON.stringify(shop), 1);
    } else {
        shop = [];
        shop.push(product);
        setCookie('shop', JSON.stringify(shop), 1);
    }
    console.log(getCookie('shop'));
    alert("加入购物车成功~ 快去付款吧");
}