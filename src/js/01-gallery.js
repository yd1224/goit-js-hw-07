import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector("ul");
list.classList.add("gallery")
const markup = galleryItems.map(({ preview, original, description }) => `
<li class="gallery__item">
<img class="gallery__image" src="${preview}" alt="${description}"/>
</li>
`
    
).join("")
list.innerHTML=markup;