const detailImageSelector = '[data-image-role="target"]';
const detailTitleSelector = '[data-image-role="title"]';
const thumbnailLinkSelector = '[data-image-role="trigger"]';
const detailFrameSelector = '[data-image-role="frame"]';
const hiddenDetailClass = 'hidden-detail';
const tinyEffect = 'is-tiny';
const escKey = 'Escape';

function setDetails(imageURL, titleText) {
    const detailImage = document.querySelector(detailImageSelector);
    detailImage.setAttribute('src', imageURL);

    const detailTitle = document.querySelector(detailTitleSelector);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbail) {
    setDetails(imageFromThumb(thumbail), titleFromThumb(thumbail));
}

function addThumbClickHandler(thumb) {
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

function getThumbnailsArray() {
    const thumbnails = document.querySelectorAll(thumbnailLinkSelector);
    let thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hiddenDetails() {
    document.body.classList.add(hiddenDetailClass);
}

function showDetails() {
    const frame = document.querySelector(detailFrameSelector);
    document.body.classList.remove(hiddenDetailClass);
    frame.classList.add(tinyEffect);
    setTimeout(function() {
        frame.classList.remove(tinyEffect);
    }, 50);
}

function addKeyPressHandler() {
    document.addEventListener('keyup', function(event) {
        event.preventDefault();
        console.log(event.key);
        if(event.key === escKey) {
            hiddenDetails();
        }
    })
}

function initializeEvent() {
    let thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}

initializeEvent();