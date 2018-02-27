var msg  ='<p><b>page title : </b>' +document.title + '<br>';
msg+ = '<b>Page address: </b> '+ document.URL + '<br>';
msg += '<b> Last Modified: </b>' + document.lastModified + '</p>';

var el = document.getElementById('footer');
el.innerHTML = msg;
