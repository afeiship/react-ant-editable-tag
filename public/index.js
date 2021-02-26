import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntEditableTag from '../src/main';
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
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-ant-editable-tag">
        <button className="button is-primary is-fullwidth mb-2" onClick={this.setRandomValue}>
          SetRandomValue
        </button>
        <ReactAntEditableTag
          value={value}
          onChange={(e) => {
            this.setState({ value: e.target.value });
            console.log(e.target.value);
          }}
        />
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
