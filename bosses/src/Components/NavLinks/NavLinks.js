import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const NavLinks = props => {
    const { Home, Bosses } = props;
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link">{ Home }</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/bosses" className="nav-link">{ Bosses }</NavLink>
            </li>
        </ul>
    );
};

const mapStateToProps = reduxStoreState => {
    return {
      //translations: reduxStoreState.language.navigationLinks
    };
  };
  

export default connect(mapStateToProps)(NavLinks);