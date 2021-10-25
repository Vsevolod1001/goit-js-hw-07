import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = galleryItems
    .map(
      ({ original, preview, description }) =>
        `<div class = "gallery__item"><a href = "${original}" class="gallery__link"><img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image"></a></div>`,
    )
    .join('');



galleryEl.addEventListener('click', viewImage);

function viewImage(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  event.preventDefault();

  const imgInstance = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {
    onClose: () => {
      document.removeEventListener('click', closeModal);
    },
  });

  imgInstance.show();

  document.addEventListener('keyup', closeModal);

  function closeModal(event) {
    if (event.key === 'Escape') {
      imgInstance.close();
    }
  }
}



