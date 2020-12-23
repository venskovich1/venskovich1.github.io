var currentTime = new Date();
var dd = String(currentTime.getDate()).padStart(2, '0');
var mm = String(currentTime.getMonth() + 1).padStart(2, '0');
var yyyy = currentTime.getFullYear();

currentTime = mm + '/' + dd + '/' + yyyy;
document.write("<div class=\"date\">" + currentTime + "</div>")