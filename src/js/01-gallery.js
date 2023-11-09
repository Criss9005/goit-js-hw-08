import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

const gallery = document.querySelector('.gallery')
console.log('running')
galleryItems.forEach(element => {
    const item = document.createElement('li');
    gallery.append(item);
    item.classList.add('gallery__item')
    const link = document.createElement('a');
    item.append(link);
    link.classList.add('gallery__link');
    
    link.href = element.original;
    const image = document.createElement('img');
    image.classList.add('gallery__image');
    link.append(image);
    image.src = element.preview
    image.alt = element.description
    image.data = element.original
    image.title = element.description

});

const options = {
    disableRightClick: true
}

gallery.addEventListener('click', (e) => { 
    e.preventDefault()
    let newGallery = new SimpleLightbox('.gallery a', { ...options }); 
    newGallery.on('closed.simplelightbox', function () {
	newGallery.refresh()
});
    
})
