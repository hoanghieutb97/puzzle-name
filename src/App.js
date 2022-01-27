import React, { useState, useEffect } from 'react';
import * as constants from "./constants";
import Showpuzzle from './components/Showpuzzle';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LetterColor from './components/LetterColor';
import InputName from './components/InPutName';
import AboutItemAndPolicy from './components/AboutItemAndPolicy';
import ArtToCart from './components/ArtToCart';
import GalleryImageBottom from "./components/GalleryImageBottom"



export default function App() {
  const [name, setName] = useState([[], [], []]);
  const [animal, setAnimal] = useState([[], [null, null], [null, null], [null, null], []]); // tren - 1-2 -3-duoi
  const [colorName, setColorName] = useState(constants.ListColor[0]);
  const [peg, setPeg] = useState(false);
  const [price, setPrice] = useState(0);
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [heightLetter, setHeightLetter] = useState(0);



  let arrRow = animal.map(item => item.filter(item2 => item2 !== null));
  arrRow = [arrRow[0], [...arrRow[1], ...name[0]], [...arrRow[2], ...name[1]], [...arrRow[3], ...name[2]], arrRow[4]];
  useEffect(() => {
    let WindowWidth = 0;
    if (window.innerWidth >= 992) WindowWidth = window.innerWidth * 0.75;
    else WindowWidth = window.innerWidth;
    let widthRow = (texLine, animalLine) => {
      let sum = 0;
      texLine.forEach(element => {
        sum = sum + constants.PegPositon[element].wph + 0.091;
      });
      animalLine.forEach(element => {
        sum = sum + 1 + 0.1;
      });
      return sum + 0.5;
    }
    let allW = [widthRow([], animal[0])
      , widthRow(name[0], animal[1].filter(item => item !== null))
      , widthRow(name[1], animal[2].filter(item => item !== null))
      , widthRow(name[2], animal[3].filter(item => item !== null))
      , widthRow([], animal[4])];
    let heightLetter = 0;
    let maxAllW = (Math.max(...allW)).toFixed(4);
    if ((WindowWidth / maxAllW) > 230) heightLetter = 229
    else heightLetter = WindowWidth / maxAllW

    let arrRow = animal.map(item => item.filter(item2 => item2 !== null));
    arrRow = [arrRow[0], [...arrRow[1], ...name[0]], [...arrRow[2], ...name[1]], [...arrRow[3], ...name[2]], arrRow[4]];
    arrRow = arrRow.filter(item => item.length !== 0);

    let WindowHeight = WindowWidth * 0.6;
    let heightLetter2 = (WindowHeight) / (arrRow.length + (arrRow.length + 1) * 0.2);
    if (heightLetter > heightLetter2) setHeightLetter(heightLetter2);
    else setHeightLetter(heightLetter);

  }, [name, animal]);



  let deleteLine = (key) => {
    if (0 <= key && key < 3) {

      let namedefault = [...name];
      namedefault[key] = [];
      setName(namedefault);
    }

    let defaultArrAnimal = [[], [null, null], [null, null], [null, null], []];
    let arrAnimal = [...animal];
    arrAnimal[key + 1] = defaultArrAnimal[key + 1];
    setAnimal(arrAnimal)
  }


  let showAnimal = (nameAnimal, selectAnimal) => {

    let animalNew = [...animal];
    if (selectAnimal[1] === "left") animalNew[selectAnimal[0] + 1][0] = nameAnimal;
    else if (selectAnimal[1] === "right") animalNew[selectAnimal[0] + 1][1] = nameAnimal;
    else if (selectAnimal[1] === "top") animalNew[0][selectAnimal[0]] = nameAnimal;
    else if (selectAnimal[1] === "top-add") animalNew[0] = [...animalNew[0], nameAnimal];
    else if (selectAnimal[1] === "bottom") animalNew[4][selectAnimal[0]] = nameAnimal;
    else if (selectAnimal[1] === "bottom-add") animalNew[4] = [...animalNew[4], nameAnimal];

    setAnimal(animalNew)
  }
  return (
    <div>


      <div className="container-fluid mt-4">
      </div>
      <div className={"container-fluid"}>
        <div className="row">
          <div className="col-12 col-lg-9 po-sticky ">
            {window.innerWidth < 992 ? <ArtToCart animal={animal} name={name} className="cart-mobile" /> : ""}

            <Showpuzzle peg={peg} name={name} colorName={colorName} animal={animal} heightLetter={heightLetter} />

          </div>
          <div className="col-12 col-lg-3">
            <div className="row input-all" setx="input-all">
              <div className="col-12">
                {window.innerWidth >= 992 ? <ArtToCart animal={animal} name={name} /> : ""}

              </div>
              <div className="col-12">
                <Accordion className="back-custom" expanded={expanded === 'panel1'} aria-controls="panel1a-content" id="panel1a-header" onChange={handleChange('panel1')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography> Customize</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* Text & figures */}
                    <InputName setPeg={() => setPeg(!peg)} name={name} animal={animal} showAnimal={(nameAnimal, selectAnimal) => showAnimal(nameAnimal, selectAnimal)} deleteLine={(key) => deleteLine(key)} setName={(param) => setName(param)} />


                    {/* Colors */}
                    <LetterColor colorName={colorName} changeActiveColorName={(colorName) => setColorName(colorName)} />

                    {/* AboutItemAndPolicy */}
                    {/* <AboutItemAndPolicy /> */}
                  </AccordionDetails >
                </Accordion >
              </div>
              {window.innerWidth < 992 ? <GalleryImageBottom /> : ""}

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
