setTimeout(function() {
    var backgroundColor = window.getComputedStyle(document.body).backgroundColor;
    window.alert(backgroundColor);
    }, 3000);

function changeStyle() {
    var textElement = document.getElementById('FIO');
    textElement.style.color = 'red';

    document.body.style.backgroundColor = 'gray';

    document.body.style.font = 'bold 20pt Arial';

    var photo = document.getElementById('image1');
    photo.style.border = '1px solid green';

    var photo = document.getElementById('FIO');
    photo.style.border = '1px solid green';

    var photo = document.getElementById('linkedInstagram');
    photo.style.border = '1px solid green';
}

// var visitedPagesCount = window.history.length;
// window.alert("Количество посещенных страниц: " + visitedPagesCount);

// var visitedPagesCount = window.history.length;
// var windowFeatures = 'width=100,height=150';
// var windowTitle = 'Информация';
// var windowContent = 'Количество посещенных страниц: ' + visitedPagesCount;

// window.open('', windowTitle, windowFeatures);
// window.document.write('<html><head><title>' + windowTitle + '</title></head><body>' + windowContent + '</body></html>');


var originalElement = document.getElementById('FIO');
var clonedElement = originalElement.cloneNode(true);
document.body.prepend(clonedElement);



