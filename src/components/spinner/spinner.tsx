import React from 'react';

function Spinner(): React.ReactElement {
  return (
    <div className="spinner">
      <div className="spinner__item  spinner__item--1" />
      <div className="spinner__item  spinner__item--2" />
      <div className="spinner__item  spinner__item--3" />
      <div className="spinner__item  spinner__item--4" />
    </div>
  );
}

export default Spinner;
