import React from 'react';
import PropTypes from 'prop-types';
import { Message } from './Notification.styled';
import { MessageBox } from './Notification.styled';

export const Notification = ({ message }) => {
  return <MessageBox>{message && <Message>{message}</Message>}</MessageBox>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
