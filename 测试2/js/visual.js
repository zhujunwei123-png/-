window.addEventListener('load', function () {
  function loadTwoLine () {
    var myChart = echarts.init(document.querySelector('.line'));
    // 显示标题，图例和空的坐标轴
    myChart.setOption({
      color: ['#487FD3'],
      title: {
        text: '异步数据加载示例'
      },
      grid: {//修改图表大小
        left: '0%',
        top: "10px",
        right: '0%',
        bottom: '4%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['进件', '办结']
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: {
        type: 'category',
        boundaryGap: false, //取消左侧的间距
        data: [],
        axisLabel: {
          textStyle: {
            color: 'black',//文本颜色
            fontSize: 12
          }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        }
      },
      yAxis: {
        type: 'value',
        splitLine: { show: false },//去除网格线
        name: '',
        axisLabel: {
          formatter: '{value}  人',
          textStyle: {
            type: "value",
            color: 'black',//文本颜色
            fontSize: 12,

          }
        },
      },

      axisTick: {
        show: false,
        alignWithLabel: true
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      },

      // 修改分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      },

      series: [{
        name: '进件',
        type: 'line',
        symbol: 'emptydiamond',    //设置折线图中表示每个坐标点的符号 emptycircle：空心圆；emptyrect：空心矩形；circle：实心圆；emptydiamond：菱形
        data: [],
        itemStyle: {
          normal: {
            label: {
              show: true,

            }
          }
        },

      },
      {
        name: '办结',
        type: 'line',
        symbol: 'emptydiamond',    //设置折线图中表示每个坐标点的符号 emptycircle：空心圆；emptyrect：空心矩形；circle：实心圆；emptydiamond：菱形
        data: []
      }]
    });



    myChart.showLoading();    //数据加载完之前先显示一段简单的loading动画
    var names = [];    //类别数组（实际用来盛放X轴坐标值）    
    var series1 = [];
    // var series2 = [];
    $.ajax({
      type: 'get',
      url: './js/2.json',//请求数据的地址
      dataType: "json",        //返回数据形式为json
      success: function (result) {
        //请求成功时执行该函数内容，result即为服务器返回的json对象           
        $.each(result.jinJian, function (index, item) {
          names.push(item.AREA);    //挨个取出类别并填入类别数组
          series1.push(item.LANDNUM);
        });
        // $.each(result.banJie, function (index, item) {
        //   series2.push(item.LANDNUM);
        // });
        myChart.hideLoading();    //隐藏加载动画
        myChart.setOption({        //加载数据图表
          xAxis: {
            data: names
          },
          series: [{
            data: series1,
            smooth: true,
            symbol: 'circle',

            areaStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                  },
                  {
                    offset: 0.8,
                    color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            },
          },
          {
            // data: series2
          }]
        });
      },
      error: function (errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        myChart.hideLoading();
      }
    });
  };
  loadTwoLine();


  //饼状图
  function loadOneColumn () {
    var myChart = echarts.init(document.querySelector('.piea'));
    // 显示标题，图例和空的坐标轴
    myChart.setOption({
      color: ['#C98622', '#BE3330', '#273C47', '#609EA6', '#D58265', '#91C8AE', '#759F83'],//饼图颜色
      title: {
        text: '信息发布排行',
        subtext: '纯属虚构',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: []
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: {
            show: true,
            type: ['pie', 'funnel'],
            option: {
              funnel: {
                x: '25%',
                width: '50%',
                funnelAlign: 'left',
                max: 1548
              }
            }
          },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [{
        name: '发布排行',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: []
      }]
    });
    myChart.showLoading();    //数据加载完之前先显示一段简单的loading动画
    var names = [];    //类别数组（用于存放饼图的类别）
    var brower = [];
    $.ajax({
      type: 'get',
      url: './js/1.json',//请求数据的地址
      dataType: "json",        //返回数据形式为json
      success: function (result) {
        //请求成功时执行该函数内容，result即为服务器返回的json对象
        $.each(result.list, function (index, item) {
          names.push(item.department);    //挨个取出类别并填入类别数组 
          brower.push({
            name: item.department,
            value: item.num
          });
        });
        myChart.hideLoading();    //隐藏加载动画
        myChart.setOption({        //加载数据图表                
          legend: {
            data: names
          },
          series: [{
            data: brower
          }]
        });
      },
      error: function (errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        myChart.hideLoading();
      }
    });
  };
  loadOneColumn();


  //柱形图
  function loadOneColumn2 () {


    var myChart = echarts.init(document.querySelector('.bar'));
    // 显示标题，图例和空的坐标轴
    myChart.setOption({
      color: ['#487FD3'],
      title: {
        text: '异步数据加载示例'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['发布排行']
      },
      xAxis: {
        data: []
      },
      yAxis: {
        splitLine: { show: false },//去除网格线
        name: '',

      },
      series: [{
        barWidth: "30px",
        name: '发布排行',
        type: 'bar',
        itemStyle: {
          normal: {
            label: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#333'
              }
            }
          }
        },
        data: []
      }]
    });


    myChart.showLoading(); //数据加载完之前先显示一段简单的loading动画


    var names = []; //类别数组（实际用来盛放X轴坐标值）
    var nums = []; //销量数组（实际用来盛放Y坐标值）


    $.ajax({
      type: 'get',
      url: './js/3.json',//请求数据的地址
      dataType: "json", //返回数据形式为json
      success: function (result) {
        //请求成功时执行该函数内容，result即为服务器返回的json对象
        $.each(result.list, function (index, item) {
          names.push(item.department); //挨个取出类别并填入类别数组
          nums.push(item.num); //挨个取出销量并填入销量数组
        });


        myChart.hideLoading(); //隐藏加载动画
        myChart.setOption({ //加载数据图表
          xAxis: {
            data: names
          },
          series: [{
            // 根据名字对应到相应的系列
            name: '发布排行', //显示在上部的标题
            data: nums
          }]
        });
      },
      error: function (errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        myChart.hideLoading();
      }
    });
  };
  loadOneColumn2();
});

