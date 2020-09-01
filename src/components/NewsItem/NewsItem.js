import React from 'react';
import { string, shape } from 'prop-types';

const NewsItem = ({ item }) => {
    const { title, text } = item;
    return (
        <article className="media">
            <div className="content">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </article>
    );
};

NewsItem.propTypes = {
    item: shape({
        title: string.isRequired,
        text: string.isRequired,
    }).isRequired,
};

export default NewsItem;
