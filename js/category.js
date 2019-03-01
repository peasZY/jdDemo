(function(window){
    var swiper1 = new Swiper('.category-left .swiper-container',{
        // 垂直滑动是垂直方向
        direction: 'vertical',
        // 一定要这个参数 是这个参数才支持内容并排在一起滑动
        slidesPerView: 'auto',
        // 为了添加惯性 用力滑一次性滑动距离很长
        freeMode: true,
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
        // 是否支持鼠标滚轮 意义不大手机没鼠标滚轮
        mousewheel: true,

    });
    var swiper2 = new Swiper('.category-right .swiper-container',{
        // 垂直滑动是垂直方向
        direction: 'vertical',
        // 一定要这个参数 是这个参数才支持内容并排在一起滑动
        slidesPerView: 'auto',
        // 为了添加惯性 用力滑一次性滑动距离很长
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        // 是否支持鼠标滚轮 意义不大手机没鼠标滚轮
        mousewheel: true,

    });

    //盒子高度
    var parentHeight = document.querySelector('.swiper-container').offsetHeight;
    //内容高度
    var childrenHeight = document.querySelector('.swiper-slide').offsetHeight;
    //最小差值
    var minTranslateY = parentHeight - childrenHeight;
    //给左侧swiper-wrapper元素设置这个位移 使用3d位移 transform: translate3d(0px, 0px, 0px);
    var swiperWrapper = document.querySelector('.swiper-wrapper');
    
    //给每一个li添加点击事件
    var liList = document.querySelectorAll('.category-left li');
    for(var i = 0;i < liList.length; i++){
        //闭包
        (function(index){
            liList[i].addEventListener('click',function(){
                //通过索引计算位移
                var translateY = -index * this.offsetHeight;
                console.log(translateY);
                //判断位移是否大于最小差值
                translateY = translateY < minTranslateY ? minTranslateY : translateY;
                swiperWrapper.style.transform  = "translate3d(0,"+translateY+"px,0)";
                swiperWrapper.style.transition = "all .3s";
                for(var j = 0; j < liList.length; j++){
                    liList[j].classList.remove('active');
                }
                this.classList.add('active');
            });
        }(i))
    }
}(window));