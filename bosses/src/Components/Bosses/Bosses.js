import React from 'react';
import { connect } from 'react-redux';
import ListBosses from '../ListBosses/ListBosses';
import { getAllBosses } from '../../actions/bossActions.js';
import BossViewItem from '../BossViewItem/BossViewItem';
// Hér þarf að vera get bossess eins og á Piazza, og skoða server draslið, þá vantar bossService 
//import { getBosses } from '../../services/newsService';

const Bosses = ({ boss }) => {



       //this.props.getAllBosses();

// í return                 getAllBossess => getAllBossess.list.map(boss => <BossViewItem key ={ boss.id } {... boss.id} />)
    
  
   // const{ boss } = this.props;
    return (
        <div>
            <h1>ListBossess</h1>
            <div>
            </div>
            <p>yoyoyoyo</p>
         
        </div>
    )
};
//           eftir yoyo :  <ListBosses list={ this.state.bosses } />

const mapStateToProps = reduxStoreState => {
    return {
      //translations: reduxStoreState.language.navigationLinks
      //boss
    };
  };
  
export default connect(mapStateToProps)(Bosses);