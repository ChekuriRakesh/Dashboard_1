function getBanner() {
    $.get(xmlFolder + "Banner.xml").success(getBannerCompleted).error(getBannerFailed);
}

function getBannerCompleted(data) {

    var $banners = $(data).find('Banners').find('Banner');
    $banners.each(function(index, value) {
        var $banner = $(value);
        var image = $banner.find('Image').text();
        var imagePath = imagesFolder + image;
        var title = $banner.find('Title').text();
        var description = $banner.find('Description').text();

        var isActive = index == 0 ? 'active' : '';

        $('#bannerCarousel .carousel-inner').append('<div class="item ' + isActive + '">\
                                                    <img class="img" src="' + imagePath + '" alt="Los Angeles" width="100%" height="100%">\
                                                    <div class=" carousel-caption">\
                                                    <h3>' + title + '</h3>\
                                                    <p>' + description + '</p>\
                                                  </div></div>');

        $('#bannerCarousel .carousel-indicators').append('<li data-target="#bannerCarousel" data-slide-to="' + index + '" class="' + isActive + '"></li>');


    })
}

function getBannerFailed() {
    document.write('Xml not found');
    console.log('Banner xml loading failed or path not found');
}