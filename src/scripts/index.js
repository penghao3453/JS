require(["../scripts/config.js"], function() {
	require(["jquery","cookie"], function($,cookie) {
        $(function() {
        //写代码
        $.ajax({
            url: "/goods/?category=1074&offset=1&_=1545295819930",
            success:function(data){
                console.log(data)
                var jsondata = JSON.parse(data)
                console.log(jsondata.data)
                var str1 = ""
                for(var i = 0;i <4; i++ ){
                    str1 +=`<li id="${jsondata.data[i].id}"><a href="goods.html"><img src="${jsondata.data[i].big_pic}" alt="">
                                <p>${jsondata.data[i].title}</p><span>￥${jsondata.data[i].discount_price}</span>
                            </a></li>
                            
                            `
                }
                $(".xps-b").html(str1)
            }
        }) 
        //cookie
        // $("#tab-p2").on("click",".buyitnow",function(){
        //     var id=$(this).parent().parent().attr("index")
            
        //     //第一次存cookie，没有数据,创建数组
				
        //     goods=JSON.parse($.cookie("goods")) || [];
        //     //存cookie之前先删除
        //         goods.shift()
        //         //每次只添加当前存的货号
        //         goods.push({
        //             id:id
        //         })
                
                
        //     $.cookie("goods",JSON.stringify(goods),{expires:7})
            
        //     console.log($.cookie("goods"))
        // })
        $(".xps-b").on("click","li",function(){
            //获取ID
            var id = $(this).attr("id")
            console.log(id)
            //如果cookie是空  就变为空数组
            goods =JSON.parse($.cookie("goods")) ||  []
            //存之前先删除 只存最后一位
            goods.shift()
            goods.push({
                 id:id,
                 num:1
            })
            //存cookie
          $.cookie("goods",JSON.stringify(goods),{expires:14})
          console.log($.cookie("goods"))
        })


        })
    })
})
