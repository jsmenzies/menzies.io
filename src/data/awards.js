import PropTypes from 'prop-types';

export const awards = {
  awards: [
    {
      title: 'CEO of the month',
      date: '2007-11-01',
      awarder: 'Aviato',
      summary: 'Awarded CEO of the month for excelling at "CEO-ly duties and outperforming all expectations"',
    },
    {
      title: '3 months clean',
      date: '2017-02',
      awarder: 'Narcotics Anonymous',
      summary: 'Awarded 3 months clean for quitting an opium-den habit',
    },
  ]
};

export const awardsType = PropTypes.arrayOf(PropTypes.shape({
  title: PropTypes.string,
  date: PropTypes.string,
  awarder: PropTypes.string,
  summary: PropTypes.string,
})).isRequired;

