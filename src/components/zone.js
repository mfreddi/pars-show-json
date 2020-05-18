import React from 'react';

function Zone(props) {
  return (
    <div className="row unit">
      <div className="col"></div>
      <div className="col">{props.item.zone_name}</div>
      <div className="col">{props.item.time_begin}</div>
      <div className="col">{props.item.time_end}</div>
      <div className="col">{props.item.duration_in}</div>
    </div>
  );
}

export default Zone;
