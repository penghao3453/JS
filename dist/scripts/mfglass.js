
   

		




		require(["../scripts/config.js"], function() {
			require(["jquery","cookie"], function($,cookie) {
				$(function() {       
					//读取cookie
					var goods=JSON.parse($.cookie("goods"))

					$.ajax({
						url: "/goods/?category=1074&offset=1&_=1545295819930",
						success:function(data){

							var str2 = ""
							var str3 = ""
							var bigCursor="";
							var jsondata = JSON.parse(data)
							console.log(jsondata)
							$.each(goods,function(key,item){

								$.each(jsondata.data,function(index,value){
								  if(item.id == value.id){
								  str2 += `
								  <div class="smallImg" style="background-image:url(${value.big_pic});">						
								  <div class="smallCursor"></div>								
								  `
								  $(".g-t-l-b").append(str2)

								  bigCursor +=`<img class="bigImg" src="${value.big_pic}"/>`
								  
								  $(".bigCursor").append(bigCursor)
								  
								  str3 += `
								  <h3>${value.title}</h3>
             
								  <div class="g-t-r-t">
									  <span class="s1">活动价</span><span class="s2">${value.discount_price}</span><br>
									  <span class="s1">津贴</span><a href="">领津贴每满300减15  去领取 ></a><br>
									  <span class="s1">限制</span><span>特价商品不可与优惠券叠加使用</span><br>
									  <span class="s1">积分</span><span>购买最高得208积分</span>
									  <div class="fuwu">
										  <p class="f-l">服务</p>
										  <div class="f-r">
											  <span>·不支持30天无忧退换货</span>
											  <span>·48小时快速退款</span><br>
											  <span>·国内部分地区无法配送</span>
											  <span>·满88元免邮费</span>
											  
										  </div>
									  </div>
								  </div>
								 <div class="g-t-r-b">
									 <a href="cart.html" class="buy">立刻购买</a>
									 <a href="cart.html" class="cart" id="${value.id}">加入购物车</a>
								 </div> `
								  $(".g-t-r").append(str3)
                                 
								  }
							    
								})    
							  }) 
						}
					})
					$(".g-t-r").on("click",".cart",function(){
						//获取ID
						var id = $(this).attr("id")
						
						console.log(id)

						//存cookie
			//第一次存cookie，没有数据,创建数组
			
			shoppingCart=JSON.parse($.cookie("shoppingCart"))||[]
			if(shoppingCart.length<1){
				shoppingCart.push({
					id:id,
					num:1
				})
			}else{			//有数据
				var onOff=true;
				$.each(shoppingCart,function(index,value){
					if(value.id==id){		//如果发现数据存在，就是老数据，数量++
						shoppingCart[index].num+=1
						onOff=false;
					}
				})
				if(onOff){//新数据
					shoppingCart.push({
						id:id,
						num:1
					
					})
				}
			}
			$.cookie("shoppingCart",JSON.stringify(shoppingCart),{expires:14})
				console.log(JSON.parse($.cookie("shoppingCart")))
				
			})
			//计算smallCursor的真实大小
					// 小方块的宽 =====  大方块的宽 / 大图片的宽 * 小图片的宽
					$(".smallCursor").width($(".bigCursor").width() / $(".bigImg").width() * $(".smallImg").width()-50);
					$(".smallCursor").height($(".bigCursor").height() / $(".bigImg").height() * $(".smallImg").height()-50);

					//大图小图的比例
					var scale = parseInt($(".bigImg").height() / $(".smallImg").height());
					
					
					//鼠标滑入此处用mousemove拿到e的坐标   ;滑出效果
					$(".imgbox").on("mousemove mouseout", ".smallImg", function(e) {
						if(e.type == "mousemove") {
							$(".smallCursor").show();
							$(".bigImg").show()
							
							var _left = e.pageX - $(this).offset().left - $(".smallCursor").width() / 2;
							

							var _top = e.pageY - $(this).offset().top - $(".smallCursor").height() / 2;
							$(".smallCursor").css({
								left: Math.min(Math.max(0, _left), $(".smallImg").width() - $(".smallCursor").width()),

								top: Math.min(Math.max(0, _top), $(".smallImg").height() - $(".smallCursor").height())
							})
							$(".bigImg").css({
								left: -$(".smallCursor").position().left * scale,
								top: -$(".smallCursor").position().top * scale
							})
						} else if(e.type == "mouseout") {
							$(".smallCursor").hide();
							$(".bigImg").hide()
						}
					})


				})
			})
		})


