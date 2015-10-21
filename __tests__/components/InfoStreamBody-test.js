jest.dontMock('./../../src/components/InfoStream/InfoStreamBody.jsx');

import React from 'react/addons';
const InfoStreamBody = require('./../../src/components/InfoStream/InfoStreamBody.jsx');
let TestUtils = React.addons.TestUtils;

describe('InfoStreamBody', () => {

  it('data load', () => {

    window.pageData = [{
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
    },
    {
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
    },
    {
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

    window.adData = [
      {
        attributes: null,
        children: null,
        ck: "{&quot;id&quot;:&quot;219673&quot;,&quot;ck_name&quot;:&quot;购物头部banner&quot;,&quot;ck_po&quot;:&quot;1&quot;,&quot;pg&quot;:&quot;UC123_PAD-UC123首页PAD-首页首部&quot;,&quot;ck_rg&quot;:&quot;信息流-信息流内容广告&quot;}",
        code: "m_info_stream_ad_shopping",
        color: "#6b6b6b",
        id: "219673",
        iframe_src: "",
        name: "购物头部banner",
        parentid: "219670",
        picture_url: "http://gtd.alicdn.com/tfscom/TB1X50RKXXXXXcyXpXXwu0bFXXX",
        position: "1",
        treecode: "100110001000102010001001",
        type: "1",
        url: "http://brand.egou.com/?&chn=chn=C-uc-ipad&hmsr=C-uc-ipad&hmmd=pic&hmpl=bl"
      }
    ];


    
    let infoStreamBody = TestUtils.renderIntoDocument(
      <InfoStreamBody pageData={pageData} adData={adData} activeType="shopping" />
    );

    let infoStreamBodyNode = React.findDOMNode(infoStreamBody);

    expect(infoStreamBodyNode.children.length).toEqual(5);
    expect(infoStreamBodyNode.firstChild.className).toContain('top-ad');
    expect(infoStreamBodyNode.className).toContain('info-stream-body');
    expect(infoStreamBodyNode.querySelectorAll('.el-content').length).toEqual(3);

    
  });

});
