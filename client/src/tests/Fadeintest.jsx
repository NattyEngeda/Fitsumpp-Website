import React, { Component } from "react";
import imageSrc from '../assets/images/Fade In/1.jpg'
import ImageFadeIn from "react-image-fade-in";
 
class Fadeintest extends Component {
  render() {
    return <ImageFadeIn opacityTransition={0.8} width={640} height={480} src={imageSrc} />;
  }
}
export default Fadeintest;