import React from 'react';
import './ButtonLike.css';

function ButtonLike({colorSet}) {

    let colorLike;
    switch (colorSet) {
      case "Primary":
        colorLike="buttonLikePrimary";
        break;
  
      case "Secondary":
        colorLike="buttonLikeSecondary";
        break;
  
      case "Action":
        colorLike="buttonLikeAction";
        break;
        
      default:
        colorLike="buttonLike";
        break;
    }    

    const styleSetLike = `${colorLike}`;

  return (
    <button className={styleSetLike}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
        </svg>
    </button>
  )
}

export default ButtonLike