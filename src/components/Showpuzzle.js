import React, { useState, useEffect } from 'react';
import * as constants from "./../constants";
import GalleryImageBottom from './GalleryImageBottom';
import * as ColorToArray from "./ColorToArray";

const Showpuzzle = (props) => {
      let heightLetter = props.heightLetter;
      let name = props.name;
      let colorName = props.colorName;
      let animal = props.animal;
      let noneData = true;
      let textEngrave = props.textEngrave;
      let WindowWidth = 0;
      let showBack = props.showBack;
      if (window.innerWidth >= 992) WindowWidth = window.innerWidth * 0.75;
      else WindowWidth = window.innerWidth;


      let styleAnimal = { "maxWidth": heightLetter, "maxHeight": heightLetter }
      if ((JSON.stringify(name) !== JSON.stringify([[], [], []])) || (JSON.stringify(animal) !== JSON.stringify([[], [null, null], [null, null], [null, null], []]))) noneData = false

      let PegPositon = constants.PegPositon;

      let textAllLine = "";
      if (!props.noneData) textAllLine = name.map((item, key) => <div className={"one-line" + (((item.length === 0) && (JSON.stringify(animal[key + 1]) === JSON.stringify([null, null]))) ? " oneline-hide" : "")} key={key}>
            {/* animal trai */}
            {(animal[key + 1][0] !== null) ? <div className="ctn-show-animal" style={styleAnimal}>
                  <img style={styleAnimal} src={`https://res.cloudinary.com/hieudz/image/upload/v1642654904/puzzle-name/animal/${animal[key + 1][0]}.png`} alt="" className="img-show-animal" />
                  <p className="p-name-animal">{animal[key + 1][0]}</p>
            </div> : ""}
            {/* het animal trai */}


            {item.map((itemChil, keyChill) => <div className="onbe-letter" key={keyChill} >
                  {constants[itemChil[0]](itemChil[1], heightLetter)}
                  {props.peg === true ? <img src="https://res.cloudinary.com/hieudz/image/upload/v1642838516/puzzle-name/peg.png" alt="peg" className="peg" style={{ top: PegPositon[itemChil[[0]]].top + "%", left: PegPositon[itemChil[0]].left + "%", width: heightLetter * 0.2 + "px" }} /> : ""}
            </div>
            )}



            {/* animal phai */}
            {(animal[key + 1][1] !== null) ? <div className="ctn-show-animal" style={styleAnimal} >
                  <img style={styleAnimal} src={`https://res.cloudinary.com/hieudz/image/upload/v1642654904/puzzle-name/animal/${animal[key + 1][1]}.png`} alt="" className="img-show-animal" />
                  <p className="p-name-animal">{animal[key + 1][1]}</p>
            </div> : ""}
            {/* het animal phai */}
      </div >)


      // console.log(heightLetter);

      return (
            <div className="row" >
                  <div className={"col-12 " + ((window.innerWidth >= 992) ? " showpuzzle" : " showpuzzle-mobile")} >
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
                                          {(showBack === true) ? <div className="showback">
                                                <p className="text-back">
                                                      {textEngrave}
                                                </p>

                                          </div> : ""}

                                          {(animal[0].length !== 0) ?
                                                <div className="ctn-animal-show" >
                                                      {animal[0].map((item, key) => <div key={key} className="ctn-show-animal" style={styleAnimal} >
                                                            <img style={styleAnimal} src={`https://res.cloudinary.com/hieudz/image/upload/v1642654904/puzzle-name/animal/${item}.png`} alt="" className="item-animal-show" />
                                                            <p className="p-name-animal">{item}</p>
                                                      </div>)}
                                                </div> : ""
                                          }
                                          {textAllLine}

                                          {(animal[4].length !== 0) ?
                                                <div className="ctn-animal-show" >
                                                      {animal[4].map((item, key) => <div key={key} className="ctn-show-animal" style={styleAnimal}>
                                                            <img style={styleAnimal} key={key} src={`https://res.cloudinary.com/hieudz/image/upload/v1642654904/puzzle-name/animal/${item}.png`} alt="" className="item-animal-show" />
                                                            <p className="p-name-animal">{item}</p>
                                                      </div>)}
                                                </div> : ""
                                          }
                                    </div>
                              </div>}
                  </div>

                  {window.innerWidth >= 992 ? <GalleryImageBottom /> : ""}

            </div >








      );
};

export default Showpuzzle;