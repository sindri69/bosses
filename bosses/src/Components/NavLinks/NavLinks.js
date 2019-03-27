import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const NavLinks = props => {
    const { Home, Bosses } = props;
    return (
        <ul className="navbar-nav mr-auto">
            <button className="btn btn-primary"> Home 
                <NavLink exact to="/" className="nav-link">{ Home }</NavLink>
            </button>
            <button className="btn btn-danger"> Bosses
                <NavLink to="/bosses" className="nav-link">{ Bosses }</NavLink>
            </button>
        </ul>
    );
};

const mapStateToProps = reduxStoreState => {
    return {
      //translations: reduxStoreState.language.navigationLinks
    };
  };
  

export default connect(mapStateToProps)(NavLinks);