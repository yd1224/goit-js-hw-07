import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector("ul.gallery");

container.classList.add("gallery")

const markup = galleryItems.map(({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}" rel="noopener" onclick="return false;" download>
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
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
    const src = currentProduct.dataset.source;
    const image = galleryItems.find(({ original }) => original === src);
    const instance = basicLightbox.create(`

    <img class="gallery__image" src="${image.original}" alt="${image.description}"/>


`, {
	onShow: (instance) => { document.addEventListener("keydown", handleKey)},
	onClose: (instance) => { document.removeEventListener("keydown", handleKey)}
})
    instance.show()

    document.addEventListener("keydown", handleKey)
   function handleKey(event) {
    if (event.code === 'Escape') {
        instance.close();
    }
}
}



