import React, { Component } from 'react';
import Unit from './unit';
import Services from '../services';

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      isShowUnits: false,
    }
    this.services = new Services();
  }

  toggleBox() {
    this.setState({isShow: !this.state.isShow});
  }
  showUnits() {
    this.setState({isShowUnits: !this.state.isShowUnits});
  }
  render() {
    const units = Object.keys(this.props.day.data).map((keyName) => {
      return <Unit item={this.props.day.data[keyName]} name={keyName} key={keyName} />
    });
    return (
        <div>
          <div className="row day" onClick={this.toggleBox.bind(this)}>
            <div className="col">ВСЕГО ЗА {this.props.date} ВРЕМЕНИ</div>
            <div className="col">{this.services.secondToStrTime(this.props.day.second)}</div>
          </div>
          <div className={`${this.state.isShow ? '' : 'hidden'}`}>
            <div className={`row units`} onClick={this.showUnits.bind(this)}>
              <div className="col">ЮНИТ (unit_name)</div>
              <div className="col">ЗОНА (zone_name)</div>
              <div className="col">ВРЕМЯ ВХОДА (time_begin)</div>
              <div className="col">ВРЕМЯ ВЫХОДА (time_end)</div>
              <div className="col">ВРЕМЯ НАХОЖДЕНИЯ (duration_in)</div>
            </div>
            <div className={this.state.isShowUnits ? '' : 'hidden'}>
              {units}
            </div>
          </div>
        </div>
    );
  }
}
