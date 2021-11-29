import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Sticky from 'react-stickynode';

class CustomNavbar extends Component {
    render() {
        var {mClass, nClass, cClass, slogo, hbtnClass} =this.props;
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <header className="header_area">
                <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
                    <div className={`container ${cClass}`}>
                        <Link className={`navbar-brand ${slogo}`} to="/"> 
                            <img src={require("../img/logo_conectare.png")} alt=""/>
                            <img src={require("../img/logo_conectare.png")} alt="logo"/>
                        </Link>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_toggle">
                                <span className="hamburger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="hamburger-cross">
                                    <span></span>
                                    <span></span>
                                </span>
                            </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                                <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                                    <div className="mega_menu_inner">
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <ul className="dropdown-menu scroll">
                                                
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                
                     
                                {/* <li className="nav-item"><NavLink title="Sobre Nós" className="nav-link" to="/Contact">SOBRE NÓS</NavLink></li>
                                <li className="nav-item"><NavLink title="Curso" className="nav-link" to="/Contact">CURSO</NavLink></li>
                                <li className="nav-item"><NavLink title="Contato" className="nav-link" to="/Contact">CONTATO</NavLink></li> */}
                            </ul>
                            <a className={`btn_get btn_hover ${hbtnClass}`} style={{ hover: {backgroundColor: "blue"}}} href="#get-app">COMECE AGORA</a>
                        </div>
                    </div>
                </nav>
                </header>
            </Sticky>
        );
    }
}

export default CustomNavbar;