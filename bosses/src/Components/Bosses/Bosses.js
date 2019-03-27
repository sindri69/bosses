import React from 'react';
import { connect } from 'react-redux';

const Bosses = () => {
  
    return (
        <div>
            <h1>ListBossess</h1>
            <p>yoyoyoyo</p>
        </div>
    )
};

const mapStateToProps = reduxStoreState => {
    return {
      //translations: reduxStoreState.language.navigationLinks
    };
  };
  
export default connect(mapStateToProps)(Bosses);