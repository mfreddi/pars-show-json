class Services {
  createNewData(data) {
    const newObj = {};
    data.forEach(i => {
      i.data.forEach(day => {
        const date = this.getDate(day.time_end);
        if(!newObj[i.group_name]){
          newObj[i.group_name] = {second: 0, data: {}};
        }
        if(!newObj[i.group_name].data[date]){
          newObj[i.group_name].data[date] = {second: 0, data: {}};
        }
        if (!newObj[i.group_name].data[date].data[i.unit_name]) {
          newObj[i.group_name].data[date].data[i.unit_name] = [day];
        } else {
          newObj[i.group_name].data[date].data[i.unit_name].push(day);
        }
        newObj[i.group_name].second = newObj[i.group_name].second + this.timeToSecond(day.duration_in);
        newObj[i.group_name].data[date].second = newObj[i.group_name].data[date].second + this.timeToSecond(day.duration_in);
      });
    });
    return newObj;
  }
  getDate(dateSrt) {
    const date = new Date(dateSrt);
    const dd = `0${date.getDate()}`.slice(-2);
    const mm = `0${date.getMonth() + 1}`.slice(-2);
    const yy = date.getFullYear() % 100;
    return `${dd}.${mm}.${yy}`;
  }
  timeToSecond(timeStr) {
    const days = timeStr.split(' days ');
    let hDay = 0;
    let times = timeStr;
    if (days.length > 1) {
      hDay = (+days[0]) * 24;
      times = days[1];
    }
    const time = times.split(':');
    const minute = ((+time[0]) * 60) + (+time[1]) + hDay;
    return (minute * 60) + (+time[2]);
  }
  secondToStrTime(sec) {
    const days = Math.trunc(sec / 86400);
    let remainder = sec - days * 86400;
    const houres = Math.trunc(remainder / 3600);
    remainder = sec - houres * 3600;
    const minute = Math.trunc(remainder / 60);
    const second = sec - minute * 60;
    return `${days ? (days + ' days '): ''}${`0${houres}`.slice(-2)}:${`0${minute}`.slice(-2)}:${`0${second}`.slice(-2)}`;
  }
  getGroupTime(group) {
    const time = group.reduce((sum, item) => sum + this.timeToSecond(item.duration_in), 0);
    return this.secondToStrTime(time);
  }
  getMinMaxToime(arr) {
    let min = this.timeToSecond(arr[0].duration_in);
    let max = this.timeToSecond(arr[0].duration_in);
    arr.forEach(i => {
      const second = this.timeToSecond(i.duration_in);
      if (min > second) {
        min = second
      }
      if (max < second) {
        max = second
      }
    });
    return {min, max};
  }
}
export default Services;