import React, { Component } from 'react';
import Day from './days';
import Services from '../services';

export default class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    }
    this.services = new Services();
  }
  toggleBox() {
    this.setState({isShow: !this.state.isShow});
  }

  render() {
    const props = this.props;
    const dayLine = Object.keys(props.group.data).map((keyName) => <Day key={keyName} date={keyName} day={props.group.data[keyName]} />)
    return (
      <div>
        <div className=" row group" onClick={this.toggleBox.bind(this)}>
          <div className="col"> ВСЕГО ПО {props.group_name} ВРЕМЕНИ:</div>
          <div className="col">{this.services.secondToStrTime(props.group.second)}</div>
        </div>
        <div className={this.state.isShow ? '' : 'hidden'}>
          {dayLine}
        </div>
      </div>
    );
  }
}
