window.addEventListener('load', function () {

  var slideshow = document.querySelector('.slideshow');//获取元素
  var arrowr = document.querySelector('.arrow-r');//右按钮
  var arrowl = document.querySelector('.arrow-l');//左按钮
  var slideshowwidth = slideshow.offsetWidth;
  slideshow.addEventListener('mouseover', function () {
    arrowr.style.display = 'block';
    arrowl.style.display = 'block';
    clearInterval(timei);
  })
  slideshow.addEventListener('mouseout', function () {
    arrowr.style.display = 'none';
    arrowl.style.display = 'none';
    timei = setInterval(function () {
      arrowr.click();
    }, 2000)
  })

  var ul = slideshow.querySelector('ul');
  var ol = slideshow.querySelector('.circle');
  for (var i = 0; i < ul.children.length; i++) {
    var li = document.createElement('li');//创建一个小li
    li.setAttribute('index', i);
    ol.appendChild(li);//插入到ol里面
    li.addEventListener('click', function () {//生成小圆圈的同时直接绑定点击事件
      for (var i = 0; i < ol.children.length; i++) {//干掉所有人 把所有的小li清除current
        ol.children[i].className = ''

      }
      //点击小圆圈 移动ul
      //点击小li ，就拿到小li的索引号
      var index = this.getAttribute('index');
      //留下我自己 当前的小li 设置current类名
      //当我们点击了某个小li,就要把这个小li的索引号给num
      //当我们点击了某个小li,就要把这个小li的索引号给circle
      num = circle = index;
      this.className = 'current';
      animate(ul, -index * slideshowwidth);

    })

  }
  var num = 0;
  var circle = 0;
  var flag = true;//节流阀
  var first = ul.children[0].cloneNode(true);//克隆第三张图片
  ul.appendChild(first);//插进ul里面
  arrowr.addEventListener('click', function () {
    if (flag) {
      flag = false;
      if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
      }

      num++;
      animate(ul, -num * slideshowwidth, function () {
        flag = true;
      });
      //点击右侧小按钮,小圆圈跟随一起变化,可以声明一个变量控制小圆圈的播放
      circle++;
      //如果走到尽头,我们就复原
      if (circle == ol.children.length) {
        circle = 0;
      }
      //先清除其余小圆圈的current类名
      aaa();
    }

  })

  arrowl.addEventListener('click', function () {
    if (flag) {
      flag = false;
      if (num == 0) {
        num = ul.children.length - 1;
        ul.style.left = -num * slideshowwidth + 'px';

      }

      num--;
      animate(ul, -num * slideshowwidth, function () {
        flag = true;
      });
      circle--;
      //如果走到尽头,我们就复原
      if (circle < 0) {
        circle = ol.children.length - 1;
      }
      //先清除其余小圆圈的current类名
      aaa();
    }

  })
  ol.children[0].className = 'current';

  function aaa () {
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = '';
    }
    ol.children[circle].className = 'current';

  }
  //手动调用点击事件
  var timei = setInterval(function () {
    arrowr.click();
  }, 2000)
})