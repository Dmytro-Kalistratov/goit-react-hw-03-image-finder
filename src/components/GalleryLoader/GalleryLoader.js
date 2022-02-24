import loaderGif from './GloriousSuccess.gif';

export default function GalleryLoader() {
  return (
    <div role="alert">
      <img src={loaderGif} alt="Content Loader" width="300" />
      <p>In progress...</p>
    </div>
  );
}
