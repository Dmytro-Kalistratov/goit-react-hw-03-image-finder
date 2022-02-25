import loaderGif from './GloriousSuccess.gif';
import styles from './GalleryLoader.module.css'

export default function GalleryLoader() {
  return (
    <div role="alert" className={styles.GalleryLoader}>
      <img src={loaderGif} alt="Content Loader" width="300" />
      <p>In progress...</p>
    </div>
  );
}
