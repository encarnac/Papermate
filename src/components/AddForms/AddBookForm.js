import React from 'react';
import TextBox from '../TextBox';


function AddBookForm({ textBoxText1, textBoxText2, title, buttonText }) {

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
                <p>
                    {textBoxText1.map((text, i) => <TextBox textBoxText={text}></TextBox>)}
                </p>
                <p>
                    <textarea id="book-description" name="description" rows="4" cols="50">Book Description</textarea>
                </p>
                <p>
                    <label for="date-published">Date Published: </label>
                    <input type="date" id="date-published" class="date-input" name="date-published"></input>
                </p>
                <p>
                    <label for="release-date"> Release Date: </label>
                    <input type="date" id="release-date" class="date-input" name="release-date"></input>
                </p>
                <p>
                    {textBoxText2.map((text, i) => <TextBox textBoxText={text}></TextBox>)}
                </p>
                <input type="submit" value={buttonText} class="add-button"></input>

            </fieldset>
        </form>
    );

}

export default AddBookForm;