// Lightbox functionality
const galleryImages = document.querySelectorAll('#gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeBtn = document.getElementById('close');

galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('visible');
    });
});

// closeBtn.addEventListener('click', () => {
//     lightbox.classList.remove('visible');
// });

lightbox.addEventListener('click',exitLightbox)

function exitLightbox(){
    let posClick = event.target;
    if (posClick.classList.contains('visible')){
        lightbox.classList.remove('visible');
    }
}

// lightbox.addEventListener('click', function(){
//     let clickPos = event.
//     if (!lightbox.classList.contains(lightbox)){
//         lightbox.classList.remove('visible');
//     }
// })

