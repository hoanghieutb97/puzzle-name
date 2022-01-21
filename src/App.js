import React, { useState, useEffect } from 'react';
import * as constants from "./constants";
import Showpuzzle from './components/Showpuzzle';
import GallerySelectAnimal from './components/GallerySelectAnimal'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LetterColor from './components/LetterColor';
import GalleryImageBottom from './components/GalleryImageBottom';
import InputName from './components/InPutName';
import AboutItemAndPolicy from './components/AboutItemAndPolicy';
import ArtToCart from './components/ArtToCart';
export default function App() {
  const [name, setName] = useState([[], [], []]);
  const [animal, setAnimal] = useState([[], [null, null], [null, null], [null, null], []]); // tren - 1-2 -3-duoi
  const [colorName, setColorName] = useState(constants.ListColor[0]);

  const [price, setPrice] = useState(0);
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  let deleteLine = (key) => {
    let namedefault = [...name];
    console.log(key);

    namedefault[key]=[];
    setName(namedefault)
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
  // console.log(name);
  return (
    <div>


      <div className="container-fluid mt-4">
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col-12 showpuzzle">
                <Showpuzzle name={name} colorName={colorName} animal={animal} />
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
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col-12">
                <ArtToCart animal={animal} name={name} />
              </div>
              <div className="col-12">
                <Accordion className="back-custom" expanded={expanded === 'panel1'} aria-controls="panel1a-content" id="panel1a-header" onChange={handleChange('panel1')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography> Customize</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* Text & figures */}
                    <InputName name={name} animal={animal} showAnimal={(nameAnimal, selectAnimal) => showAnimal(nameAnimal, selectAnimal)} deleteLine={(key) => deleteLine(key)} setName={(param) => setName(param)} />



                    {/* Colors */}
                    <LetterColor colorName={colorName} changeActiveColorName={(colorName) => setColorName(colorName)} />

                    {/* AboutItemAndPolicy */}
                    {/* <AboutItemAndPolicy /> */}
                  </AccordionDetails >
                </Accordion >
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
