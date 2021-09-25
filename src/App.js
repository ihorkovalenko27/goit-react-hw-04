import { useState, useEffect } from 'react';
import Searchbar from './components/searchbar/Searchbar';
import SearchApi from './services/SearchApi';
import ImageGallery from './components/imageGallery/ImageGallery';
import Button from './components/button/Button';
import Spinner from './components/loader/Loader';
import Modal from './components/modal/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [searchName, setSearchName] = useState('');
  const [pickedImage, setPickedImage] = useState('');
  const [images, setImages] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (!searchName) {
      return;
    }
    setloading(true);

    SearchApi(searchName, currentpage)
      .then(data => {
        if (data.hits.length === 0) {
          toast.error('Sorry! We did not find your request.');
          return;
        }
        setImages(state => [...state, ...data.hits]);
      })
      .then(() => {
        if (currentpage > 1) {
          autoScroll();
        }
      })
      .finally(() => setloading(false));
  }, [searchName, currentpage]);

  const handleFormSubmit = searchName => {
    setSearchName(searchName);
    setImages([]);
    setCurrentPage(1);
  };

  const handlePickedImage = imageUrl => {
    setPickedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setPickedImage('');
  };

  const loadMore = () => {
    setCurrentPage(state => state + 1);
  };

  const autoScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const visibleLoadmore = images.length > 0;
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {loading && <Spinner />}
      <ImageGallery images={images} onPicked={handlePickedImage} />
      {visibleLoadmore && <Button onClick={loadMore} onLoading={loading} />}
      {pickedImage && <Modal src={pickedImage} closeModal={handleCloseModal} />}
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
