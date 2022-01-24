import React from 'react';
import * as constants from "./../constants";
import GalleryImageBottom from './GalleryImageBottom';
import * as ColorToArray from "./ColorToArray";

const Showpuzzle = (props) => {
      let name = props.name;
      let colorName = props.colorName;
      let animal = props.animal;
      let noneData = true;
      if ((JSON.stringify(name) !== JSON.stringify([[], [], []])) || (JSON.stringify(animal) !== JSON.stringify([[], [null, null], [null, null], [null, null], []]))) noneData = false

      let PegPositon = constants.PegPositon;

      let textAllLine = "";
      if (!props.noneData) textAllLine = name.map((item, key) => <div className={"one-line" + (((item.length === 0) && (JSON.stringify(animal[key + 1]) === JSON.stringify([null, null]))) ? " oneline-hide" : "")} key={key}>
            {/* animal trai */}
            {(animal[key + 1][0] !== null) ? <div className="ctn-show-animal">
                  <img src={`https://res.cloudinary.com/hieudz/image/upload/v1642654904/puzzle-name/animal/${animal[key + 1][0]}.png`} alt="" className="img-show-animal" />
                  <p className="p-name-animal">{animal[key + 1][0]}</p>
            </div> : ""}
            {/* het animal trai */}

            {item.map((itemChil, keyChill) => <div className="onbe-letter" key={keyChill}>
                  {constants[itemChil](ColorToArray.keyToColorHex(constants[colorName], keyChill))}
                  {props.peg === true ? <img src="https://res.cloudinary.com/hieudz/image/upload/v1642838516/puzzle-name/peg.png" alt="peg" className="peg" style={{ top: PegPositon[itemChil].top + "%", left: PegPositon[itemChil].left + "%" }} /> : ""}
            </div>
            )}



            {/* animal phai */}
            {(animal[key + 1][1] !== null) ? <div className="ctn-show-animal">
                  <img src={`https://res.cloudinary.com/hieudz/image/upload/v1642654904/puzzle-name/animal/${animal[key + 1][1]}.png`} alt="" className="img-show-animal" />
                  <p className="p-name-animal">{animal[key + 1][1]}</p>
            </div> : ""}
            {/* het animal phai */}
      </div >)


      console.log(window.innerWidth);

      return (
            <div className="row" >
                  <div className="col-12 showpuzzle">
                        {(noneData === true) ?
                              <div className="clickstart">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Click to get start !
                              </div>
                              :
                              <div className='ctn-all-line'>
                                    <div className="all-line">
                                          {(animal[0].length !== 0) ?
                                                <div className="ctn-animal-show" >
                                                      {animal[0].map((item, key) => <div key={key} className="ctn-show-animal">
                                                            <img src={`https://res.cloudinary.com/hieudz/image/upload/v1642654904/puzzle-name/animal/${item}.png`} alt="" className="item-animal-show" />
                                                            <p className="p-name-animal">{item}</p>
                                                      </div>)}
                                                </div> : ""
                                          }
                                          {textAllLine}

                                          {(animal[4].length !== 0) ?
                                                <div className="ctn-animal-show" >
                                                      {animal[4].map((item, key) => <div key={key} className="ctn-show-animal">
                                                            <img key={key} src={`https://res.cloudinary.com/hieudz/image/upload/v1642654904/puzzle-name/animal/${item}.png`} alt="" className="item-animal-show" />
                                                            <p className="p-name-animal">{item}</p>
                                                      </div>)}
                                                </div> : ""
                                          }
                                    </div>
                              </div>}
                  </div>
                  <div className="col-12 mt-4">
                        <div className="row">
                              <div className="col-6 flex-gallery">
                                    <p className="title-img-gallery">
                                          Watch the Gallery
                                    </p>
                                    <GalleryImageBottom />
                              </div>
                              <div className="col-6 flex-wearehere">
                                    <p className="we-are-here">
                                          We are here
                                    </p>
                                    <img className='img-w' src="https://res.cloudinary.com/hieudz/image/upload/v1642589261/puzzle-name/Screenshot_57.png" alt="" />
                              </div>

                        </div>
                  </div>
            </div>








      );
};

export default Showpuzzle;