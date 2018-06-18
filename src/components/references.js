import {Icon} from 'semantic-ui-react';
import React from 'react';
import shortid from 'shortid';

import {bold, c, color, colors, emOneHalf, emOneTwo, faded} from './styles';
import {CardHighlights} from "./cardhighlights";
import {referencesType} from "../data/person";

const References = ({references}) => {
  return (
    <div>
      {references.map(reference => (

        <CardHighlights

          key={shortid.generate()}
          color={colors.blue}

          subtitle={
            <span style={c(emOneHalf, bold, color(colors.blue))}>
              <Icon name="quote left" size="large"/>
            </span>
          }

          text={
            <span style={c(emOneTwo, faded(colors.black))}>
              <strong>
              References can be provided at request
              </strong>
            </span>
          }
        />
      ))}
    </div>
  );
};

References.defaultProps = {
  references: [],
};

References.propTypes = referencesType;

export default References;
