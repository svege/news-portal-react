import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bool, func, shape, string } from 'prop-types';
import { logout } from '../../store/actions';
import LoginButton from '../../UI/LoginButton/LoginButton';
import { getIsAuthed } from '../../store/selectors';
import routes from '../../helpers/routes';

class Header extends Component {
    state = {
        isClosed: true,
    };

    menuHandler = () => {
        const { isClosed } = this.state;
        this.setState({ isClosed: !isClosed });
    };

    renderLinks = (arr) => {
        const { isAuthed, location } = this.props;
        const { pathname } = location;
        return arr.map((item) => {
            if (item.path === pathname) {
                return (
                    <p key={item.id} className="navbar-item">
                        {item.name}
                    </p>
                );
            }
            if (!isAuthed && item.isAuthed) {
                return '';
            }

            return (
                <NavLink
                    key={item.id}
                    className="navbar-item"
                    exact={item.isExact}
                    to={item.path}
                >
                    {item.name}
                </NavLink>
            );
        });
    };

    render() {
        // eslint-disable-next-line no-shadow
        const { isAuthed, logout } = this.props;
        const { isClosed } = this.state;

        return (
            <header className="has-background-light">
                <div className="container">
                    <nav
                        className="navbar has-background-light"
                        role="navigation"
                        aria-label="main navigation"
                    >
                        <div className="navbar-brand">
                            <h2 className="navbar-item is-size-4 is-uppercase has-text-weight-semibold">
                                Новости
                            </h2>
                            <button
                                type="button"
                                className={'navbar-burger button is-text is-radiusless'.concat(
                                    isClosed ? '' : ' is-active'
                                )}
                                aria-label="menu"
                                aria-expanded="false"
                                data-target="navbarMenu"
                                onClick={this.menuHandler}
                            >
                                <span aria-hidden="true" />
                                <span aria-hidden="true" />
                                <span aria-hidden="true" />
                            </button>
                        </div>
                        <div
                            className={'navbar-menu'.concat(
                                isClosed ? '' : ' is-active'
                            )}
                            id="navbarMenu"
                        >
                            <div className="navbar-start">
                                {this.renderLinks(routes)}
                            </div>
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <LoginButton
                                        isAuthed={isAuthed}
                                        logout={logout}
                                    />
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    isAuthed: bool.isRequired,
    logout: func.isRequired,
    location: shape({
        pathname: string,
    }),
};

Header.defaultProps = {
    location: {
        pathname: '',
    },
};

const mapStateToProps = (state) => {
    return {
        isAuthed: getIsAuthed(state),
    };
};

export default connect(mapStateToProps, { logout })(withRouter(Header));
