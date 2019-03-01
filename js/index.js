// 把我们的代码保存到一个函数作用域 为了减少全局变量污染
(function(window){
    /**
     * 1.完成顶部搜索框背景色渐变功能
     * 分析: 当页面滚动出去的距离是否在轮播图高度内
     *      在高度内计算当前滚动出去的距离,对应背景色透明度
     *      计算背景透明度 = 滚动出去的距离 / 轮播图的高度
     *      把透明度的值 赋值给 头部raga上即可
     */
    //获取轮播图高度
    var slideHeight = document.querySelector('#slide').offsetHeight;
    //1.监听页面的滚动事件 
    //addEventListener h5提供的添加事件的方式这个方式可以注册多个事件 控制事件冒泡捕获
    window.addEventListener('scroll',function(){
        // 2. 获取滚动的距离 获取滚动条滚的距离 documentElement就是HTML元素
        // var scrollTop = document.documentElement.scrollTop;
        // 老版本浏览器是使用body
        // var scrollTop = document.body.scrollTop;
        // 为了兼容可以使用 || 如果前面值不存在 使用后面的值 存在就使用前面的值
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var opacity = scrollTop / slideHeight;
        //判断滚动出去的距离是否大于轮播图高度
        if(scrollTop < slideHeight){
            document.querySelector('#header').style.backgroundColor = "rgba(222,24,27,"+opacity+")";
        }else{
            document.querySelector('#header').style.backgroundColor = "rgb(222,24,27)"
        }
    });

    /**
     * 2.完成倒计时
     * 分析:1.总倒计时时间,假定2小时
     *      2.有一个定时器,每一秒总时间减1
     */
    //时 = time / 3600 向下取整
    //分 = 向下取整(time % 3600) / 60
    //秒 = time%60;
     var time = 2*60*60;
     //获取所有span
     var spanList = document.querySelectorAll('.seckill-downtime>span');
     setInterval(function(){
        time--;
        var hour = Math.floor(time/3600);
        var minute = Math.floor(time%3600 / 60);
        var second = time % 60;
        //把对应的时间放入span中十位和各位
        spanList[0].innerHTML = Math.floor(hour / 10);
        spanList[1].innerHTML = hour % 10;

        spanList[3].innerHTML = Math.floor(minute / 10);
        spanList[4].innerHTML = minute % 10;

        spanList[6].innerHTML = Math.floor(second / 10);
        spanList[7].innerHTML = second % 10;
     },1000);

     //轮播图
     var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        //自动切换
        autoplay: {
            // 是否在轮播到最后一张停下来 loop模式下无效
            stopOnLastSlide: true,
            //当手触摸滑动时是否禁止自动轮播
            // disableOnInteraction: true,
        },
        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        
        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      }) 
})(window);