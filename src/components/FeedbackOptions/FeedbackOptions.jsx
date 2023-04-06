import React from 'react';
import PropTypes from 'prop-types';
import { Box } from './FeedbackOptions.styled';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback({ type: option })}
        >
          {option}
        </Button>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
