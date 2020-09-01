import React from 'react';
import { Link } from 'react-router-dom';
import { bool, func } from 'prop-types';

const LoginButton = ({ isAuthed, logout }) => (
    <>
        {isAuthed ? (
            <button
                type="button"
                className="button is-primary"
                onClick={logout}
            >
                Выйти
            </button>
        ) : (
            <Link className="button is-primary" to="/login">
                Войти
            </Link>
        )}
    </>
);

LoginButton.propTypes = {
    isAuthed: bool.isRequired,
    logout: func.isRequired,
};

export default LoginButton;
