import {List, ListItem} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React from "react";

export const WorkBulletPoint = ({icon, bullets}) => {
  return (
    <span>
      <List bulleted>
      {bullets.map(bp => (
        <ListItem>
          <strong>{bp}</strong>
        </ListItem>
      ))}
      </List>
    </span>
  );
};

WorkBulletPoint.propTypes = {
  icon: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
};