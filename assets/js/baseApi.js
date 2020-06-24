// 每次调用$.get()或$.post()或$.ajax()的时候，
//会先调用$.ajaxPreFilter函数
// 在这个函数中可以拿到Ajax提供的配置对象
$.ajaxPrefilter(function(options) {
    options.url = 'http://ajax.frontend.itheima.net' + options.url
    console.log(options.url);

});