import {Button, Icon} from "semantic-ui-react";
import shortid from "shortid";
import PropTypes from 'prop-types';
import React from "react";

export const ButtonHighlights = ({icon, highlights, color}) => {
  return (
    <span>
      {highlights.map(h => (
        <Button
          key={shortid.generate()}
          style={{margin: '3px'}}
          color={color}
          size="small"
        >
          <strong>
            <Icon name={icon}/>{h}
          </strong>
        </Button>
      ))}
    </span>
  );
};

ButtonHighlights.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
};