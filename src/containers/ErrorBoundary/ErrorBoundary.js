import React, { Component } from 'react';
import { node } from 'prop-types';
import Section from '../../UI/Section/Section';

class ErrorBoundary extends Component {
    state = { hasError: false };

    // eslint-disable-next-line no-unused-vars
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <Section type="textOnly" text="Что-то пошло не так." />;
        }

        return children;
    }
}

ErrorBoundary.propTypes = {
    children: node.isRequired,
};

export default ErrorBoundary;
