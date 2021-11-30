import React from 'react';

import { SectionHeader, SectionMain } from '../sections';

function MainPage(): React.ReactElement {
  return (
    <div className="page page--gray page--main">
      <SectionHeader />
      <SectionMain />
    </div>
  );
}

export default MainPage;
