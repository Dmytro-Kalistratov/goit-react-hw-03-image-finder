import ImageFinder from './ImageFinder';

export const App = () => {
  return (
    <div>
      <ImageFinder />
    </div>
  );
};

// HTTP --> https://pixabay.com/api/?q=cat&page=1&key=24889810-2bc4e76c9cdda8d01f76f9c49&image_type=photo&orientation=horizontal&per_page=12
// В ответе от апи приходит массив объектов, в которых тебе интересны только следущие свойства:
// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна
