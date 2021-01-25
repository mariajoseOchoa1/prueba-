import React from "react"

const PictureWebp = ({ filename, className, description }) => {

    return (

      <div className={`shadow-lg  ${className}`} >
      <picture>
        <source srcset={"../../images/" + filename + ".webp"} type="image/webp"/>
        <source srcset={"../../images/" + filename + ".jpg"} type="image/jpeg"/> 
        <img src={"../../images/" + filename + ".jpg"} alt={ description } />
      </picture>
    </div>

    
    );
  };
  
  export default PictureWebp;