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
  // skills: [
  //   {
  //     name: 'Javascript',
  //     level: '15',
  //     keywords: [
  //       'First website',
  //       'Pretty terrible',
  //     ],
  //   }
  // ],
  work: [
    {
      company: 'Northrop Grumman',
      position: 'Senior Software Engineer',
      website: 'http://www.northropgrumman.com/',
      startDate: '2017',
      endDate: 'Current',
      summary: 'Collaborate with Project Architect to design and deliver functional, intuitive solutions to customer\n' +
      'requirements. Strong OO design and analysis skills. Direct the programming of junior\n' +
      'developers, conducting code reviews and ensuring a high standard of code. Lead\n' +
      'design/development tasks. problem solving skills/analytics. API design and implementation.',
      bullets: [
        'Regular engagement with major stakeholders in in support of first phase' +
        'product design and sprint planning. Deliver software solutions consistent with' +
        'the product road map and release plan milestones.',
        'Adept in Continuous Integration (CI), acceptance testing, integration' +
        'testing and unit testing, passion for benchmarking/metrics. performance tuning bottleneck.' +
        'Automated test and build process with Jenkins.',
        'AWS-like environment, networks, linux. lots of open source. activeMQ.' +
        'Spring boot. popular java libraries. Java 8. Java based,full stack, good knowledge of stack, maven. bamboo. JIRA'
      ],
      highlights: [],
    },
    {
      company: 'Northrop Grumman',
      position: 'Software Engineer',
      website: 'http://www.northropgrumman.com/',
      startDate: '2015',
      endDate: '2017',
      summary: 'Apache nifi custom multithreaded processors including SMPP TFTP servers',
      bullets: [
        'Predominantly using a Kanban software development approach several projects involved meeting with users' +
        ' to conduct requirement capture in addition to contributing to cross functional teams',
        'Projects consisted of the development of software tools to aid with the design and specification of the' +
        'physic experiments. Using a combination of various technologies and programming languages, mainly, PLSQL' +
        'and Oracle\'s APEX platform.',
        'Responsible for the administration and maintenance of several subsystems within a key database within the' +
        'controls group. Additionally, tasked with creating several tools to add functionality to a Oracle Database.'
      ],
      highlights: [],
    },
    {
      company: 'CERN- European Organization for Nuclear Research',
      position: 'Technical Student',
      website: 'https://home.cern/',
      startDate: '2013',
      endDate: '2014',
      summary: 'As a salaried technical student within the Data Services Section of CERN. ' +
      'I worked in a multi-national team and was tasked with many varied projects, ' +
      'including developing several interfaces and tools used for the design and' +
      'specification of the Large Hadron Collider.',
      bullets: [
        'Predominantly using a Kanban software development approach several projects involved meeting with users' +
        ' to conduct requirement capture in addition to contributing to cross functional teams',
        'Projects consisted of the development of software tools to aid with the design and specification of the' +
        'physic experiments. Using a combination of various technologies and programming languages, mainly, PLSQL' +
        'and Oracle\'s APEX platform.',
        'Responsible for the administration and maintenance of several subsystems within a key database within the' +
        'controls group. Additionally, tasked with creating several tools to add functionality to a Oracle Database.'
      ],
      highlights: ['Java 8'],
    }
  ],
  education: [
    {
      institution: 'Northumbria University:',
      area: 'Computer Science',
      studyType: 'Bachelor (Hons)',
      startDate: '2011',
      endDate: '2015',
      grade: 'First Class Honors',
      modules: [
        'CM0571 - Professional Software Engineering Practice',
        'CM0570 - Program Design & Development',
        'EN0617 - Professionalism and Industrial Case',
        'CM0433 - Computing Fundamentals'
      ],
    },
    {
      institution: 'Whitley Bay High School',
      area: '',
      studyType: 'A-Levels',
      startDate: '2009',
      endDate: '2011',
      grade: 'A - C',
      modules: [
        'Maths',
        'Physics',
        'Chemistry',
      ],
    },
    {
      institution: 'Marden High School',
      area: '',
      studyType: 'GCSEs',
      startDate: '2004',
      endDate: '2009',
      grade: 'A - C',
      modules: [
        'Maths',
        'English',
        '11 other'
      ],
    }
  ],
  publications: [
    {
      name: 'Undergraduate Dissertation Project:\n The Investigation and Prototyping of the Automation of Database Performance Optimisation',
      supervisor: 'Dr. M. Akhtar Ali',
      date: '2015',
      grade: 'First Class',
      summary: 'Project involved the design and development of a Java application which,' +
      'through the use of the JDBC, collects usage data regarding an Oracle database. ' +
      'Based on this data the application will execute a specifically designed algorithm' +
      'in order to determine which physical structures could be implemented into the' +
      'database to improve efficiency in a disk space costs effective manner. ' +
      'The application will generate a SQL script which can be run to generate the' +
      'structures automatically. ' +
      'The application proved highly successful and results demonstrated an' +
      'average CPU cost reduction by 78% with an average IO cost reduction of 63%.',
    }
  ],
  references: [
    {
      name: 'Jian Yang',
      reference: "I do not respect you. You're not any kind of investor, you own nothing",
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
  bullets: PropTypes.arrayOf(PropTypes.string),
  highlights: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const educationType = PropTypes.arrayOf(PropTypes.shape({
  institution: PropTypes.string,
  area: PropTypes.string,
  studyType: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  grade: PropTypes.string,
  modules: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const publicationsType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  super: PropTypes.string,
  date: PropTypes.string,
  grade: PropTypes.string,
  summary: PropTypes.string,
})).isRequired;

export const referencesType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  reference: PropTypes.string,
})).isRequired;

export const resumeType = PropTypes.shape({
  basics: basicsType,
  skills: skillsType,
  work: workType,
  education: educationType,
  publications: publicationsType,
  references: referencesType,
});

