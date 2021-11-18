import React from 'react';
import TextBox from '../TextBox';


function AddForm({ textBoxText, title, buttonText }) {

    const submitButtonClick = (event) => {       
        event.preventDefault();        
    }

    const textBoxChange = (event) => {
      //  setMemberAttribute(event.target.value);
      // (in input<> onChange={event => textBoxChange(event)})
    }

    return (
        <form action="" class="add-form" onSubmit={(event) => submitButtonClick(event)}>
            <fieldset class="add-fieldset">          
                <legend>{title}</legend>
                {textBoxText.map((text, i) => <p><TextBox textBoxText={text}></TextBox></p>)}
                <p></p>
                <input type="submit" value={buttonText} class="add-button"></input>

            </fieldset>
        </form>
    );

}

export default AddForm;