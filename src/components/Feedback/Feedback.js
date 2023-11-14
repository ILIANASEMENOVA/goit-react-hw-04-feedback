import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return ((good * 100) / total).toFixed(0);
  };
  handleClick = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  render() {
    const keys = Object.keys(this.state);

    const buttonsList = keys.map(key => (
      <li key={key}>
        <button type="button" onClick={() => this.handleClick(key)}>
          {key}
        </button>
      </li>
    ));

    return (
      <div>
        <h2> Please leave feedback</h2>
        <div>
          <ul>{buttonsList}</ul>
        </div>
      </div>
    );
  }
}
