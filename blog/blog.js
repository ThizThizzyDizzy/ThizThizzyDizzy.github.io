const urlParams = new URLSearchParams(window.location.search);
var xmlhttp;
if(window.XMLHttpRequest)xmlhttp = new XMLHttpRequest();
else xmlhttp = new ActiveXObjefct("Microsoft.XMLHTTP");
var path = window.location.pathname.split("/").pop().replace(".html", "");
xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState===4 && xmlhttp.status===200){
        var obj = JSON.parse(xmlhttp.responseText);
        for(let entry of obj.entries){
            if(entry.path===path){
                document.querySelector("#title").innerHTML = entry.title;
                document.querySelector("#date-created").innerHTML = entry.created;
                document.querySelector("#date-modified").innerHTML = entry.modified;
            }
        }
    }
};
xmlhttp.open("GET", "index.json", true);
xmlhttp.send();