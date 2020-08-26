import React from 'react';
import { Button } from '../../components/Button/Button';

import {default as bemCssModules} from 'bem-css-modules';
import {default as MemoryContainerStyle} from './MemoryContainer.module.scss';

const style = bemCssModules(MemoryContainerStyle);

export const MemoryContainer: React.FC = () => {
    return(
        <div className={style()}>
          <Button content={"MC"} onClick={() => console.log("and function works too")} isMemory/>
          <Button content={"MR"} onClick={() => console.log("and function works too")} isMemory/>
          <Button content={"M+"} onClick={() => console.log("and function works too")} isMemory/>
          <Button content={"M-"} onClick={() => console.log("and function works too")} isMemory/>
          <Button content={"MS"} onClick={() => console.log("and function works too")} isMemory/>
        </div>
    )
}