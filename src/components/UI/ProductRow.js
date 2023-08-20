import React from 'react';
import classes from './ProductRow.module.css';
import IMG from '../../images/blueberry.jpg';
export default function ProductRow(props) {
  const { images, info } = props.data;
  console.log(images);
  return (
    <div
      className={`row my-5 py-5 d-flex justify-content-center  ${classes.main}`}
    >
      <div className="col-lg-2 col-md-6">
        <h3>{info.title}</h3>
        <p>{info.description}</p>
      </div>
      {images.map((img) => {
        console.log(img.src);
        return (
          <div
            key={img.id}
            className="col-lg-2 col-md-6 text-center ps-4"
          >
            <h4>{img.title}</h4>
            <img src={img.src} alt={img.title} />
          </div>
        );
      })}
    </div>
  );
}
