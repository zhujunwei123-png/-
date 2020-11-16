(function () {//上导航条
  window.addEventListener('load', function () {
    var img = document.querySelector('.ts');
    var head = document.querySelector('.main_list');

    head.addEventListener('mouseover', function () {
      img.style.display = 'block';

    })
    head.addEventListener('mouseout', function () {
      img.style.display = 'none';

    })

    head.addEventListener('mousemove', move)
    function move (e) {

      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      var imgX = x - img.offsetWidth / 2;
      var imgY = y - img.offsetHeight / 2;
      var imgMax = head.offsetWidth - img.offsetWidth;
      var imgMay = head.offsetHeight - img.offsetHeight;
      if (imgX <= 0) {
        imgX = 0;
      } else if (imgX >= imgMax) {
        imgX = imgMax;
      }
      if (imgY <= 0) {
        imgY = 0;
      } else if (imgY >= imgMay) {
        imgY = imgMay;
      }
      img.style.left = imgX + 'px';
      img.style.top = imgY + 'px';


    }
    var flag = 0;
    head.addEventListener('click', function () {
      if (flag == 0) {
        head.removeEventListener('mousemove', move);
        flag = 1;
      } else {
        head.addEventListener('mousemove', move);
        flag = 0;
      }

    })
  })
})()
  ;
(function () {
  window.addEventListener('load', function () {
    var img = document.querySelector('.ts1');////下导航条
    var head = document.querySelector('.footer');

    head.addEventListener('mouseover', function () {
      img.style.display = 'block';

    })
    head.addEventListener('mouseout', function () {
      img.style.display = 'none';

    })

    head.addEventListener('mousemove', move)
    function move (e) {

      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      var imgX = x - img.offsetWidth / 2;
      var imgY = y - img.offsetHeight / 2;
      var imgMax = head.offsetWidth - img.offsetWidth;
      var imgMay = head.offsetHeight - img.offsetHeight;
      if (imgX <= 0) {
        imgX = 0;
      } else if (imgX >= imgMax) {
        imgX = imgMax;
      }
      if (imgY <= 0) {
        imgY = 0;
      } else if (imgY >= imgMay) {
        imgY = imgMay;
      }
      img.style.left = imgX + 'px';
      img.style.top = imgY + 'px';


    }
    var flag = 0;
    head.addEventListener('click', function () {
      if (flag == 0) {
        head.removeEventListener('mousemove', move);
        flag = 1;
      } else {
        head.addEventListener('mousemove', move);
        flag = 0;
      }

    })
  })
})()

