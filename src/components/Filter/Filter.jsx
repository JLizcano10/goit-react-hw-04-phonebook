import React from 'react';
import { InputFilter, LabelFilter } from './Filter.styles';
import PropTypes from 'prop-types';

const Filter = ({ onFilter }) => {
  return (
    <div>
      <LabelFilter>
        Find contacts by name
        <InputFilter type="text" onChange={onFilter} />
      </LabelFilter>
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
export default Filter;
