import PropTypes from 'prop-types';

export const person = {
  basics: {
    name: 'James Menzies',
    label: 'Software Engineer',
    email: '',
    phone: '',
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
  ],
  work: [
    {
      company: 'Northrop Grumman',
      position: 'Senior Software Engineer',
      website: 'http://www.northropgrumman.com/',
      startDate: '2017-11-01',
      endDate: 'Current',
      summary: '',
      highlights: [],
    },
    {
      company: 'Northrop Grumman',
      position: 'Software Engineer',
      website: 'http://www.northropgrumman.com/',
      startDate: '2015-04-01',
      endDate: '2017-11-01',
      summary: '',
      highlights: [],
    },
    {
      company: 'CERN- European Organization for Nuclear Research',
      position: 'Technical Student',
      website: 'https://home.cern/',
      startDate: '2013-07-01',
      endDate: '2014-08-01',
      summary: 'As a salaried technical student within the Data Services Section of CERN.\n' +
      'I worked in a multi-national team and was tasked with many varied projects,\n' +
      'including developing several interfaces and tools used for the design and\n' +
      'specification of the Large Hadron Collider.',
      highlights: [],
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

export const workType = PropTypes.arrayOf(PropTypes.shape({
  company: PropTypes.string,
  position: PropTypes.string,
  website: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  summary: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const resumeType = PropTypes.shape({
  basics: basicsType,
  work: workType,
  skills: skillsType,
});

