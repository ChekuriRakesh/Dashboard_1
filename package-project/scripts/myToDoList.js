function getMyToDoList() {
    $.get(xmlFolder + "MyToDoLists.xml").success(getMyToDoListCompleted).error(getMyToDoListFailed);
}

function getMyToDoListCompleted(data) {
    var $MyToDoLists = $(data).find('MyToDoLists').find('MyToDoList');
    var $MyToDoListHeading = $(data).find('MyToDoListHeading').text();
    $('#MyToDoList-panel-heading').append('<h5 class="heading"><b>' + $MyToDoListHeading + '</b></h5>')
    $MyToDoLists.each(function(index, value) {
        $MyToDoList = $(value);
        var _tag = $MyToDoList.find('tag').text();
        var _content = $MyToDoList.find('content').text();
        var _contentText = $MyToDoList.find('contentText').text();
        var _date = $MyToDoList.find('date').text();
        var _dateValue = $MyToDoList.find('dateValue').text();
        var _button = $MyToDoList.find('button').text();
        var _image = $MyToDoList.find('image').text();
        var imagePath = imagesFolder + _image;
        var _title = $MyToDoList.find('title').text();

        $('.MyToDoLists .panel-body').append('<div class="col-md-4  list-block" >\
<div class= "col-md-12 list">\
<div class= "col-md-12 ">\
<p class="tag" id="pointer"> ' + _tag + '</p>\
  </div>\
  <div class="col-md-3" id="img-block"><img src="' + imagePath + '"   alt="Los Angeles" >\</div>\
  <div class="col-md-9"><h4>' + _title + '</h4>\
  <div class="col-md-6">\
  <p>' + _content + '</p>\
  <p>' + _date + '</p>\
  </div>\
  <div class="col-md-6">\
  <p>' + _contentText + '</p>\
  <p>' + _dateValue + '</p>\
 </div>\
 <button class="btn">' + _button + '</button>\
  </div>\
  </div></div>')
    })
    var tag = $('.tag').length



    for (var i = 0; i < tag; i++) {

        var text = document.getElementsByClassName("tag")[i].innerText;
        if (text == "InProgress") {
            document.getElementsByClassName("tag")[i].classList.add("inprogress")
        } else if (text == "Registered") {
            document.getElementsByClassName("tag")[i].classList.add("registered")
        } else if (text == "gress") {
            document.getElementsByClassName("tag")[i].classList.add("registered")
        }
    }
}

function getMyToDoListFailed() {
    document.write('Xml not found');
    console.log('Banner xml loading failed or path not found');
}