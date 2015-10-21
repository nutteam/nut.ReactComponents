import React from 'react';

class InfoStreamBody extends React.Component {

  constructor (props) {
    super(props);
  }

  mixin (target, params) {
    let ret = [];
    for(let i = 0, targetLen = target.length; i < targetLen; i++) {
      let targetItem = target[i];

      for(let j = 0, paramLen = params.length; j < paramLen; j++) {
        let paramItem = params[j];
        let position = parseInt(paramItem.position);
        if(this.props.activeType === 'shopping') {
          position *= 3;
        }
        if(position === i) {
          ret.push(paramItem);
          break;
        }
      }

      ret.push(targetItem);
    }

    return ret;
  }

  render() {
    let self = this;

    let topAdData = self.props.adData;
    let smallImgAdData = self.props.adData[0] && self.props.adData[0].children 
        ? self.props.adData[0].children : [];

    let topAd;
    if(topAdData.length) {
      topAdData = topAdData[0];
      topAd = (
        <div className="top-ad" data-activetype={self.props.activeType}>
          <a className="el-link" href={topAdData.url} data-track="true" 
              data-ck={topAdData.ck.replace(/&quot;/g, '"')}>
            <img src={topAdData.picture_url}/>
          </a>
        </div>
      );
    } else {
      topAd = '';
    }
    

    let mixinedData = self.mixin(self.props.pageData, smallImgAdData);

    let elList = mixinedData.map(function(item, i) {

      let ck = item.ck.replace(/&quot;/g, '"');

      if(item.code.match(/_ad_/)) {
        return (
          <div className="smallimg-ad" data-activetype={self.props.activeType}>
            <a className="el-link" href={item.url} data-track="true" data-ck={ck}>
              <img src={item.picture_url}/>
            </a>
          </div>
        );
      } else {
        if (self.props.activeType !== 'shopping') {
          let author_name = item.attributes ? item.attributes.author_name : '';
          let date = item.attributes ? item.attributes.date : '';
        
          return (
            <div className="main-content" key={i}>
              <a className="el-link" href={item.url} data-track="true" data-ck={ck}>
                <img className="media-head" src={item.picture_url}/>
                <div className="media-body">          
                  <h3>{item.name}</h3>
                  <p className="assist">
                    <span>{author_name}</span>
                    <span>{date}</span>
                  </p>
                </div>
              </a>
            </div>
          );
        } else {
          let price = item.attributes ? item.attributes.price : 0;
          let discount = item.attributes ? item.attributes.discount / 100 : 0;
          let backrate = parseInt(discount / price * 100);

          return (
            <div className="el-content" key={i}>
              <a className="el-link" href={item.url} data-track="true" data-ck={ck}>
                <img className="media-head" src={item.picture_url}/>
                <h3 className="title">{item.name}</h3>
                <p className="now-money">￥{price}</p>
                <p className="back-money">
                  <span className="diff">-{discount}</span>
                  <span className="text">购买后返{backrate}%</span>
                </p>
                <i className="rob">马上抢</i>
              </a>
            </div>
          );
        }
      }
      
    });

    let loadingHTML;
    if(this.props.isEnd) {
      loadingHTML = '';
    } else {
      loadingHTML = 
        <div className="loading-wrapper">
          <i className="loading"></i>
        </div>;
    }

    return (
      <div className="info-stream-body" id="J_swipeTabContent" key={this.props.activeType}>
        {topAd}
        {elList}
        {loadingHTML}
      </div>
    );
  }

};

export default InfoStreamBody;