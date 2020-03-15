import ReactAntEditableTag from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  state = { value: 'tagvalue' };

  setRandomValue = () => {
    this.setState({
      value: (Math.random() + 'value').slice(0, 5)
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="app-container">
        <button className="button" onClick={this.setRandomValue}>
          SetRandomValue
        </button>
        <ReactAntEditableTag
          value={value}
          onChange={(e) => {
            this.setState({ value: e.target.value });
            console.log(e.target.value);
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
