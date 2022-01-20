import React from 'react';
import * as constants from "./../constants";
import * as ColorToArray from "./ColorToArray";

const Showpuzzle = (props) => {
      let name = props.name;
      let colorName = props.colorName;
      // console.log(name);


      let textAllLine = "";
      if (name[0].length !== 0) textAllLine = name.map((item, key) => <div className={"one-line" + ((key !== 0) ? " oneline-mt-1" : "")} key={key}>
            {item.map((itemChil, keyChill) => <div className="onbe-letter" key={keyChill}>
                  {constants[itemChil](ColorToArray.keyToColorHex(constants[colorName], keyChill))}
            </div>)
            }
      </div >)
      // console.log(name);
      return (
            <div className='ctn-all-line'>
                  <div className="all-line">
                        {textAllLine}
                  </div>
            </div>
      );
};

export default Showpuzzle;