$(document).ready(function() {

    // 动态生成主页数据   
    $.ajax({
        url: '../../php/prolist.php',
        dataType: 'json',
        type: 'get',
        success: function(res) {
            var temp;
            var mainbox = $('.main-m');
            res.forEach(ele => {
                temp = `
                    <li class="toggle">
                        <a href="detail.html?id=${ele.id}">
                            <img src="${ele.img}" alt="">
                        </a>
                    </li>
                `;
                mainbox.append(temp);
            });
        }
    });

    // 轮播图

    var num = 0,
        timer = null,
        len = $('.banner a').length;

    // 悬浮  清除定时器
    $('.banner').hover(function() {
        clearInterval(timer);
    }, function() {
        show();
    })

    //点击切换到对应的 图片
    $('.banner li').on('click', function() {
        clearInterval(timer);
        num = $(this).index();
        $('.banner a').eq(num).fadeIn(400).siblings().fadeOut(400);
        $('.banner li').eq(num).addClass('act').siblings().removeClass('act');

    });

    show();

    function show() {
        clearInterval(timer);
        timer = setInterval(function() {
            ++num;
            if (num > len) {
                num = 0;
            }
            $('.banner a').eq(num).fadeIn(400).siblings().fadeOut(400);
            $('.banner li').eq(num).addClass('act').siblings().removeClass('act');
        }, 3000);
    }
});