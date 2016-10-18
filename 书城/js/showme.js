function showme(obj){
	/*document.getElementById("hpn").style.display="block";
	document.getElementById("showhref").href="javascript:hideme();"
	document.getElementById("showhref").innerHTML="收起";*/
	var x = obj.parentNode.nextSibling;
	if (x.nodeType != 1) {
                x = x.nextSibling;
            }
            x.style.display = "block";
            obj.parentNode.style.display = "none";
}

