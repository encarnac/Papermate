import React from 'react';
import TextBox from '../TextBox';


function AddPaymentForm({ textBoxText, title, buttonText }) {

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
                {textBoxText.map((text, i) => <TextBox textBoxText={text}></TextBox>)}
                <label for="cc-exp">Exp: </label>
                <input type="month" id="cc-exp" class="date-input" name="cc-exp" value="2021-10" />
                <p></p>
                <input type="submit" value={buttonText} class="add-button"></input>

            </fieldset>
        </form>
    );

}

export default AddPaymentForm;