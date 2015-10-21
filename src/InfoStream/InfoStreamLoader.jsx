import React from 'react';
import InfoStream from './InfoStream.jsx';

let activeType = window.tabNavData[0] ? window.tabNavData[0].type : 'news';

let infoStreamInstance = React.render(
  <InfoStream pollPageNumber={9} activeType={activeType} />,
  document.getElementById('J_infoStream')
);

export default infoStreamInstance;