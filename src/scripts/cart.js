require(["../scripts/config.js"], function() {
    require(["jquery","cookie"], function($,cookie) {
        $(function() {       
            // 读取cookie
            var shoppingCart=JSON.parse($.cookie("shoppingCart"))

            $.ajax({
                url: "/goods/?category=1074&offset=1&_=1545295819930",
                success:function(data){

                    var str5 = ""
                    var jsondata = JSON.parse(data)
							console.log(jsondata)
							$.each(shoppingCart,function(key,item){
                                console.log(item.id)
								$.each(jsondata.data,function(index,value){
                                    console.log(value.id)
								  if(item.id == value.id){
                                     
                                  str5 = `
                                    <input type="checkbox" name="" class="ckb2">
                                    <img src="${value.big_pic}" alt="" class="gimg1">
                                    <p class="p7">${value.title}</p>
                                    <p class="p8">${value.discount_price}</p>
                                    <div class="ct2-c-1">
                                            <p class="btn3">-</p><input type="text" class="txt3" value="${item.num}" placeholder="1"><p class="btn4">+</p>
                                        </div>
                                        <p class="p9"></p>
                                        <a href="" class="del">删除</a>
                                  `
                                  $(".ct2-c").html(str5)
                                  }
                                })
                            }) 


                }
            })

        })
    })
})
