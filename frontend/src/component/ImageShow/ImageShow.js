import React from 'react';
import SlideShow from 'react-image-show';
 
class MyComponent extends React.Component {
  render() {
    return (
      <SlideShow
        images={this.props.urlArray}
        width="70vh"
        imagesWidth="65vh"
        imagesHeight="50vh"
        imagesHeightMobile="80vw"
        thumbnailsWidth="70vh"
        thumbnailsHeight="12vw"
        indicators thumbnails fixedImagesHeight
      />
    );
  }
 
}

export default MyComponent;