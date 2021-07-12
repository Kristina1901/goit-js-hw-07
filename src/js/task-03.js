const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryListEl = document.querySelector('#gallery');
console.log(images);
const makeGalerry = ({url, alt}) => {

  return images.map(image => {
     const imageListEl = document.createElement('li');
    const imageEl = document.createElement('img');
    imageEl.style.marginRiigth = - 15;
    imageEl.width = 640;
    imageEl.classList.add('pictures');
    imageEl.src = image.url;
    imageEl.alt = image.alt;
    imageListEl.appendChild(imageEl);
    imageListEl.insertAdjacentHTML('beforeend', '<img> url=`${imageEl.src}`, alt=`${imageEl.alt}>`');
    return imageListEl;

  });
}
const elements = makeGalerry(images);
console.log(elements)
galleryListEl.append(...elements);
console.log(galleryListEl)