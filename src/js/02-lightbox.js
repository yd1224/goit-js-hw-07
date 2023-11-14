import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector("ul.gallery");

container.classList.add("gallery")

const markup = galleryItems.map(({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}" rel="noopener" onclick="return false;" download>
    <img
      class="gallery__image lazyload"
      data-src="${preview}"
      alt="${description}"
    />
  </a>
</li>
`).join("")

container.innerHTML = markup;
container.addEventListener("click", handleClick);


function handleClick(event) {

    if (event.target === event.currentTarget) {
        return;
    }
    const currentProduct = event.target.closest(".gallery__image");
  const src = currentProduct.dataset.src;
  const image = galleryItems.find(({ preview }) => preview === src);
const instance =  `
<div class="gallery">
    <a href="${image.original}">
    <img src="${image.preview}" alt="${image.description}" title="${image.description}"/>
    </a>
</div>

`
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.show();
  console.log(SimpleLightbox);

    document.addEventListener("keydown", handleKey)
   function handleKey(event) {
    if (event.code === 'Escape') {
        lightbox.close();
    }
}
}
// function handleClick(event) {
//     if (event.target === event.currentTarget) {
//         return;
//     }
    
//     const currentProduct = event.target.closest(".gallery__image");
//     const src = currentProduct.dataset.src;
//     const image = galleryItems.find(({ preview }) => preview === src);
    
//     const lightbox = new SimpleLightbox(`
//         <div class="gallery">
//             <a href="${image.original}">
//                 <img src="${image.preview}" alt="${image.description}" title="${image.description}"/>
//             </a>
//         </div>
//     `);
    
//     lightbox.show();
// }
