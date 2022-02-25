import { Component } from 'react';
import GalleryError from 'components/GalleryError';
import ImageGalleryItem from 'components/ImageGalleryItem';
import GalleryLoader from 'components/GalleryLoader';
import galleryAPI from 'services/gallery-api';
import styles from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    gallery: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.searchValue;
    const nextValue = this.props.searchValue;

    if (prevValue !== nextValue) {
      console.log('Изменился запрос!');

      this.setState({ status: 'pending' });

      galleryAPI
        .fetchGalleryItems(nextValue)
        .then(gallery => {
          if (gallery.hits.length === 0) {
            return Promise.reject(
              new Error(
                `BE NOT AFRAID, CHILD. I'LL FIND ${nextValue} FOR YOU LATER!`
              )
            );
          }
          return this.setState({ gallery, status: 'resolved' });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { gallery, error, status } = this.state;

    console.log('After render', gallery);

    if (status === 'idle') {
      return <p>Enter your query :3</p>;
    }

    if (status === 'pending') {
      return <GalleryLoader />;
    }

    if (status === 'rejected') {
      return <GalleryError message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <ul className={styles.ImageGallery}>
          {gallery.hits.map(hit => (
            <ImageGalleryItem gallery={hit} key={hit.id} />
          ))}
        </ul>
      );
    }
  }
}

export default ImageGallery;

//               key={hit.id}
//               webformatURL={hit.webformatURL}
//               largeformatURL={hit.largeformatURL}

// {
//   !searchValue && <p>DON`T FUCK WITH ME, HUMAN</p>;
// }
