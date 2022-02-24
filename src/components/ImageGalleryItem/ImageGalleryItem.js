export default function ImageGalleryItem({
  gallery: { webformatURL, largeformatURL },
}) {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt="Element of Gallery" />
    </li>
  );
}
