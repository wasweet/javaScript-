//定义一个变量 用来保存定时器标识
			//var timer;
			
			//封装一个移动可以向左右移动div的函数
			//参数：obj：要执行的对象
			//	   speed: 速度
			//     target：执行动画的目标位置
			//     attr: 要执行的动画的样式 left top width
			//     callBack: 回调函数，这个函数将会在动画执行完毕后执行
			
			function move(obj, speed, target, attr, callBack) {
				//点击按钮时 向关闭上一个定时器
				clearInterval(obj.timer);
				
				//获取元素目前位置
				var current = parseInt(getStyle(obj, attr));
				
				//判断speed的方向
				if(current > target) {
					//此时speed为负值
					speed = -speed;
				}
				
				//开启定时器,执行动画效果
				obj.timer = setInterval(function() {
					//获取box1 原来的left值
					var oldValue = parseInt(getStyle(obj, attr));
					//console.log(oldValue);
			
					//在旧值的基础上增加
					var newValue = oldValue + speed;
			
					if (((speed < 0 && newValue <target)) || (speed > 0 && newValue > target)) {
						newValue = target;
					}
			
					//将新值设置给box1
					obj.style[attr] = newValue + "px";
			
					//当移动到800px时，停止
					if (newValue == target) {
						clearInterval(obj.timer);
						
						//动画执行结束后，执行回调函数
						callBack && callBack(); //有就传 没有 就不传
					}
				}, 30)
			}
			
			function getStyle(obj, name) {
				if (window.getComputedStyle) {
					return getComputedStyle(obj, null)[name];
				} else {
					return obj.currentStyle[name];
				}
			};
			