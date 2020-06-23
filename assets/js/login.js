$(function() {
    //去注册链接
    $('#link_reg').on('click', function() {
        $('.login-box').hide();
        $('.reg-box').show();
    });

    //去登录链接
    $('#link_login').on('click', function() {
        $('.login-box').show();
        $('.reg-box').hide();
    });

    // 从layui中获取form对象
    var form = layui.form;
    //通过form.verify()函数自定义校验规则
    form.verify({
        // 自定义了一个叫做 pwd 校验规则
        // \s:匹配空格；\S：是\s的取反
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        //   验证两次密码是否一致
        repwd: function(value) {
            //通过形参value拿到的是确认密码
            //还要拿到密码
            //再进行一次等于判断
            //若判断失败，则return一个提示信息
            // [name=password]是一个属性选择器
            var pwd = $('.reg-box [name=password]').val();
            if (pwd !== value) {
                return '两次密码不一致！'
            }
        }
    });

});