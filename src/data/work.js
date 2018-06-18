import PropTypes from 'prop-types';

export const work = {
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
  ]
};

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