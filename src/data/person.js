import PropTypes from 'prop-types';

export const person = {
    basics: {
        name: 'James Menzies',
        label: 'Software Engineer',
        email: 'james@menzies.io',
        phone: '(+44) 07561536516',
        website: 'https://menzies.io',
        summary: 'A Software Engineer who is well versed in the agile methodology and has several years experience ' +
        'with a wide variety of technologies. Recently specialising in fullstack Java development including designing, ' +
        'developing and implementing large-scale, high performance, reliable applications.',
        profiles: [
            {
                network: 'GitHub',
                username: 'jsmenzies',
                url: 'https://www.github.com/jsmenzies',
            },
            {
                network: 'Twitter',
                username: 'james_menzies',
                url: 'https://twitter.com/james_menzies',
            },
            {
                network: 'LinkedIn',
                username: 'jamesstuartmenzies',
                url: 'https://www.linkedin.com/in/jamesstuartmenzies/',
            },
        ]
    },
    skills: [
        {
            name: 'Javascript',
            level: '15',
            keywords: [
                'First website',
                'Pretty terrible',
            ],
        }
    ]
};

export const skillsType = PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const locationType = PropTypes.shape({
    address: PropTypes.string,
    postalCode: PropTypes.string,
    city: PropTypes.string,
    countryCode: PropTypes.string,
    region: PropTypes.string,
}).isRequired;

export const profileType = PropTypes.shape({
    network: PropTypes.string,
    username: PropTypes.string,
    url: PropTypes.string,
}).isRequired;

export const basicsType = PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    summary: PropTypes.string,
    location: PropTypes.shape(locationType),
    profiles: PropTypes.arrayOf(profileType),
}).isRequired;

export const resumeType = PropTypes.shape({
    basics: basicsType,
    skills: skillsType,
});
