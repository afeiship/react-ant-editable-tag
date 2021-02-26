import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';
import { Tag, Input, Icon } from 'antd';

const CLASS_NAME = 'react-ant-editable-tag';

export default class ReactAntEditableTag extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * When click close icon.
     */
    onClose: PropTypes.func,
    /**
     * The tag value.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * When value changed.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    onClose: noop,
    onChange: noop
  };

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    const { onChange } = this.props;
    if (value !== this.props.value) {
      onChange({ target: { value } });
    }
    return true;
  }

  render() {
    const {
      className,
      children,
      onClose,
      value,
      onChange,
      ...props
    } = this.props;

    return (
      <Tag className={classNames(CLASS_NAME, className)} {...props}>
        <Input
          ref={(input) => (this.input = input)}
          type="text"
          size="small"
          autoComplete="off"
          value={value}
          onChange={onChange}
          className={`${CLASS_NAME}__input`}
        />
        <Icon type="close" onClick={onClose} />
      </Tag>
    );
  }
}
