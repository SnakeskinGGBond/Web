window.onload = function () {
	var username = document.getElementById('username');
	username.onkeydown = function (event) {
		//获取键值
		//回车的键值:13  esc的键值:27
		//对于键盘事件对象属性来说,都有keyCode属性来获取键值
		if (event.keyCode === 13) {
			alert("正在验证...")
		}

	}
}