import {Grid, Icon} from 'semantic-ui-react';
import React from 'react';

import ReactMarkdown from 'react-markdown';
import shortid from 'shortid';

import {bold, c, color, colors, emOneHalf, emOneTwo, emTwo, faded,} from './styles';

import {workType} from '../data/person';
import {ExtLink} from "./extlink";
import {CardHighlights} from "./cardhighlights";
import {ButtonHighlights} from "./buttonhighlights";
import {WorkBulletPoint} from "./workbulletpoint";

const Work = ({work}) => {
  return (
    <div>
      {work.map(job => (

        <CardHighlights

          key={shortid.generate()}
          color={colors.green}

          title={
            <span style={c(emTwo, bold, color(colors.green))}>
              <Icon name="user outline"/>
              {job.position}
            </span>
          }

          subtitle={
            <span style={c(emOneHalf, color(colors.grey))}>
              <Grid columns="equal">
                <Grid.Column textAlign="left">
                  <Icon name="building outline"/>
                  {job.website
                    ? <ExtLink
                      href={job.website}
                      text={job.company}
                      color={colors.grey}
                    />
                    : job.company}
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <Icon name="calendar"/>
                  {`${job.startDate} - ${job.endDate} `}
                </Grid.Column>
                <Grid.Column textAlign="right">
                </Grid.Column>
              </Grid>
            </span>
          }

          text={
            <span style={c(emOneTwo, faded(colors.black))}>
              <ReactMarkdown source={job.summary}/>
            </span>
          }

          bullets={
            <WorkBulletPoint
              icon="check"
              bullets={job.bullets}
              color="red"/>
          }

          highlights={
            <ButtonHighlights
              icon="check"
              highlights={job.highlights}
              color="green"
            />
          }
        />
      ))}
    </div>
  );
};

Work.defaultProps = {
  work: [],
};

Work.propTypes = {
  work: workType,
};

export default Work;
