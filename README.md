# react-ant-editable-tag
> Editable tag for ant.

## installation
```shell
npm install -S @feizheng/react-ant-editable-tag
```

## update
```shell
npm update @feizheng/react-ant-editable-tag
```

## properties
| Name      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | The extended className for component. |
| onClose   | func   | noop    | When click close icon.                |
| value     | union  | -       | The tag value.                        |
| onChange  | func   | noop    | When value changed.                   |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-editable-tag/dist/style.scss";

  // customize your styles:
  $react-ant-editable-tag-options: ()
  ```
2. import js
  ```js
  import ReactAntEditableTag from '@feizheng/react-ant-editable-tag';
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

  ```

## documentation
- https://afeiship.github.io/react-ant-editable-tag/
