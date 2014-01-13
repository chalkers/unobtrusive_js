var anchors = document.getElementsByClassName("new_window");
for (var i=0; i < anchors.length; i++) {
	anchors[i].onclick = function() {
		window.open(this.href);
		return false;
	};
};