// 初始化
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


// 时间
setInterval("jnkc.innerHTML=new Date().toLocaleDateString()+' 星期'+'日一二三四五六'.charAt(new Date().getDay())+' '+new Date().toLocaleTimeString()", 1000);


//layer
$ = layui.jquery;
var b = 1200 / 360; //我的图片比例
//获取浏览器宽度
var W = $(window).width();
var H = $(window).height();
layui.use(['carousel', 'form'], function() {
    var carousel = layui.carousel,
        form = layui.form;

    //图片轮播
    carousel.render({
        // elem: '#test10',
        // width: '100%',
        // height: (W * 0.8).toString() + "px",
        // interval: 5000

        elem: '#test10',
        width: '100%',
        height: '1150px',
        interval: 5000

        // elem: '#test10',
        // width: '1503px',
        // height: '905px',
        // interval: 5000

    });



    //监听开关
    form.on('switch(autoplay)', function() {
        ins3.reload({
            autoplay: this.checked
        });
    });

    $('.demoSet').on('keyup', function() {
        var value = this.value,
            options = {};
        if (!/^\d+$/.test(value)) return;

        options[this.name] = value;
        ins3.reload(options);
    });

    //其它示例
    $('.demoTest .layui-btn').on('click', function() {
        var othis = $(this),
            type = othis.data('type');
        active[type] ? active[type].call(this, othis) : '';
    });
});

layui.use(['util', 'laydate', 'layer'], function() {
  var util = layui.util,
      laydate = layui.laydate,
      $ = layui.$,
      layer = layui.layer;
  //固定块
  util.fixbar({
      bar1: true,
      bar2: true,
      css: {
          right: 50,
          bottom: 100
      },
      bgcolor: '#393D49',
      click: function(type) {
          if (type === 'bar1') {
              layer.msg(' 社团承诺：包教！包会！包婚配！')
          } else if (type === 'bar2') {
              layer.msg('你是要找 Cold 和 Arche吗')
          }
      }
  });


});