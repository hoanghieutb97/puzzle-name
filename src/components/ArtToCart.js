import React from 'react';
import Button from '@mui/material/Button';

function ArtToCart(props) {
    let animal = [...props.animal];
    let name = [...props.name];
    const p_line = 9;
    const p_text = 3;
    const p_animal = 6;
    const minText1 = 5;
    const mintext2 = 3;
    const minAnimal = 3;
    let tinhTien = (name, p_line, p_text, minText1, mintext2, animal, p_animal, minAnimal) => {
        name = name.sort(function (a, b) {
            return b.length - a.length;
        });
        let giaAnimal = 0;
        if (animal[0].length !== 0) giaAnimal = giaAnimal + p_line + animal[0].length * p_animal - (animal[0].length < minAnimal ? animal[0].length * p_animal : minAnimal * p_animal);
        if (animal[4].length !== 0) giaAnimal = giaAnimal + p_line + animal[4].length * p_animal - (animal[4].length < minAnimal ? animal[4].length * p_animal : minAnimal * p_animal);
        for (let i = 1; i < 4; i++) {
            if (animal[i][0] !== null) giaAnimal = giaAnimal + p_animal;
            if (animal[i][1] !== null) giaAnimal = giaAnimal + p_animal;
        }

        let giaChu = 2 * p_line + (name[1].length > 0 ? p_line : 0) + (name[2].length > 0 ? p_line : 0) + name[0].length * p_text + name[1].length * p_text + name[2].length * p_text - (name[0].length <= minText1 ? name[0].length * p_text : minText1 * p_text) - (name[1].length <= mintext2 ? name[1].length * p_text : mintext2 * p_text) - (name[2].length <= mintext2 ? name[2].length * p_text : mintext2 * p_text)
        return giaChu + giaAnimal
    }
    let tongTien = tinhTien(name, p_line, p_text, minText1, mintext2, animal, p_animal, minAnimal);

    return (
        <div>
            <p className="title-cart">
                Montessori Wooden Hieu Puzzle
            </p>
            <div className="ctn-add-cart">
                <div className="price-cart">
                    <p className="ctn-price-sale">
                        <span className='price-sale'>
                            ${tongTien}
                        </span> 
                        <span className='price-none-sale'>
                            ${tongTien * 2.5}
                        </span>

                    </p>
                    <p className="price-all">
                        You save: ${tongTien * 1.5} (60%)
                    </p>
                </div>
                <Button variant="contained" color="success" className='btn-add-to-cart'>Add To Cart </Button>
             
            </div>
        </div>
    );
}

export default ArtToCart;

