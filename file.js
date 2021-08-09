var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://reqres.in/api/users?page=2", true);
xmlhttp.send();

xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4) {  // 4 = "DONE" state "	The request has been processed and the response is ready"
        if(this.status === 200) { //200 = "OK" state "	The request was successfully received, understood, and accepted"
            var data = JSON.parse(xmlhttp.responseText).data;
            var table = document.getElementById('table');
            data.forEach(function(object) {
                var tr = document.createElement('tr');
                tr.innerHTML = '<td>' + object.id + '</td>' + 
                                 '<td>' + object.email + '</td>' +
                                 '<td>' + object.first_name + '</td>' +
                                 '<td>' + object.last_name + '</td>'+
                                 '<td><img src="' + object.avatar +'"/>'+ '</td>';
                table.appendChild(tr);
            });
        }
        else{    //if  this.state != 200 	The server failed to find anything matching the request"
            alert('Error: ' + this.status);
        }          
    }
};
