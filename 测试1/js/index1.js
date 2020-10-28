(function () {




  var myChart = echarts.init(document.querySelector(".line_chart"));
  var option = {
    title: {
      left: 'center',
      text: '曲线图数据展示',
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      top: "0%",

      textStyle: {

        fontSize: "12"
      }
    },

    grid: {//修改图表大小
      left: '0%',
      top: "10px",
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        // x轴更换数据
        data: [
          "09/27", "09/28", "09/29", "09/30", "10/01", "10/02", "10/03", "10/04", "10/05", "10/06", "10/07", "10/08", "10/09", "10/10", "10/11", "10/12", "10/13", "10/14", "10/15", "10/16", "10/17", "10/18", "10/19", "10/20", "10/21", "10/22", "10/23", "10/24", "10/25", "10/26"
        ],
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12

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
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          formatter: '{value}  人',
          textStyle: {
            type: "value",
            color: 'black',//文本颜色
            fontSize: 12,

          }
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
        }
      }
    ],
    series: [

      {

        type: "line",
        smooth: true,
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },

        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: "2"
        },
        // 填充颜色设置
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
        // 设置拐点
        // symbol: "circle",
        // 拐点大小
        // symbolSize: 8,
        // 开始不显示拐点， 鼠标经过显示
        // showSymbol: true,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [
          9835, 9850, 6314, 8908, 7496, 7266, 5756, 8784, 985, 2166, 5826, 1042, 7425, 4409, 1182, 2470, 8114, 1995, 8453, 3305, 3276, 641, 822, 3847, 6348, 2387, 9058, 6476, 6760, 657
        ]
      },

    ]
  };
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//柱形图模块1
(function () {
  //实例化对象
  var myChart = echarts.init(document.querySelector(".ab"));
  //2.指定配置项和数据
  option = {
    title: {
      text: '柱状图数据展示',

      left: 'center'
    },
    color: ["#2f89cf"],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: "shadow"       // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {//修改图表大小
      left: '0%',
      top: "10px",
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度标签 相关样式
        axisLabel: {
          textStyle: {

          }
        },
        //不显示x坐标轴的样式
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {

          textStyle: {


          }
        },
        //y轴的线条改为了2像素
        axisLine: {

          lineStyle: {

          }


        },
        //y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        data: [8, 11, 13, 9, 7, 10, 5],
        itemStyle: {
          //修改柱子圆角
          barBorderRadius: 5
        }

      }
    ]
  };
  //3.把配置项给实例对象
  myChart.setOption(option);
  //4.让图标跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

(function () {
  var myChart = echarts.init(document.querySelector(".aa"));
  option = {
    title: {
      text: '饼状图数据展示',

      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

















  //3.把配置项给实例对象
  myChart.setOption(option);
  //4.让图标跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });





})()
