import React from 'react';

class InfoStreamSide extends React.Component {

  constructor (props) {
    super(props);
  }

  backToTop () {
    window.scrollTo(0, 0);
  }

  render() {
    let activeType = this.props.activeType;

    let sidebars = this.props.data.map(function(item, i) {
      let ck = item.ck.replace(/&quot;/g, '"');
      let hide = item.code.indexOf(activeType) === -1 ? ' hide' : '';
      let className = 'el-link' + hide;

      return (
        <a className={className} href={item.url} data-track="true" data-ck={ck} key={i}>
          <img src={item.picture_url}/>
        </a>  
      );
    });

    return (
      <div className="info-stream-side">
        {sidebars}
        <button className="back-to-top" onClick={this.backToTop}>返回导航顶部</button>
      </div>
    );
  }

};

export default InfoStreamSide;