import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

function SharedButton(props) {
  const { buttonText, emitEvent } = props;

  const submitEvent = () => {
    if (emitEvent) {
      emitEvent();
    }
  };
  return (
    <button onClick={() => submitEvent()} data-test="buttonComponent">
      {buttonText}
    </button>
  );
}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};

export default SharedButton;
