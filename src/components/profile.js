import React from 'react';
import { Wishlist } from './wishlist';

class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <div className="profile__avatar">
          <img src={this.props.avatar} alt="Avatar" />
        </div>
        <div className="profile__username">{this.props.username}</div>
        <div className="profile__divider" />

        <Wishlist />
      </div>
    )
  }
}

export default Profile;