function fileChange(){
var file = document.getElementById('input_img');
var form = new FormData();
form.append("image", file.files[0])

var settings = {
  "url": "https://api.imgbb.com/1/upload?key=8d5867a9512390fb5e5dc97839aa36f6",
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};


$.ajax(settings).done(function (response) {
  console.log(response);
  var jx = JSON.parse(response);
  console.log(jx.data.url);


});
