import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../images/logo.svg';
import './GeneralTemplate.css';

const GeneralTemplate = ({children, loggedUser, logout}) => { // o children aqui eh outras paginas filhas da pagina inicial
    return (
        <div className="generalTemplate--container">
            <nav>
                <div>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <ul>
                    {loggedUser ? (

                    <React.Fragment>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/" onClick={logout}>
                        <li>Sair</li>
                    </Link>
                    </React.Fragment>
                    ) : (
                        <React.Fragment>
                        <Link to="/">
                        <li>Home</li>
                        </Link>
                        <Link to="/login">
                        <li>Login</li>
                        </Link>
                        <Link to="/signup">
                        <li>Cadastro</li>
                        </Link>
                        </React.Fragment>
                    )}
                </ul>
                </div>
            </nav>
        {children}
        </div>
    )
}

export default GeneralTemplate;