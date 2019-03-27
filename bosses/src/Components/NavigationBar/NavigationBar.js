import React from 'react';
import NavLinks from '../NavLinks/NavLinks';
import { connect } from 'react-redux';


const NavigationBar = props => {

    return (
        <nav>
            <NavLinks />
            <div className="btn-group">
            </div>
        </nav>
    )
};

const mapStateToProps = reduxStoreState => {
    return {
      //translations: reduxStoreState.language.navigationLinks
    };
  };
  
export default connect(mapStateToProps)(NavigationBar);
