import React from 'react';
import { connect } from 'react-redux';

const About = () => {
  
    return (
        <div>
            <h1>Home</h1>
            <p>yoyoyoyo</p>
        </div>
    )
};

const mapStateToProps = reduxStoreState => {
    return {
      //translations: reduxStoreState.language.navigationLinks
    };
  };
  
export default connect(mapStateToProps)(About);
