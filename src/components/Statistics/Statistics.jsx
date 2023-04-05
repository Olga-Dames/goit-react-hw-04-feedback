import React from 'react';
import PropTypes from 'prop-types';
import { StatBox } from './Statistics.styled';
import { StatsName } from './Statistics.styled';
import { Stats } from './Statistics.styled';
import { Total } from './Statistics.styled';
import { TotalNumber } from './Statistics.styled';
import { TotalBox } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatBox>
        <Stats>
          <StatsName>Good: </StatsName>
          {good}
        </Stats>
        <Stats>
          <StatsName>Neutral: </StatsName>
          {neutral}
        </Stats>
        <Stats>
          <StatsName>Bad: </StatsName>
          {bad}
        </Stats>
      </StatBox>
      <TotalBox>
        <Total>
          Total: <TotalNumber>{total}</TotalNumber>
        </Total>
        <Total>
          Positive feedback: <TotalNumber>{positivePercentage}%</TotalNumber>
        </Total>
      </TotalBox>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
