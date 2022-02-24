import errorGif from './BusyAzazel.gif';

export default function GalleryError({ message }) {
  return (
    <div role="alert">
      <img src={errorGif} alt="Azazel tell you about error!" width="300" />
      <p>{message}</p>
    </div>
  );
}
