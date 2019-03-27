import React from 'react';
import { connect } from 'react-redux';

const Home = () => {
  
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
  
  export default connect(mapStateToProps)(Home);

/*
class Home extends React.Component {

    render() {
        return (
            <div>
               looool
            </div>
        )
    };
};

export default Home;*/