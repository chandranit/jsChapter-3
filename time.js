var today = new Date();
var year = today.getFullYear();
var est = new Date('Apr 16, 1996 15:45:55');

var difference = today.getTime() - est.getTime();
difference = (difference / 31559600000);

var msg = document,getElementById('message');
msg.textContent = Math.floor(difference) + 'years of online travel advice';
