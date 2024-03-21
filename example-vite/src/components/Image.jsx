import React from 'react';
import PropTypes from 'prop-types';

/**
 * dynImg() is a helper function that returns a URL to the image file
 * @param {*} imgData 
 * @param {*} folder 
 * @param {*} type 
 * @returns a URL object
 */
const dynImg = (imgData, folder, type) => {
  let requestURI;

  // If a folder is specified, use it
  if (folder) {
    requestURI = `${folder}/${imgData.root}.${type}`;
  } else {
    requestURI = `${imgData.root}.${type}`;
  }

  // Return a URL object
  return new URL(`../../public/images/${requestURI}`, import.meta.url);
};

/**
 * Image is a component that renders an image
 * @param {*} a props object containing imgData, folder, and type
 * @returns an <img/> element
 */
export const Image = ({ imgData, folder, type }) => {
  return (
    <img
      src={dynImg(imgData, folder, type)}
      width={imgData.width || 200}
      height={imgData.height || 200}
      alt={imgData.alt || ''}
      srcSet={imgData.srcSet}
    />
  );
};

export default Image;

Image.propTypes = {
  imgData: PropTypes.object.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  folder: PropTypes.string,
  type: PropTypes.string.isRequired
};
