var xhr =new XMLHttpRequest();
xhr.onreadystatechange() = function(){
    if (this.readystate == 4 && this.status == 400 ) {
        document.getElementById("data").innerHTML = this.responseText
    }   
}