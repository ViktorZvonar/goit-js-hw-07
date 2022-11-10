import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulEl = document.querySelector(".gallery");
console.log(ulEl);

const createGallaryMarkup = (galleryItems) => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" 
        alt="${description}"
       
        />
        </a>
    </div>
    `;
    })
    .join("");
};

const gallaryMarkup = createGallaryMarkup(galleryItems);
ulEl.insertAdjacentHTML("beforeend", gallaryMarkup);

const onDivElClick = (event) => {
  event.preventDefault();
  const isPicture = event.target.classList.contains("gallery__image");

  if (!isPicture) {
    return;
  }
};

ulEl.addEventListener("click", onDivElClick);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
