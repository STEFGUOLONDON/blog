$(function () {
   $(".navbar-nav li").click(function () {
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
   });
   //给搜索框增加一个点击出现搜索标志的图标
   $(".raw .form-control").click(function () {
      $(this).addClass("blog-search");
      return false;
   });
   $("html").click(function () {
      $(".raw .form-control").removeClass("blog-search");
   });


   //赞赏界面的显示
   $(".detail-good").click(function () {
      $(".good-img").toggle()
   })

   //分类页面的标签点击的效果
   $(".catalog-bt button").click(function () {
      $(this).siblings().removeClass("do-click");
      $(this).addClass("do-click")
   });




   //manage上一页下一页的模拟操作
   const bolgData = [
      {
         title: '用户故事',
         type: '学习日志1',
         updata: '2017-10-04 21:08:34',
      },
      {
         title: '用户故事',
         type: '学习日志2',
         updata: '2017-10-04 21:08:34',
      },
      {
         title: '你真正理解什么是财富自由吗',
         type: '学习日志3',
         updata: '2018-10-04 21:08:34',
      },
      {
         title: '失败要趁早',
         type: '学习日志4',
         updata: '2019-10-04 21:08:34',
      },
      {
         title: '关于可以练习的清单',
         type: '学习日志5',
         updata: '2020-10-04 21:08:34',
      },
      {
         title: 'javascript入门教程',
         type: '学习日志6',
         updata: '2021-10-04 21:08:34',
      },
      {
         title: '用户故事',
         type: '学习日志1',
         updata: '2017-10-04 21:08:34',
      },
      {
         title: '用户故事',
         type: '学习日志2',
         updata: '2017-10-04 21:08:34',
      },
      {
         title: '你真正理解什么是财富自由吗',
         type: '学习日志3',
         updata: '2018-10-04 21:08:34',
      },
      {
         title: '失败要趁早',
         type: '学习日志4',
         updata: '2019-10-04 21:08:34',
      },
      {
         title: '关于可以练习的清单',
         type: '学习日志5',
         updata: '2020-10-04 21:08:34',
      },
      {
         title: 'javascript入门教程',
         type: '学习日志6',
         updata: '2021-10-04 21:08:34',
      },
      {
         title: '用户故事',
         type: '学习日志1',
         updata: '2017-10-04 21:08:34',
      },
      {
         title: '用户故事',
         type: '学习日志2',
         updata: '2017-10-04 21:08:34',
      },
      {
         title: '你真正理解什么是财富自由吗',
         type: '学习日志3',
         updata: '2018-10-04 21:08:34',
      },
      {
         title: '失败要趁早',
         type: '学习日志4',
         updata: '2019-10-04 21:08:34',
      },
      {
         title: '关于可以练习的清单',
         type: '学习日志5',
         updata: '2020-10-04 21:08:34',
      },
      {
         title: 'javascript入门教程',
         type: '学习日志6',
         updata: '2021-10-04 21:08:34',
      },
      {
         title: '用户故事',
         type: '学习日志1',
         updata: '2017-10-04 21:08:34',
      },
      {
         title: '用户故事',
         type: '学习日志2',
         updata: '2017-10-04 21:08:34',
      },
      {
         title: '你真正理解什么是财富自由吗',
         type: '学习日志3',
         updata: '2018-10-04 21:08:34',
      },
      {
         title: '失败要趁早',
         type: '学习日志4',
         updata: '2019-10-04 21:08:34',
      },
      {
         title: '关于可以练习的清单',
         type: '学习日志5',
         updata: '2020-10-04 21:08:34',
      },
      {
         title: 'javascript入门教程',
         type: '学习日志6',
         updata: '2021-10-04 21:08:34',
      },
      {
         title: '用户故事',
         type: '学习日志1',
         updata: '2017-10-04 21:08:34',
      },
      {
         title: '用户故事',
         type: '学习日志2',
         updata: '2017-10-04 21:08:34',
      },
      {
         title: '你真正理解什么是财富自由吗',
         type: '学习日志3',
         updata: '2018-10-04 21:08:34',
      },
      {
         title: '失败要趁早',
         type: '学习日志4',
         updata: '2019-10-04 21:08:34',
      },
      {
         title: '关于可以练习的清单',
         type: '学习日志5',
         updata: '2020-10-04 21:08:34',
      },
      {
         title: 'javascript入门教程',
         type: '学习日志6',
         updata: '2021-10-04 21:08:34',
      },
      {
         title: '用户故事',
         type: '学习日志1',
         updata: '2017-10-04 21:08:34',
      },
      {
         title: '用户故事',
         type: '学习日志2',
         updata: '2017-10-04 21:08:34',
      },
      {
         title: '你真正理解什么是财富自由吗',
         type: '学习日志3',
         updata: '2018-10-04 21:08:34',
      },
      {
         title: '失败要趁早',
         type: '学习日志4',
         updata: '2019-10-04 21:08:34',
      },
      {
         title: '关于可以练习的清单',
         type: '学习日志5',
         updata: '2020-10-04 21:08:34',
      },
      {
         title: 'javascript入门教程',
         type: '学习日志6',
         updata: '2021-10-04 21:08:34',
      },
      {
         title: '用户故事',
         type: '学习日志1',
         updata: '2017-10-04 21:08:34',
      },
      {
         title: '用户故事',
         type: '学习日志2',
         updata: '2017-10-04 21:08:34',
      },
      {
         title: '你真正理解什么是财富自由吗',
         type: '学习日志3',
         updata: '2018-10-04 21:08:34',
      },
      {
         title: '失败要趁早',
         type: '学习日志4',
         updata: '2019-10-04 21:08:34',
      },
      {
         title: '关于可以练习的清单',
         type: '学习日志5',
         updata: '2020-10-04 21:08:34',
      },
      {
         title: 'javascript入门教程',
         type: '学习日志6',
         updata: '2021-10-04 21:08:34',
      },
      {
         title: '用户故事',
         type: '学习日志1',
         updata: '2017-10-04 21:08:34',
      },
      {
         title: '用户故事',
         type: '学习日志2',
         updata: '2017-10-04 21:08:34',
      },
      {
         title: '你真正理解什么是财富自由吗',
         type: '学习日志3',
         updata: '2018-10-04 21:08:34',
      },
      {
         title: '失败要趁早',
         type: '学习日志4',
         updata: '2019-10-04 21:08:34',
      },
      {
         title: '关于可以练习的清单',
         type: '学习日志5',
         updata: '2020-10-04 21:08:34',
      },
      {
         title: 'javascript入门教程',
         type: '学习日志6',
         updata: '2021-10-04 21:08:34',
      },
      {
         title: '用户故事',
         type: '学习日志1',
         updata: '2017-10-04 21:08:34',
      },
      {
         title: '用户故事',
         type: '学习日志2',
         updata: '2017-10-04 21:08:34',
      },
      {
         title: '你真正理解什么是财富自由吗',
         type: '学习日志3',
         updata: '2018-10-04 21:08:34',
      },
      {
         title: '失败要趁早',
         type: '学习日志4',
         updata: '2019-10-04 21:08:34',
      },
      {
         title: '关于可以练习的清单',
         type: '学习日志5',
         updata: '2020-10-04 21:08:34',
      },
      {
         title: 'javascript入门教程',
         type: '学习日志6',
         updata: '2021-10-04 21:08:34',
      },


   ];

   //后台管理的前一页的点击事件
   $(".manage-prex").click(function () {
      const $tr = $("<tr class=\"manage-tb-body\">\n" +
          "                      <th>用户故事</th>\n" +
          "                      <th>学习日志</th>\n" +
          "                      <th>2020-10-04 21:08:34</th>\n" +
          "                      <th>\n" +
          "                          <button class=\"manage-change\">修改</button>\n" +
          "                          <button class=\"manage-del\">删除</button>\n" +
          "                      </th>\n" +
          "                  </tr>");
      // $(".man-body").append($tr);
      const nowCount = $("#now-count")[0].innerText;
      if (nowCount > 1) {
        $("#now-count")[0].innerText=parseInt(nowCount)-1;
         da(parseInt(nowCount)-2)
      }
      // $("#now-count").text()

   });

   //后台管理的前一页的点击事件
   $(".mange-next").click(function () {
      const nowCount = $("#now-count")[0].innerText;
      const allCount = bolgData.length/3;
      if (nowCount < allCount) {
         $("#now-count")[0].innerHTML=parseInt(nowCount)+1;
         da(parseInt(nowCount))
      }

   });

   function da(i) {
      // console.log($(".manage-tb-body"));
      let tbList = $(".manage-tb-body");
      for (let j = 0; j < tbList.length ; j++) {
         tbList[j].innerHTML = ''
      }
      // tbList.forEach(item => {
      //    console.log(item);
      // });
      for (let j = i; j < i+3; j++) {
         const title = bolgData[i].title;
         const type = bolgData[i].type;
         const time = bolgData[i].updata;
         const $tr = $("<tr class=\"manage-tb-body\">\n" +
             "                      <th>"+title+"</th>\n" +
             "                      <th>"+type+"</th>\n" +
             "                      <th>"+time+"</th>\n" +
             "                      <th>\n" +
             "                          <button class=\"manage-change\">修改</button>\n" +
             "                          <button class=\"manage-del\">删除</button>\n" +
             "                      </th>\n" +
             "                  </tr>");
         $(".man-body").append($tr);
      }
   }


   $(function () {
      $("#all-count").text('/ '+bolgData.length/3);
   });

   //管理后台界面一点击li自动将文字放到上面
   $(".btn-group .dropdown-menu li").click(function () {
      $(this).parent().siblings(".dropdown-toggle")
          .html($(this)[0]
          .innerText+' <span class="caret"></span>')
      // console.log($(this)[0].innerText);
   });


   /**
    * detail的js
    *
    */
   // $("body").click(function () {
   //    $(".detail-index").hide();
   // });

   $(".de-index").click(function () {
      $(".detail-index").toggle();
      return false;
   })

   $('.det-wechat').hover(function () {
      $(".detail-index").hide();
      $('.detail-wechat').fadeToggle()
   })


});