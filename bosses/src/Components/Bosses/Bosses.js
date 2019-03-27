import React from 'react';
import { connect } from 'react-redux';
import ListBosses from '../ListBosses/ListBosses';

// Hér þarf að vera get bossess eins og á Piazza, og skoða server draslið, þá vantar bossService 
//import { getBosses } from '../../services/newsService';


const Bosses = () => {
/*
    componentDidMount() {
        var bosses =  getBosses ();
        this.setState({
            bosses: bosses
        });
    }

    constructor() {
        super();
        this.state = {
            bosses: [],
        };
    }
  */
    return (
        <div>
            <h1>ListBossess</h1>
            <p>yoyoyoyo</p>
         
        </div>
    )
};
//           eftir yoyo :  <ListBosses list={ this.state.bosses } />

const mapStateToProps = reduxStoreState => {
    return {
      //translations: reduxStoreState.language.navigationLinks
    };
  };
  
export default connect(mapStateToProps)(Bosses);