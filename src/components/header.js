import React from 'react';
import { ReactComponent as AccountLogo } from '../user-circle.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={this.props.logo} alt="Header logo" className="header__logo"/>
        <div className="header__title">{this.props.title}</div>
        <div className="header__account">
          <AccountLogo className="header__account--logo" />
        </div>
      </div>
    )
  }
}

export default Header;