# react-ant-editable-tag
> Editable tag for ant.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S antd@3
npm install -S @jswork/react-ant-editable-tag
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| onClose   | func   | false    | noop    | When click close icon.                |
| value     | union  | false    | -       | The tag value.                        |
| onChange  | func   | false    | noop    | When value changed.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-editable-tag/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-editable-tag/dist/style.scss";

  // customize your styles:
  $react-ant-editable-tag-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntEditableTag from '@jswork/react-ant-editable-tag';
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

  ```

## documentation
- https://afeiship.github.io/react-ant-editable-tag/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-editable-tag/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-editable-tag
[version-url]: https://npmjs.org/package/@jswork/react-ant-editable-tag

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-editable-tag
[license-url]: https://github.com/afeiship/react-ant-editable-tag/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-editable-tag
[size-url]: https://github.com/afeiship/react-ant-editable-tag/blob/master/dist/react-ant-editable-tag.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-editable-tag
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-editable-tag
