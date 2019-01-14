$(function() {
    //    登陆后  隐藏提示登录框
    var username = getCookie('username');
    if (username) {
        $('.logo-hint').css('display', 'none');
        // console.log('111');
    }


    // 如果cookie里面 有添加之后的商品
    var shop = getCookie('shop');
    if (shop) {
        $('.empty').css('display', 'none');
        $('.show1').css('display', 'block');
        shop = JSON.parse(shop);
        var idlist = shop.map(ele => ele.id).join();
        $.ajax({
            url: '../../php/shopcar.php',
            type: 'get',
            data: {
                'idlist': idlist
            },
            dataType: 'json',
            success: function(res) {
                var template;
                res.forEach(ele => {
                    // console.log(ele);
                    template = `
                        <input type="checkbox">
                        <div class="list-main">
                            <img src="${ele.img}" alt="">
                            <a href="#">${ele.title}</a>
                            <span class = "danjia">￥${ele.price}</span>

                            <!-- 手动添加数量的 -->
                            <span class="add">
                                <input class="quantity" type='text' min="1" value="${ele.num}">
                                <p>
                                <a class="jia" href="#">+</a>
                                <a class="jian" href="#">-</a>
                                </p>
                            </span>

                            <!-- 价格 -->
                            <em class="price">￥${ele.num * ele.price}</em>

                            <!-- 删除 -->
                            <del class="del" href="#">删除</del>
                        </div>
                    `;
                    $(".list").append(template);
                });

                // 增加和减少按键
                $('.list').find('.jia').on('click', function(e) {
                    e.preventDefault();
                    //修改数量
                    var input = $(this).parent().prev();
                    input.attr('value', parseInt(input.val()) + 1);

                    //改变价格
                    var price = $(this).parent().parent().parent().find('.danjia').html();
                    if (price) {
                        var pricenum = price.split('￥')[1];
                    }
                    var res = pricenum * input.val();
                    $(this).parent().parent().parent().find('.price').html('￥' + res);

                    // jisuan();
                    adarr();
                });

                $('.jian').on('click', function(e) {
                    e.preventDefault();

                    var input = $(this).parent().prev();
                    if (input.val() > 1) {
                        input.attr('value', input.val() - 1);
                    }
                    //改变价格
                    var price = $(this).parent().parent().parent().find('.danjia').html();
                    if (price) {
                        var pricenum = price.split('￥')[1];
                    }
                    var res = pricenum * input.val();
                    $(this).parent().parent().parent().find('.price').html('￥' + res);

                    adarr();
                });


                //总价的计算
                function adarr() {
                    var adarr = $('.price');
                    var ad = 0; //下面要用来相加  所以需要写成 number类型
                    for (var i = 0; i < adarr.length; i++) {

                        //截取之后是string   所以需要转成number类型
                        ad += Number(adarr[i].innerHTML.split('￥')[1]);
                    }

                    // console.log(ad);
                    $('.zongjia').html('￥' + ad);
                }




                // 在上面 调用无效
                // function jisuan(num) {
                //     var input = $(that).parent().prev();
                //     input.attr('value', parseInt(input.val()) + num);


                //     var price = $(that).parent().parent().parent().find('.danjia').html();
                //     if (price) {
                //         var pricenum = price.split('￥')[1];
                //     }
                //     var res = pricenum * input.val();
                //     $(that).parent().parent().parent().find('.price').html('￥' + res);
                //     console.log(num);
                // }


            }
        });
    }



    // 删除购物车 (全部)
    $('.alldel').on('click', function() {
        console.log(11);
        $(this).parent().parent().remove();
        removeCookie('shop');
        location.reload();
    });

    //全选 / 全不选
    var flag = true;
    $('.checkAll').on('click', function() {
        if (flag) {
            $("input[type='checkbox']").prop("checked", true);
            flag = false;
        } else {
            $("input[type='checkbox']").prop("checked", false);
            flag = true;
        }
    });
});