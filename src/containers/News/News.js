import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, bool, shape, string, func } from 'prop-types';
import { fetchNews } from '../../store/actions';
import NewsItem from '../../components/NewsItem/NewsItem';
import {
    getNews,
    getNewsLoading,
    getNewsErrorMessage,
} from '../../store/selectors';
import Loader from '../../UI/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Section from '../../UI/Section/Section';

class News extends Component {
    componentDidMount() {
        // eslint-disable-next-line no-shadow
        const { fetchNews } = this.props;
        fetchNews();
    }

    renderContent = (arr) => {
        if (arr.length === 0) {
            return <p className="title">Новостей нет</p>;
        }

        return (
            <>
                <h2 className="title">Новости</h2>
                {arr.map((item) => {
                    return <NewsItem key={item.id} item={item} />;
                })}
                <p className="mt-3 is-size-5">Всего новостей: {arr.length}</p>
            </>
        );
    };

    render() {
        const { isLoading, news, errorMessage } = this.props;
        return (
            <Section>
                {news && this.renderContent(news)}
                {isLoading && <Loader />}
                {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
            </Section>
        );
    }
}

News.propTypes = {
    isLoading: bool.isRequired,
    errorMessage: string,
    fetchNews: func.isRequired,
    news: arrayOf(
        shape({
            key: string,
        })
    ),
};

News.defaultProps = {
    news: [],
    errorMessage: '',
};

function mapStateToProps(state) {
    return {
        news: getNews(state),
        isLoading: getNewsLoading(state),
        errorMessage: getNewsErrorMessage(state),
    };
}

export default connect(mapStateToProps, { fetchNews })(News);
