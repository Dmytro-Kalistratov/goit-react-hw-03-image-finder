import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  gallery: { webformatURL, largeformatURL },
}) {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt="Element of Gallery"
        className={styles.ImageGalleryItem__image}
      />
    </li>
  );
}
