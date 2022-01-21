import React from 'react';

function ArtToCart(props) {
    let animal = [...props.animal];
    let name = [...props.name];
    const p_line = 9;
    const p_text = 3;
    const p_animal = 6;
    const minText1 = 5;
    const mintext2 = 3;
    let tinhTienChu = (name, p_line, p_text, minText1, mintext2) => {
        name = name.sort(function (a, b) {
            return b.length - a.length;
        });
        let giaChu = 2 * p_line + (name[1].length > 0 ? p_line : 0) + (name[2].length > 0 ? p_line : 0) + name[0].length * p_text + name[1].length * p_text + name[2].length * p_text - (name[0].length <= minText1 ? name[0].length * p_text : minText1 * p_text) - (name[1].length <= mintext2 ? name[1].length * p_text : mintext2 * p_text) - (name[2].length <= mintext2 ? name[2].length * p_text : mintext2 * p_text)
        return giaChu
    }
    console.log(name);
    console.log(tinhTienChu(name, p_line, p_text, minText1, mintext2));
    return (
        <div>
            <p className="title-cart">
                Montessori Wooden Hieu Puzzle
            </p>
            <div className="ctn-add-cart">
                <div className="price-cart">
                    <p className="price-salse">

                    </p>
                    <p className="price-all">

                    </p>
                </div>
                <div className="ctn-bt-add">
                    button add
                </div>
            </div>
        </div>
    );
}

export default ArtToCart;


