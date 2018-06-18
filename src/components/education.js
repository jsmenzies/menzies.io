import {Grid, Icon} from 'semantic-ui-react';
import React from 'react';
import shortid from 'shortid';

import {bold, c, color, colors, emOneHalf, emTwo} from './styles';
import {CardHighlights} from "./cardhighlights";
import {ButtonHighlights} from "./buttonhighlights";
import {educationType} from "../data/person";

const Education = ({education}) => {
  return (
    <div>
      {education.map(item => (

        <CardHighlights

          key={shortid.generate()}
          color={colors.teal}

          title={
            <span style={c(emTwo, bold, color(colors.teal))}>
              <Icon name="university"/>
              {`${item.institution} ${item.area}`}
            </span>
          }

          subtitle={
            <span style={c(emOneHalf, color(colors.grey))}>
              <Grid columns="equal">
                <Grid.Column textAlign="left">
                  <Icon name="certificate"/>
                  {`${item.studyType}`}
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <Icon name="calendar"/>
                  {`${item.startDate} - ${item.endDate} `}
                </Grid.Column>
                <Grid.Column textAlign="right">
                  <Icon name="star"/>{`${item.grade}`}
                </Grid.Column>
              </Grid>
            </span>
          }

          highlights={
            <ButtonHighlights
              icon="graduation"
              highlights={item.modules}
              color="teal"
            />
          }
        />
      ))}
    </div>
  );
};

Education.defaultProps = {
  education: [],
};

Education.propTypes = educationType;

export default Education;
