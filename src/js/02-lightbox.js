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
