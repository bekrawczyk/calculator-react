import React from 'react';
import { Display } from './components/Display/Display';
import { Button } from './components/Button/Button';

import {default as bemCssModules} from 'bem-css-modules'
import {default as AppStyles} from './App.module.scss';

const style = bemCssModules(AppStyles);

function App() {
  return (
    <>
      <div
        className={style()}>
          <Display/>
          <Button content={"Button works"} onClick={() => console.log("and function works too")}/>
      </div>
    </>
  );
}

export default App;
