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
console.log(images);
// const galleryListEl = document.querySelector('#gallery');
// for (let i = 0; i < images.length; i += 1) {
//   const picture = document.createElement('li');
//   console.log(picture);
//  galleryListEl.insertAdjacentElement('beforeEnd', picture);
// }
// const galleryEl = document.querySelector('li');
// const portfolioList = image => {
//   const {url, alt} = image
// }

const makeGallerylist = image => {
  const { url, alt } = image;
    return `
  <li>
    <img src="${image.url}" alt="${image.alt}">
    </li>
  `;
  }
const galleryListEl = document.querySelector('#gallery');

const makeGallerylistRow = images.map(makeGallerylist)
  .join('');
galleryListEl.insertAdjacentHTML('beforeend', makeGallerylistRow)

const imgElf = document.querySelectorAll('img')[0];
imgElf.style.width = "300px";
imgElf.style.height = "200px";
imgElf.style.display = "block";
const imgElc = document.querySelectorAll('img')[1];
imgElc.style.width = "300px";
imgElc.style.height = "200px";
imgElc.style.display = "block";
const imgElt = document.querySelectorAll('img')[2];
imgElt.style.width = "300px";
imgElt.style.height = "200px";
imgElt.style.display = "block";


let elem = document.getElementById('gallery')
elem.style.display = "flex";
elem.type = "none";


const itemsf = document.querySelectorAll('li')[0];
itemsf.style.marginRight = "15px";

const itemsc = document.querySelectorAll('li')[1];
itemsc.style.marginRight = "15px";

const itemst = document.querySelectorAll('li')[2];


console.log(makeGallerylistRow);



