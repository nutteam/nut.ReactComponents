jest.dontMock('./../../src/components/InfoStream/InfoStream.jsx');

import React from 'react/addons';
const InfoStream = require('./../../src/components/InfoStream/InfoStream.jsx');
let TestUtils = React.addons.TestUtils;

describe('InfoStream', () => {

  it('data load', () => {

    window.shoppingData = [{
      "id": "207590",
      "code": "m_fc631906-8908-454c-a3c5-973ce92a95a2",
      "name": "艾美 金边玫瑰花茶 云南 纯天然 丽江玫瑰花草茶 铁罐 90g",
      "url": "http://s.click.taobao.com/t?e=m%3D2%26s%3D6N8tc8H0PpAcQipKwQzePOeEDrYVVa64K…DBfxy0jQzH38SBotUhdXnqeGQxuAZkMvfeUUl6%2F7pA%3D%3D&uc_biz_tag=super_rebate",
      "parentid": "207585",
      "position": "1-1",
      "picture_url": "http://img01.taobaocdn.com:80/tfscom/i4/TB1SHDPJXXXXXXYXXXXXXXXXXXX_!!0-item_pic.jpg_310x310",
      "iframe_src": null,
      "type": "2",
      "color": "#6b6b6b",
      "treecode": "10011000100110011000",
      "children": null,
      "attributes": {
        "discount": 1497,
        "price": 26
      },
      "ck": "{&quot;id&quot;:&quot;207590&quot;,&quot;ck_name&quot;:&quot;艾美 金边玫瑰花茶 云南 纯天然 丽江玫瑰花草茶 铁罐 90g&quot;,&quot;ck_po&quot;:&quot;1-1&quot;,&quot;pg&quot;:&quot;UC123_PAD-UC123首页PAD-首页工具&quot;,&quot;ck_rg&quot;:&quot;超级返数据&quot;}"
    }];

    window.tabNavData = [{
      "name": "视频",
      "type": "video"
    }, {
      "name": "资讯",
      "type": "news"
    }, {
      "name": "购物",
      "type": "shopping"
    }, {
      "name": "笑话",
      "type": "fun"
    }, {
      "name": "美女",
      "type": "beauty"
    }];

    window.infostreamRightadData = [{
      "id": "207595",
      "code": "m_info_stream_float_ad",
      "name": "信息流右侧悬浮广告",
      "url": "browser.taobao.com/ops/fan.htm",
      "parentid": "207594",
      "position": "",
      "picture_url": "http://i3.letvimg.com/lc03_isvrs/201505/12/15/49/05b7bc91-b348-4f7c-a779-fbe40d211c78.jpg",
      "iframe_src": "",
      "type": "2",
      "color": "#6b6b6b",
      "treecode": "10011000100010171000",
      "children": null,
      "attributes": null,
      "ck": "{&quot;id&quot;:&quot;207595&quot;,&quot;ck_name&quot;:&quot;信息流右侧悬浮广告&quot;,&quot;ck_po&quot;:&quot;&quot;,&quot;pg&quot;:&quot;UC123_PAD-UC123首页PAD-首页首部&quot;,&quot;ck_rg&quot;:&quot;信息流&quot;}"
    }];

    
    let infoStream = TestUtils.renderIntoDocument(
      <InfoStream pollPageNumber={9} activeType="shopping" data={window.shoppingData || []} />
    );


    let infoStreamNode = React.findDOMNode(infoStream);

    expect(infoStreamNode.children.length).toEqual(3);
    expect(infoStreamNode.className).toContain('info-stream');
    
  });

});
