import React, { useState, useEffect } from 'react';
import * as constants from "./constants";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export default function App() {
  const [name, setName] = useState([[]]);
  const [price, setPrice] = useState(0);
  let changeLineName = (value, key) => {
    let arrValue = value.split("");
    let namedefault = [...name];
    namedefault[key] = arrValue;
    setName(namedefault)
  }
  let deleteLine = (key) => {
    let namedefault = [...name];
    namedefault.splice(key, 1);
    if (namedefault.length === 0) namedefault = [[]]
    setName(namedefault)
  }
  console.log(name);
  return (
    <div>
      <div className="container-fluid">
        {name.join("")}
        <div className="hjghj">
          {constants.b}

        </div>
        <svg class="symb">
          {constants.a}
        </svg>

      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            custom-image
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col-12">

              </div>
              <div className="col-12">
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography> Customize</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* Text & figures */}
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography> Text & figures</Typography>
                      </AccordionSummary>
                      <AccordionDetails>

                        {name.map((item, key) => <p key={key}>
                          <span className="input">
                            <input type="text" placeholder="Name Here ..." onChange={(e) => changeLineName(e.target.value, key)} value={name[key].join("")} />
                            <span>
                            </span>
                          </span>
                          <svg onClick={() => (deleteLine(key))} data-v-3af7fc61="" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="trash-line">
                            <path data-v-3af7fc61="" d="M14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1ZM1 4V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1Z" fill="#BCBCBC"></path>
                          </svg>
                          <Button variant="outlined" className="btn-addline" onClick={() => setName([...name, []])}>add line</Button>
                        </p>)
                        }




                      </AccordionDetails>
                    </Accordion>

                    {/* Colors */}
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography> Colors</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>


                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="col-12">
                About this item
              </div>
              <div className="col-12">
                Shipping & Return Policy
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
