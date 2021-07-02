/*
let data = {
    photo: 'images/buildings.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
};

$('#photo').attr('src', data.photo);
*/

let currentPhoto = 0;
let imagesData = [
    {
        thumb: 'images/buildings.jpg',
        photo: 'images/buildings.jpg',
        title: 'Buildings',
        description: 'What happened here, why is this a very nice image'
    },
    {
        thumb: 'images/bridge.jpg',
        photo: 'images/bridge.jpg',
        title: 'Bridge',
        description: 'What happened here, why is this a very nice image'
    },
    {
        thumb: 'images/aurora.jpg',
        photo: 'images/aurora.jpg',
        title: 'Aurora',
        description: 'What happened here, why is this a very nice image'
    },
    {
        thumb: 'images/golden-gate-bridge.jpg',
        photo: 'images/golden-gate-bridge.jpg',
        title: 'Golden Gate Bridge',
        description: 'What happened here, why is this a very nice image'
    },
    {
        thumb: 'images/lighthouse.jpg',
        photo: 'images/lighthouse.jpg',
        title: 'Lighthouse',
        description: 'What happened here, why is this a very nice image'
    },
    {
        thumb: 'images/palace.jpg',
        photo: 'images/palace.jpg',
        title: 'Palace',
        description: 'What happened here, why is this a very nice image'
    },
    {
        thumb: 'images/parlament.jpg',
        photo: 'images/parlament.jpg',
        title: 'Parlament',
        description: 'What happened here, why is this a very nice image'
    },
    {
        thumb: 'images/milky-way.jpg',
        photo: 'images/milky-way.jpg',
        title: 'Milky way',
        description: 'What happened here, why is this a very nice image'
    }
];

//nagyképek
let loadPhoto =  function (photoNumber){
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    $('#photo-title').text(imagesData[currentPhoto].title)
    $('#photo-description').text(imagesData[currentPhoto].description)
}

//nyilak
$('#arrow-right').click(function (){
    if(currentPhoto === 7){
        currentPhoto = 0;
        loadPhoto(currentPhoto);
    }
    else{
        currentPhoto++;
        loadPhoto(currentPhoto);
    }
})
$('#arrow-left').click(function (){
    if(currentPhoto === 0){
        currentPhoto = 7;
        loadPhoto(currentPhoto);
    }
    else{
        currentPhoto--;
        loadPhoto(currentPhoto);
    }
})

//betölti a nagyképeket
loadPhoto(currentPhoto)

//kisképek
var activeIndex = currentPhoto
function loadThumbnails(itemData, index) {
    $('#thumbnails-container').append(
        `<div class="thumbnail-box">
            <img class="thumbnail" data-idx="${index}" src="${itemData.thumb}">
            <p class="title">${itemData.title}</p>
        </div>`
    )
}
//betölti a kisképeket
imagesData.forEach(loadThumbnails)
//klikkelés a kisképekre
$('.thumbnail').click(function (event){
    let indexClicked = $(event.target).attr('data-idx');
    currentPhoto = indexClicked;
    loadPhoto(currentPhoto);
})