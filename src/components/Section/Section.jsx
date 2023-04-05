import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Section.styled';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
