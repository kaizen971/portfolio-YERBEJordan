import React from 'react';
import GalleryModal from './modal';

const images = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/250',
'https://via.placeholder.com/350',
'https://via.placeholder.com/450',
'https://via.placeholder.com/550',
'https://via.placeholder.com/650',
'https://via.placeholder.com/750',
];

const ModalApp = () => {
return (
<GalleryModal images={images} />
);
};

export default ModalApp
