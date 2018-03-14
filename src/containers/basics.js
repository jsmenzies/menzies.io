import {Grid, Header, Image} from 'semantic-ui-react';
import React from 'react';

import {Contact} from '../components/contact';
import {basicsType} from '../data/person';
import Profiles from '../components/profiles';
import Skills from '../components/skills';

import picture from '../images/picture.jpg';

const Basics = ({
                    name,
                    label,
                    email,
                    phone,
                    website,
                    summary,
                    profiles,
                    skills,
                }) => {
    return (
        <Grid centered stackable>
            <Grid.Row>
                <Grid.Column width={5}>
                    <Image
                        src={picture}
                        circular
                        centered
                        fluid
                        style={{border: '10px solid rgba(0,0,0,.05)'}}
                    />
                </Grid.Column>
                <Grid.Column textAlign="center" width={8}>
                    <Header style={{fontSize: '50px'}}>
                        {name}
                    </Header>
                    <Profiles profiles={profiles}/>
                    <Header color="grey" size="large">{label}</Header>
                    <Header color="grey" style={{marginTop: '0px'}}>
                        {summary}
                    </Header>
                    <Contact phone={phone} email={email} website={website}/>
                </Grid.Column>
            </Grid.Row>
            <Skills skills={skills}/>
        </Grid>
    )
        ;
};

Basics.defaultProps = {
    name: undefined,
    label: undefined,
    phone: undefined,
    website: undefined,
    location: {},
    profiles: {},
};

Basics.propTypes = basicsType;

export default Basics;
