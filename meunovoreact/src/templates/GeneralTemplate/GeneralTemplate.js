import React from 'react';
import {ReactComponent as Logo} from '../../images/logo.svg';
import './GeneralTemplate.css';

const GeneralTemplate = ({children}) => { // o children aqui eh outras paginas filhas da pagina inicial
    return (
        <div className="generalTemplate--container">
            <nav>

            <a href="/">
                <Logo />
            </a>
                <ul>
                    <a href="/">
                    <li>Home</li>
                    </a>
                    <a href="/login">
                    <li>Entrar</li>
                    </a>
                    <a href="/cadastro">
                    <li>Cadastro</li>
                    </a>
                </ul>
            </nav>
        {children}
        </div>
    )
}

export default GeneralTemplate;