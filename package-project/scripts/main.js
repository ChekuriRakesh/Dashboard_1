var pathUrl = $('#customJs').attr('src');
var path = pathUrl.split('scripts')[0];
var xmlFolder = path + "xml/";
var imagesFolder = path + "images/";


$(document).ready(function() {
    initTemplate();
})

function initTemplate() {
    getBanner();
    getTrainingStatus();
    getPopularCourse();
    getResource();
    getMyToDoList();
}