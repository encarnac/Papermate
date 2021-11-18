import React from 'react';
import TextBox from '../TextBox';


function AddSubItemForm({ textBoxText, title, buttonText }) {

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
                <p>
                    <select name="book-status" class="select-box">
                        <option value="">Status: </option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="returned">Returned</option>
                    </select>
                </p>
                <input type="submit" value={buttonText} class="add-button"></input>

            </fieldset>
        </form>
    );

}

export default AddSubItemForm;