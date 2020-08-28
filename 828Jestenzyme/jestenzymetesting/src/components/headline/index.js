import React from 'react';
import './styles.scss';
function Headline(props) {
  const { header = null, desc } = props;

  // if header doesnt exist, dont render anything
  if (!header) {
    return null;
  }

  return (
    <div data-test="HeadlineComponent">
      <h1 data-test="header">{header}</h1>
      <p data-test="desc">{desc}</p>
    </div>
  );
}

export default Headline;
