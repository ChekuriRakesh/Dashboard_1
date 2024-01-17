function getTrainingStatus() {
    $.get(xmlFolder + "TrainingStatusLink.xml").success(getTrainingStatusCompleted).error(getTrainingStatusFailed);
}

function getTrainingStatusCompleted(data) {
    var $TrainingStatusLinks = $(data).find('TrainingStatusLinks').find('TrainingStatusLink')
    $TrainingStatusLinks.each(function(index, value) {
        $TrainingStatusLink = $(value);
        var _image = $TrainingStatusLink.find('image').text();
        var imagePath = imagesFolder + _image;
        var _title = $TrainingStatusLink.find('title').text();
        var _description = $TrainingStatusLink.find('description').text();

        $('.TrainingStatusLink ').append('<div class="col-md-4" id="block"> <div class="col-md-3"><img class="image" src="' + imagePath + '" alt="Los Angeles" ></div><div class="col-md-9"><h3 class="titles">' + _title + '</h3> <p class="description">' + _description + '</p></div></div>')
    })
}

function getTrainingStatusFailed() {
    document.write('Xml not found');
    console.log('Banner xml loading failed or path not found');
}