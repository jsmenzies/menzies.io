import {Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React from 'react';

import {colors} from './styles';
import {ExtLink} from "./extlink";

export const Mailto = ({email}) => {
    return <a href={`mailto:${email}`}>{email}</a>;
};

Mailto.propTypes = {
    email: PropTypes.string.isRequired,
};

export const Contact = ({phone, email, website}) => {
    return (
        <div>
            {phone &&
            <Button
                // style={{ margin: '10px' }}
                size="tiny"
                icon="phone"
                content={phone}
            />}
            {email &&
            <ExtLink
                // style={{ margin: '10px' }}
                href={`mailto:${email}`}
                text={<Button size="tiny" icon="envelope" content={email}/>}
                color={colors.grey}
            />}
            {website &&
            <ExtLink
                // style={{ margin: '10px' }}
                href={website}
                text={<Button size="tiny" icon="computer" content={website}/>}
                color={colors.grey}
            />}
        </div>
    );
};

Contact.defaultProps = {
    phone: undefined,
    email: undefined,
    website: undefined,
};

Contact.propTypes = {
    phone: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
};