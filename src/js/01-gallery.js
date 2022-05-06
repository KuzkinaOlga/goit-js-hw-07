import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const cardsPhotos = createCardsPhotos(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsPhotos.join(''));
let currentIndex = 0;


function createCardsPhotos(photos) {
    return photos
        .map(({ preview, original, description }, index) => {
            return `
            <div class="gallery__item">
  <a class="gallery__link" 
  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      data-index="${index}"
      alt="${description}"
    />
  </a>
</div>`
            
    })
    
}
   const instance = basicLightbox.create(`
    <img src="" width="800" height="600">
`,{onShow: (instance) => {window.addEventListener('keydown', onBtnPress)},

	onClose: (instance) => {window.removeEventListener('keydown', onBtnPress)
       }
   })
function onBtnPress(event) {
    if (event.key === 'Escape'){
   instance.close()}
    if (event.key === 'ArrowRight') {
        console.log("right");
        currentIndex += 1;
        console.log(currentIndex);
        if (currentIndex > galleryItems.length-1) {
            
            currentIndex = 0;
        }
        instance.element().querySelector('img').src = galleryItems[currentIndex].original
        
    }
    if (event.key === 'ArrowLeft') {
        console.log("left");
        currentIndex -= 1;
         if (currentIndex < 0) {
            console.log(currentIndex);
            currentIndex = galleryItems.length -1;
        }

        instance.element().querySelector('img').src = galleryItems[currentIndex].original
    }
}



galleryContainer.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return 
    }
    
    currentIndex = Number(event.target.dataset.index)
    instance.element().querySelector('img').src = event.target.dataset.source
    

    instance.show()


    console.log(event.target.dataset.source);
    console.log(event.currentTarget.nodeName);
});
    