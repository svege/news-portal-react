import React from 'react';
import { node, string } from 'prop-types';

const Section = ({ children, type, text }) => {
    return (
        <section className="section">
            <div className="container">
                {type === 'textOnly' ? (
                    <p className="title is-size-4 has-text-centered">{text}</p>
                ) : (
                    children
                )}
            </div>
        </section>
    );
};

Section.propTypes = {
    children: node,
    type: string,
    text: string,
};

Section.defaultProps = {
    children: '',
    type: '',
    text: '',
};

export default Section;
