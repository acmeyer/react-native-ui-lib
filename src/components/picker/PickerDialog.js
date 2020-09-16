import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {BaseComponent} from '../../commons';
import Dialog from '../dialog';
import View from '../view';
import Text from '../text';
import {Colors} from '../../style';
import {WheelPicker} from '../../nativeComponents';

class PickerDialog extends BaseComponent {
  static displayName = 'IGNORE';
  static propTypes = {
    selectedValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    wheelPickerProps: PropTypes.object,
    onValueChange: PropTypes.func,
    onDone: PropTypes.func,
    onCancel: PropTypes.func,
    topBarProps: PropTypes.object,
    children: PropTypes.array,
    selectLabelStyle: PropTypes.object,
    cancelLabelStyle: PropTypes.object,
  };

  state = {};

  renderHeader() {
    const {onDone, onCancel, topBarProps, cancelLabelStyle, selectLabelStyle} = this.props;

    return (
      <View style={[styles.header, topBarProps.style]}>
        <Text text70 blue30 onPress={onCancel} accessibilityRole={onCancel ? 'button' : undefined} style={cancelLabelStyle}>
          {_.get(topBarProps, 'cancelLabel', 'Cancel')}
        </Text>
        <Text text70 blue30 onPress={onDone} accessibilityRole={onDone ? 'button' : undefined} style={selectLabelStyle}>
          {_.get(topBarProps, 'doneLabel', 'Done')}
        </Text>
      </View>
    );
  }

  renderPicker() {
    const {children, onValueChange, selectedValue, renderNativePicker, wheelPickerProps} = this.props;
    if (_.isFunction(renderNativePicker)) {
      return renderNativePicker(this.props);
    }
    return (
      <WheelPicker onValueChange={onValueChange} selectedValue={selectedValue} {...wheelPickerProps}>
        {children}
      </WheelPicker>
    );
  }

  render() {
    const dialogProps = Dialog.extractOwnProps(this.props);
    return (
      <Dialog {...dialogProps} height={250} width="100%" migrate bottom animationConfig={{duration: 300}}>
        <View flex bg-white>
          {this.renderHeader()}
          <View centerV centerH flex>
            {this.renderPicker()}
          </View>
        </View>
      </Dialog>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 44,
    backgroundColor: Colors.dark80,
    paddingHorizontal: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default PickerDialog;
