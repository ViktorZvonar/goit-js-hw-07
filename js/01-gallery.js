import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divEl = document.querySelector(".gallery");
console.log(divEl);

const createGallaryMarkup = (galleryItems) => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join("");
};

const gallaryMarkup = createGallaryMarkup(galleryItems);
divEl.insertAdjacentHTML("beforeend", gallaryMarkup);

const onDivElClick = (event) => {
  event.preventDefault();
  const isPicture = event.target.classList.contains("gallery__image");

  if (!isPicture) {
    return;
  }

  const instance = basicLightbox.create(
    `<img
    class="modal__image"
    src="${event.target.dataset.source}"
    />  
  `,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", (event) => {
          if (event.code === "Escape") {
            instance.close();
          }
        });
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", (event) => {
          if (event.code === "Escape") {
            instance.close();
          }
        });
      },
    }
  );

  instance.show();
};

divEl.addEventListener("click", onDivElClick);
