import React from 'react';


function TextBox({textBoxText}) {

    // will need state to capture events

    return (
        <input type="text" class="add-text-box" placeholder={textBoxText}></input>
    );
}

export default TextBox;