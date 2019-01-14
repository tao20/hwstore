$(function() {

    // 给注册添加一个点击事件， type一定要是 submit才可以提交
    $('#submit').on('click', function(e) {
        var e = event || e;
        e.preventDefault;

        var validate = $("#myform").validate({
            // debug:true,   //开启之后，即使表单没有错误，也不会提交
            focusInvalid: true, //鼠标自动跳转到错误表单项  提交的时候自动获取焦点
            submitHandler: function(form) {
                // form.submit();   提交表单
                $.ajax({
                    type: 'post',
                    url: '../../php/register.php',
                    dataType: 'json',
                    data: {
                        'username': $('#username').val(),
                        'password': $('#password').val()
                    },
                    success: function(res) {
                        if (res.err) {
                            alert(res.mes);
                        } else {
                            alert(res.mes);
                            setCookie('username', res.username);
                            location.href = "index.html";
                        }
                    },
                    error: function(xhr) {
                        console.log(xhr.status);
                    }
                });
            },
            rules: {
                username: {
                    required: true

                },
                password: {
                    required: true,
                    minlength: 6
                },
                checkpassword: {
                    required: true,
                    equalTo: "#password"
                }
            },
            messages: {
                username: {
                    required: "请输入用户名"
                },
                password: {
                    required: "请输入密码",
                    minlength: $.validator.format("最少要输入 {0} 个字符")
                },
                checkpassword: {
                    required: "请再输入一次密码",
                    equalTo: "两次密码输入不一致"
                }
            }
        });
    });

});