import React from 'react';

class InfoStreamHead extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    let type = e.target.dataset.type;
    this.props.onTabChange({activeType: type});
  }

  render() {
    let self = this;
    let tabs = self.props.data.map(function(item, i) {
      let selected = item.type === self.props.activeType ? 'active' : '';
      return (
        <li className={selected} onClick={self.handleClick} key={i} data-type={item.type}>
          {item.name}
        </li>
      );
    });
    return (
      <div className="info-stream-head">
        <ul className="tab-nav">
          {tabs}
        </ul>
      </div>
    );
  }

};

export default InfoStreamHead;