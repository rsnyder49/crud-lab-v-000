import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={() => this.props.deleteReview(this.props.review.id)}> Delete </button>
      </div>
    );
  }

};

export default Review;
