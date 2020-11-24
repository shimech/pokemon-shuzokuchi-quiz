import React from "react";

const maxTime = 3000;
const interval = 1000;

class ErrorPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: Math.floor(maxTime / interval),
    };

    this.countDown = this.countDown.bind(this);
    this.backToHome = this.backToHome.bind(this);
    setInterval(this.countDown, interval);
    setTimeout(this.backToHome, maxTime);
  }

  countDown() {
    this.setState((state) => ({ time: state.time - 1 }));
  }

  backToHome() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="ErrorPage">
        <h1 className="error-title">
          エラーが起こりました。{this.state.time}
          秒後にホームへ戻ります。
        </h1>
      </div>
    );
  }
}

export default ErrorPage;
