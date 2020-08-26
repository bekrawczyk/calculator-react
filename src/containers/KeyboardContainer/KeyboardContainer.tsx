import React from 'react';
import { Button } from '../../components/Button/Button';

import {default as bemCssModules} from 'bem-css-modules';
import {default as KeyboardContainerStyle} from './KeyboardContainer.module.scss';

const style = bemCssModules(KeyboardContainerStyle);

export const KeyboardContainer: React.FC = () => {
    return(
        <div className={style()}>
          <Button content={"%"} onClick={() => console.log("and function works too")} />
          <Button content={"CE"} onClick={() => console.log("and function works too")} />
          <Button content={"C"} onClick={() => console.log("and function works too")} />
          <Button content={"<="} onClick={() => console.log("and function works too")} />

          <Button content={"1/x"} onClick={() => console.log("and function works too")} />
          <Button content={"x^2"} onClick={() => console.log("and function works too")} />
          <Button content={"sqrt"} onClick={() => console.log("and function works too")} />
          <Button content={"/"} onClick={() => console.log("and function works too")} />

          <Button content={"7"} onClick={() => console.log("and function works too")} />
          <Button content={"8"} onClick={() => console.log("and function works too")} />
          <Button content={"9"} onClick={() => console.log("and function works too")} />
          <Button content={"x"} onClick={() => console.log("and function works too")} />

          <Button content={"4"} onClick={() => console.log("and function works too")} />
          <Button content={"5"} onClick={() => console.log("and function works too")} />
          <Button content={"6"} onClick={() => console.log("and function works too")} />
          <Button content={"-"} onClick={() => console.log("and function works too")} />
          
          <Button content={"1"} onClick={() => console.log("and function works too")} />
          <Button content={"2"} onClick={() => console.log("and function works too")} />
          <Button content={"3"} onClick={() => console.log("and function works too")} />
          <Button content={"+"} onClick={() => console.log("and function works too")} />

          <Button content={"+/-"} onClick={() => console.log("and function works too")} />
          <Button content={"0"} onClick={() => console.log("and function works too")} />
          <Button content={"."} onClick={() => console.log("and function works too")} />
          <Button content={"="} onClick={() => console.log("and function works too")} />
 
        </div>
    )
}