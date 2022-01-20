import React from 'react';
import * as constants from "./../constants";
import * as ColorToArray from "./ColorToArray";

const Showpuzzle = (props) => {
      let name = props.name;
      let colorName = props.colorName;
      let animal = props.animal;



      let textAllLine = "";
      if (name[0].length !== 0) textAllLine = name.map((item, key) => <div className={"one-line" + ((key !== 0) ? " oneline-mt-1" : "")} key={key}>
            {/* animal trai */}
            {(animal[key + 1][0] !== null) ? <div className="ctn-show-animal">
                  <img src={`https://res.cloudinary.com/hieudz/image/upload/v1642654904/puzzle-name/animal/${animal[key + 1][0]}.png`} alt="" className="img-show-animal" />
            </div> : ""}
            {/* het animal trai */}

            {item.map((itemChil, keyChill) => <div className="onbe-letter" key={keyChill}>
                  {constants[itemChil](ColorToArray.keyToColorHex(constants[colorName], keyChill))}
            </div>
            )}

            {/* animal phai */}
            {(animal[key + 1][1] !== null) ? <div className="ctn-show-animal">
                  <img src={`https://res.cloudinary.com/hieudz/image/upload/v1642654904/puzzle-name/animal/${animal[key + 1][1]}.png`} alt="" className="img-show-animal" />
            </div> : ""}
            {/* het animal phai */}
      </div >)

      return (
            <div className='ctn-all-line'>
                  <div className="all-line">
                        {textAllLine}
                  </div>
            </div>
      );
};

export default Showpuzzle;