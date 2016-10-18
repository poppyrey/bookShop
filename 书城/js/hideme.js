function hideme(obj){
	/*document.getElementById("hpn").style.display="none";
	document.getElementById("showhref").href="javascript:showme();"
	document.getElementById("showhref").innerHTML="read more";*/
	obj.parentNode.parentNode.style.display = "none";
            var x = obj.parentNode.parentNode.previousSibling;
            if (x.nodeType != 1) {
                x = x.previousSibling;
            }
            x.style.display = "block";
}