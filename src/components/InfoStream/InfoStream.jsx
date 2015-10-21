import React from 'react';
import InfoStreamHead from './InfoStreamHead.jsx';
import InfoStreamBody from './InfoStreamBody.jsx';
import InfoStreamSide from './InfoStreamSide.jsx';

class InfoStream extends React.Component {

  constructor (props) {
    super(props);
    React.initializeTouchEvents(true);

    let initIndex = this.props.pollPageNumber;
    let data = window[this.props.activeType + 'Data'] || [];
    let adData = window[this.props.activeType + 'AdData'] || [];

    this.state = {
      pageData: data.slice(0, initIndex), 
      adData: adData,
      activeType: this.props.activeType, 
      pageIndex: initIndex
    };

    this.fetch = this.fetch.bind(this);
    this.onTabChange = this.onTabChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  fetch () {
    let data = window[this.state.activeType + 'Data'] || [];
    let index = this.state.pageIndex + this.props.pollPageNumber;
    let pageData = data.slice(0, index);

    var state = {
      pageData: pageData,
      pageIndex: index
    };

    if(index >= data.length) {
      state.isEnd = true;
    }

    this.setState(state);
  }

  onTabChange (tabs) {
    let type = tabs.activeType;
    let data = window[type + 'Data'] || [];
    let adData = window[type + 'AdData'] || [];

    this.setState({
      pageData: data.slice(0, this.props.pollPageNumber),
      activeType: tabs.activeType,
      adData: adData
    }, function() {
      var top = $('#J_infoStream').offset().top;
      window.scrollTo(0, top);  
    });
  }

  handleScroll () {
    let $infoStream = $('#J_infoStream');
    if(window.pageYOffset + window.innerHeight > 
        $infoStream.offset().top + $infoStream.outerHeight()) {
      this.fetch();
    }
  }

  render () {
    let navData = window.tabNavData || [];
    let infoStreamClass = 'info-stream mod' + (navData.length === 0 ? ' hide' : '');
    return (
      <div className={infoStreamClass}>
        <InfoStreamHead 
          data={window.tabNavData || []} 
          onTabChange={this.onTabChange} 
          activeType={this.state.activeType} />
        <InfoStreamSide 
          data={window.infostreamRightadData || []} 
          activeType={this.state.activeType} />
        <InfoStreamBody
          pageData={this.state.pageData}
          adData={this.state.adData} 
          isEnd={this.state.isEnd}
          activeType={this.state.activeType} />
      </div>
    );
  }

};

export default InfoStream;

