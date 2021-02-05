function ajax(lvl,n,i)
{
    var xhr=null;
 	var file,line;
 	
    if (window.XMLHttpRequest) { 
        xhr = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) 
    {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
	// ouvrir le fichier 
    xhr.open("GET", "data"+lvl+"/"+n+".file", false);
    xhr.send(null);
 
 	file = xhr.responseText;
 	line = file.split("\n");
    return line[i];
    
}
