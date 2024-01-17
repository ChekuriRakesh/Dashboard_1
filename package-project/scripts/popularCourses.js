function getPopularCourse() {
    $.get(xmlFolder + "PopularCourses.xml").success(getPopularCourseCompleted).error(getPopularCourseFailed);
}

function getPopularCourseCompleted(data) {
    var $PopularCourses = $(data).find('PopularCourses').find('PopularCourse');
    var $PopularCourseHeading = $(data).find('PopularCourseHeading').text();
    $(' #panel-heading').append('<h5 class="heading"><b>' + $PopularCourseHeading + '</b></h5>')
    $PopularCourses.each(function(index, value) {
        $PopularCourse = $(value);
        var _image = $PopularCourse.find('image').text();
        var imagePath = imagesFolder + _image;
        var _title = $PopularCourse.find('title').text();
        var _description = $PopularCourse.find('description').text();
        var _message = $PopularCourse.find('message').text();
        var _icon = $PopularCourse.find('icon').text();
        var _number = $PopularCourse.find('number').text();

        $('.PopularCourses .panel-body').append('<div class="col-md-6"><div class=" block col-md-12 pad-null">\
 <div class="col-md-3 img-div pad-null">\
 <img src="' + imagePath + '" class="img-circle"  alt="Los Angeles" width="100px">\
 </div>\
<div class=" text-div col-md-9 pad-null">\
<div><h4 class=" title pad-null  col-md-12">' + _title + '</h4></div>\
<div><p class="description  pad-null col-md-12">' + _description + '</p></div>\
<div class="col-md-9 footer-text"><div><p class="message  pad-null ">' + _message + '</p></div>\
<div class="icon-num">\
<div><img class="icon-image pad-null"  src="' + imagesFolder + _icon + '" alt="Los Angeles"></div>\
<div><p class="number col-md-3 pad-null">' + _number + '</p></div></div>\
 </div>\
</div>\
  </div></div>')
    })



}

function getPopularCourseFailed() {
    document.write('Xml not found');
    console.log('Banner xml loading failed or path not found');
}