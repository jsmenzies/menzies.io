import PropTypes from 'prop-types';

export const person = {
    basics: {
        name: 'James Menzies',
        label: 'Software Engineer',
        email: '',
        phone: '',
        website: 'https://menzies.io',
        summary: 'A Software Engineer who is well versed in the agile methodology and has several years experience with a wide variety of technologies. Recently specialising in fullstack Java development including designing, developing and implementing large-scale, high performance, reliable applications.',
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
    work: [
        {
            company: 'Northrop Grumman',
            position: 'Senior Software Engineer',
            website: 'http://www.northropgrumman.com/',
            startDate: '2017',
            endDate: '2018',
            summary: 'Working on building high performance/availability applications with an emphasis on security and monitoring which involved collaborating closely with project architects to design and deliver functional, intuitive solutions to customer requirements.',
            bullets: [
                'Directed the programming of junior developers, conducting code reviews and ensuring a high standard of code in addition to leading the design and development of large business critical systems.',
                'Regular engagement with major stakeholders in support of first phase product design and sprint planning. Deliver software solutions consistent with the product road map and release plan milestones.',
                'Experienced developing complex applications and infrastructure at multisite-scale which required building and maintaining internal tooling for logging, monitoring, testing, alerting and reporting needs.'
            ],
            highlights: ['Java 8', 'Spring Boot', 'AWS-like environment', 'Apache ActiveMQ', 'Bamboo/Jenkins', 'Maven'],
        },
        {
            company: 'Northrop Grumman',
            position: 'Software Engineer',
            website: 'http://www.northropgrumman.com/',
            startDate: '2015',
            endDate: '2017',
            summary: 'Involving the prototyping and development of Apache NiFi custom multithreaded processors, requiring a continuous integration environment including the use of acceptance, integration and unit testing. Performance tuning and benchmarking techniques and tools were used to identify applications bottlenecks.',
            bullets: [
                'Developed and iterated on technical proposals – outlining how solutions will be structured and developed.',
                'Strong communication and collaborative skills, both written and verbal were required to overcome design challenges and enable cross-team collaboration to be as efficient as possible.',
                'Produced simple, efficient, reusable code – mindful of new technologies, paradigms, and development methodologies.',
                'Provide technical guidance to product and business teams across the company on the most effective ways of implementing desired requirements.'
            ],
            highlights: ['Apache NiFi', 'Docker', 'Elastic Stack', 'Python', 'VisualVM'],
        },
        {
            company: 'CERN- European Organization for Nuclear Research',
            position: 'Technical Student',
            website: 'https://home.cern/',
            startDate: '2013',
            endDate: '2014',
            summary: 'As a salaried technical student within the Data Services Section of CERN. I worked in a multi-national team and was tasked with many varied projects, including developing several interfaces and tools used for the design and specification of the Large Hadron Collider.',
            bullets: [
                'Predominantly using a Kanban software development approach several projects involved meeting with users to conduct requirement capture in addition to contributing to cross functional teams',
                'Projects consisted of the development of software tools to aid with the design and specification of the physic experiments. Using a combination of various technologies and programming languages, mainly, PLSQL and Oracle\'s APEX platform.',
                'Responsible for the administration and maintenance of several subsystems within a key database within the controls group. Additionally, tasked with creating several tools to add functionality to a Oracle Database.'
            ],
            highlights: ['Oracle 11g', 'Oracle APEX', 'PL/SQL', 'Javascript'],
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
            summary:
                'Project involved the design and development of a Java application which, through the use of the JDBC, collects usage data regarding an Oracle database. Based on this data the application will execute a specifically designed algorithm in order to determine which physical structures could be implemented into the database to improve efficiency in a disk space costs effective manner. The application will generate a SQL script which can be run to generate the structures automatically. The application proved highly successful and results demonstrated an average CPU cost reduction by 78% with an average IO cost reduction of 63%.',
        }
    ],
    references: [
        {
            name: '',
            reference: "",
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

