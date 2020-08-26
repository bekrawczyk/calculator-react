import React from 'react';
import { Display } from './components/Display/Display';
import { Button } from './components/Button/Button';
import { MemoryContainer } from './containers/MemoryContainer/MemoryContainer';

import {default as bemCssModules} from 'bem-css-modules'
import {default as AppStyles} from './App.module.scss';
import { KeyboardContainer } from './containers/KeyboardContainer/KeyboardContainer';

const style = bemCssModules(AppStyles);

function App() {
  return (
    <>
      <div
        className={style()}>
          <Display/>
          <MemoryContainer/>
          <KeyboardContainer/>
      </div>
    </>
  );
}

export default App;
