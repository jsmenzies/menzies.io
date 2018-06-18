import {Icon} from 'semantic-ui-react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import shortid from 'shortid';

import {bold, c, color, colors, emOneTwo, emTwo, faded} from './styles';
import {CardHighlights} from "./cardhighlights";

const Awards = ({awards}) => {
  return (
    <div>
      {awards.map(award => (

        <CardHighlights

          key={shortid.generate()}
          color={colors.purple}

          title={
            <span style={c(emTwo, bold, color(colors.purple))}>
              <Icon name="star"/>{award.title}
            </span>
          }
          subtitle={
            <span style={c(emOneTwo, color(colors.grey))}>
              <Icon name="thumbs up"/>{award.awarder}
              <Icon name="calendar" style={{marginLeft: '50px'}}/>{award.date}
            </span>
          }
          text={
            <span style={c(emOneTwo, faded(colors.black))}>
              <ReactMarkdown source={award.summary}/>
            </span>
          }
        />
      ))}
    </div>
  );
};

Awards.defaultProps = {
  awards: [],
};

Awards.propTypes = awardsType;

export default Awards;
