import {Segment} from "semantic-ui-react";
import PropTypes from "prop-types";
import {hexToRgb} from "./styles";
import React from "react";

export const CardHighlights = ({
                                 color,
                                 title,
                                 subtitle,
                                 text,
                                 highlights,
                                 bullets
                               }) => {
  return (
    <div
      style={{
        borderLeft: `5px solid rgba(${hexToRgb(color)},.5)`,
        padding: '0px 0px 0px 20px',
        margin: '0px 0px 20px 0px',
      }}
    >
      {title && <Segment vertical>{title}</Segment>}
      {subtitle &&
      <Segment vertical>
        {subtitle}
      </Segment>}
      {text && <Segment vertical>{text}</Segment>}
      {bullets && <Segment vertical>{bullets}</Segment>}

      {highlights && <Segment vertical>{highlights}</Segment>}
    </div>
  );
};

CardHighlights.defaultProps = {
  title: undefined,
  subtitle: undefined,
  text: undefined,
  bullets: undefined,
  highlights: undefined,
};

CardHighlights.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.element,
  subtitle: PropTypes.element,
  text: PropTypes.element,
  bullets: PropTypes.element,
  highlights: PropTypes.element,
};