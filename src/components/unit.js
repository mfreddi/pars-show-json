import React, { Component } from 'react';
import Services from '../services';
import Zone from './zone';

export default class Unit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowZone: false,
    }
    this.services = new Services();
  }
  showZone() {
    this.setState({isShowZone: !this.state.isShowZone});
  }
  render() {
    const zones = this.props.item.map((item) => {
      return <Zone item={item} />
    });
    const time = this.services.getMinMaxToime(this.props.item);
    return (
      <div>
        <div className={`row units`} onClick={this.showZone.bind(this)}>
          <div className="col">{this.props.name}</div>
          <div className="col"></div>
          <div className="col">МИН В ДЕНЬ ПО ЮНИТУ: {this.services.secondToStrTime(time.min)}</div>
          <div className="col">МАКС В ДЕНЬ ПО ЮНИТУ: {this.services.secondToStrTime(time.max)}</div>
          <div className="col">ОБЩЕЕ В ДЕНЬ ПО ЮНИТУ: {this.services.getGroupTime(this.props.item)}</div>
        </div>
        <div className={`${this.state.isShowZone ? '' : 'hidden'}`}>{zones}</div>
      </div>
      );
  }
};
