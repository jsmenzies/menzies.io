import {Icon, List, ListItem} from 'semantic-ui-react';
import React from 'react';

import ReactMarkdown from 'react-markdown';
import shortid from 'shortid';

import {bold, c, color, colors, emOneHalf, emOneTwo, emTwo, faded,} from './styles';

import {workType} from '../data/person';
import {ExtLink} from "./extlink";
import {CardHighlights} from "./cardhighlights";
import {ButtonHighlights} from "./buttonhighlights";

const Work = ({work}) => {
  return (
    <div>
      {work.map(job => (

        <CardHighlights

          color={colors.green}
          key={shortid.generate()}

          title={
            <span style={c(emTwo, bold, faded(colors.green))}>
                            <Icon name="building outline" margin="10"/>
              {job.website
                ? <ExtLink
                  href={job.website}
                  text={job.company}
                  color={colors.green}
                />
                : job.company}
                        </span>
          }

          subtitle={
            <span style={c(emOneHalf, color(colors.grey))}>
                            <Icon name="user outline"/>{job.position}
              <Icon name="calendar" style={{marginLeft: '50px'}}/>
              {`( ${job.startDate} - ${job.endDate} )`}
                        </span>
          }

          text={
            <span style={c(emOneTwo, faded(colors.black))}>
                            <ReactMarkdown source={job.summary}/>
                        </span>
          }

          points={
            <List animated>
              <ListItem>
                {/*
                Strong OO design and analysis skills. Direct the programming of junior
                developers, conducting code reviews and ensuring a high standard of code. Lead
                design/development tasks. problem solving skills/analytics. API design and implementation
              </ListItem>
              <ListItem>
                Regular engagement with major stakeholders in in support of first phase
                product design and sprint planning. Deliver software solutions consistent with
                the product road map and release plan milestones.
              </ListItem>
              <ListItem>
                Adept in Continuous Integration (CI), acceptance testing, integration
                testing and unit testing, passion for benchmarking/metrics. performance tuning bottleneck.
                Automated test and build process with Jenkins.
              </ListItem>
              <ListItem>
                AWS-like environment, networks, linux. lots of open source. activeMQ.
                Spring boot. popular java libraries. Java 8. Java based,full stack, good knowledge of stack,
                maven. bamboo. JIRA
                */}
              </ListItem>
            </List>}

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
