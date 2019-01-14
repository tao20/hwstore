// 设置cookie
function setCookie(key, val, day) {
    if (day) {
        var d = new Date();
        d.setDate(d.getDate + day);
        document.cookie = key + "=" + val + ";expires=" + d;
    } else {
        document.cookie = key + "=" + val;
    }
}

// 获取cookie
function getCookie(key) {
    if (document.cookie) {
        var str = document.cookie;
        var arr = str.split('; ');
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i].split('=');
            if (key === item[0]) {
                return item[1];
            }
        }
    }
    return '';
}

// 删除cookie
function removeCookie(key) {
    setCookie(key, '', -1);
}