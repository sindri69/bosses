import React from 'react';
import NavLinks from '../NavLinks/NavLinks';
import { connect } from 'react-redux';
import { ThemeConsumer } from '../../context/ThemeContext';

const NavigationBar = props => {
    return (
        <ThemeConsumer>
            {
                themeContext => {
                    return (
                        <nav className={`navbar navbar-expand-lg navbar-${themeContext.current} bg-${themeContext.current}`}>
                            <NavLinks />
                
                        </nav>
                    )
                }
            }
        </ThemeConsumer>
    )
};
/*
const mapStateToProps = reduxStoreState => {
    return {
      //translations: reduxStoreState.language.navigationLinks
    };
  };
  */
export default connect(null)(NavigationBar);
