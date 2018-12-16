import React, { Component } from "react";
import { Checkbox } from "semantic-ui-react";

class CheckboxExampleToggle extends Component {
  state = {
    check: false
  };
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.checked !== this.state.check
  }
  componentDidUpdate() {
    this.setState({ check: this.props.checked });
  }
  onChangeHandler = () => {
    if (!this.state.check) {
        this.props.onFunction()
    } else {
        this.props.offFunction()
    }
    this.setState(prevState => {
        
      return { check: !prevState.check };
    });
  };
  render() {
    return (
      <Checkbox
        checked={this.state.check}
        onChange={this.onChangeHandler}
        toggle
      />
    );
  }
}

export default CheckboxExampleToggle;
