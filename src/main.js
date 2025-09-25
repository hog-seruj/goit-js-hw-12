import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMoreButton = document.querySelector('.button-more');
const gallery = document.querySelector('.gallery');
let pageNumber = 1;
let searchInputValue = '';

form.addEventListener('submit', submitHandler);
loadMoreButton.addEventListener('click', moreButtonHandler);

function submitHandler(e) {
  e.preventDefault();

  const { ['search-text']: searchInput } = e.target.elements;
  searchInputValue = searchInput.value.trim();

  if (!searchInputValue.length) {
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(searchInputValue, 1)
    .then(({data}) => {
      if (!data.length) {
        throw new Error('No images found!');
      }
      createGallery(data);
      showLoadMoreButton();
    })
    .catch(error => {
      clearGallery();
      hideLoadMoreButton();
      iziToast.error({
        message: error.message,
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });

  form.reset();
}

function moreButtonHandler(e) {
  e.preventDefault();
  const button = e.currentTarget;
  pageNumber += 1;
  showLoader();

  getImagesByQuery(searchInputValue, pageNumber)
    .then(({data, totalPages}) => {
      if (pageNumber >= totalPages) {
        throw new Error("We're sorry, but you've reached the end of search results.");
      }

      createGallery(data);
      showLoadMoreButton();
      button.disable = true;

      const itemHeight = gallery.querySelector('.gallery-item').getBoundingClientRect().height;

      window.scrollBy({
        top: itemHeight * 3,
        behavior: "smooth",
      });
    })
    .catch(error => {
      hideLoadMoreButton();
      iziToast.info({
        message: error.message,
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
      button.disable = false;
    });
}
