import React, { Component } from 'react';

class Card extends Component {
  render() {

    const { name, link, label, logo, activity, comment } = this.props.card;
    return (
      <div className="col-md-4">
      <a href={link} target="_blank">
        <div className="card">
          <div className="card-title">
            {name}
          </div>
          <div className="card-body">
            <div className="card-logo">
              <img src={require('../img/'+logo)} alt={name} />
            </div>
            <div className="card-content">
              <div className="card-label">
                {label}
              </div>
              <div className="card-activity">
                {activity}
              </div>
              <div className="card-comment">
                {comment}
              </div>
            </div>
          </div>
        </div>
        </a>
      </div>
    );
  }
}

export default Card;