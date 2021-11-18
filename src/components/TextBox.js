import React from 'react';


function TextBox({textBoxText, setValue}) {
    return (
        <input type="text" class="add-text-box" placeholder={textBoxText} onChange={e => setValue(e.target.value)}></input>
    );
}

export default TextBox;