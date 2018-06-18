import {Grid, Icon} from 'semantic-ui-react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import shortid from 'shortid';

import {bold, c, color, colors, emOneHalf, emOneTwo, emTwo, faded} from './styles';
import {CardHighlights} from "./cardhighlights";
import {publicationsType} from "../data/person";

const Publications = ({publications}) => {
  return (
    <div>
      {publications.map(publication => (

        <CardHighlights

          key={shortid.generate()}
          color={colors.orange}

          title={
            <span style={c(emTwo, bold, color(colors.orange))}>
              <Icon name="newspaper"/>
              {publication.name}
            </span>
          }

          subtitle={
            <span style={c(emOneHalf, color(colors.grey))}>
            <Grid columns="equal">
              <Grid.Column textAlign="left">
                <Icon name="pencil"/>
                {publication.supervisor}
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Icon name="calendar"/>
                {publication.date}
              </Grid.Column>
              <Grid.Column textAlign="right">
                <Icon name="star"/>
                {publication.grade}
              </Grid.Column>
            </Grid>
            </span>
          }

          text={
            <span style={c(emOneTwo, faded(colors.black))}>
              <ReactMarkdown source={publication.summary}/>
            </span>
          }
        />
      ))}
    </div>
  );
};

Publications.defaultProps = {
  publications: [],
};

Publications.propTypes = publicationsType;

export default Publications;
