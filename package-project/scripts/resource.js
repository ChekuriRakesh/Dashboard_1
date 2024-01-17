function getResource() {
    $.get(xmlFolder + "Resources.xml").success(getResourceCompleted).error(getResourceFailed);
}

function getResourceCompleted(data) {
    var $Resources = $(data).find('Resources').find('Resource');
    var $ResourceHeading = $(data).find('ResourceHeading').text();
    $('#Resource-panel-heading').append('<h5 class="heading"><b>' + $ResourceHeading + '</b></h5>')
    $Resources.each(function(index, value) {
        $Resource = $(value);
        var _image = $Resource.find('image').text();
        var imagePath = imagesFolder + _image;
        var _title = $Resource.find('title').text();
        $('.Resources .panel-body').append('<div class="col-md-4 pad-null" >\
<div class="icon-block col-md-12 pad-null">\
 <div class="Resourceimg-div  pad-null">\
 <img class="pad-null block-image img-circle"  src="' + imagePath + '" alt="Los Angeles">\
 <h4 class=" pad-null  icon-title ">' + _title + '</h4>\
 </div>\
  </div></div>')
    })
}

function getResourceFailed() {
    document.write('Xml not found');
    console.log('Banner xml loading failed or path not found');
}