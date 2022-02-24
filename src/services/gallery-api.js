function fetchGalleryItems(nextValue) {
  return fetch(
    `https://pixabay.com/api/?q=${nextValue}&page=1&key=24889810-2bc4e76c9cdda8d01f76f9c49&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`BE NOT AFRAID, CHILD. I'LL FIND ${nextValue} FOR YOU LATER!`)
    );
  });
}

const api = {
  fetchGalleryItems,
};

export default api;
