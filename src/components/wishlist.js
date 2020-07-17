import React from 'react';
import item from '../item.png';
import discord from '../discord.png';

class Wishlist extends React.Component {
  render() {
    return (
      <div className="wishlist">
        <WishlistItem image={item} title="Omar Little 2020 Shirt" rating="2.5" price="$20.00" discord={discord} date="December 12, 2020" />

        <WishlistItem image="https://lh3.googleusercontent.com/proxy/C-ApXSPIPI1FNoZGneDe1O1OFSJAEieLCCdKQ-sFLVArhhToJ-yNaq8a3Tkb8F_QYZjY2-L6Fm8EsR4Ln4F-PdMLuq2gTAzQ-FdyVy29Kps105gtCPBcZFhTB8qRLrCULvDk3TTVZxHXMYlmybSOSjGTwcw" 
        title="Black Betty" rating="5" price="$420.00" discord={discord} date="December 10, 2020" />

        <WishlistItem image={item} title="Omar Little 2020 Shirt" rating="2.5" price="$20.00" discord={discord} date="December 12, 2020" />
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
          <div className="wishlist__item--rating-star" style={{ width: `calc(2.6rem * ${this.props.rating})` }}>
          </div>
        </div>
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