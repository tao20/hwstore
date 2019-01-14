$(function() {

    //点击 登陆，弹出登录框
    $('.login-box').on('click', function() {
        $('#modul').css('display', 'block');
    });

    // 关闭 登录框
    $('.modul-close').on('click', function() {
        $('#modul').css('display', 'none');
    });

    // 登录 功能
    $('.login').on('click', function() {
        $.ajax({
            url: '../../php/login.php',
            type: 'get',
            dataType: 'json',
            data: {
                'username': $('.username').val(),
                'password': $('.password').val()
            },

            success: function(res) {
                if (res.err) {
                    alert("用户名或密码错误!");
                } else {
                    alert("登录成功");
                    $('#modul').css('display', 'none');
                    setCookie('username', res.username);
                    showUser();
                }
            },
            error: function(xhr) {
                console.log(xhr.status);
            }
        });
    });

    showUser();

    // 如果有可用 cookie，获取到cookie的值，替换掉原来的内容  并创建一个退出登录的按钮
    function showUser() {
        var username = getCookie('username');
        if (username) {
            $('.islogin').html('欢迎回来 , ' + username + '<a class="loginOut" href="#">退出</a>').css({ 'font-size': "15px", "color": "#CB242B" });
        }
    }

    //退出登录 (a是后来生成的， 需要使用事件委托)
    $('.islogin').on('click', '.loginOut', function() {
        removeCookie('username');
        location.reload();
    });

    // 关闭顶部小图片
    $('.topbar-close').on('click', function() {
        $(this).parent().remove();
    });



});