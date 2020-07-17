import React from 'react';
import item from '../item.png';
import discord from '../discord.png';

class Wishlist extends React.Component {
  render() {
    return (
      <div className="wishlist">
        <WishlistItem image={item} title="Omar Little 2020 Shirt" rating="2.5" ratingCount="4,331" price="$20.00" discord={discord} date="December 12, 2020" />

        <WishlistItem image={item} title="All In The Game" rating="5" ratingCount="216" price="$420.00" discord={discord} date="November 6, 2020" />

        <WishlistItem image={item} title="A Man Has To Have A Code" rating="2.5" ratingCount="2,013" price="$20.00" discord={discord} date="March 13, 2020" />
      </div>
    )
  }
}

class WishlistItem extends React.Component {
  render() {
    return (
      <div className="wishlist__item">
        <div className="wishlist__item--image">
          <img src={this.props.image} alt="Item"/>
        </div>
        <div className="wishlist__item--title">{this.props.title}</div>
        <div className="wishlist__item--rating">
          <div className="wishlist__item--rating-star" style={{ width: `calc(2.6rem * ${this.props.rating})` }} />
        </div>
        <div className="wishlist__item--rating-count">{this.props.ratingCount}</div>
        <div className="wishlist__item--price">{this.props.price}</div>
        <div className="wishlist__item--discord-image">
          <img src={this.props.discord} alt="Discord server"/>
        </div>
        <div className="wishlist__item--date">Item added {this.props.date}</div>
      </div>
    )
  }
}

export { Wishlist, WishlistItem };