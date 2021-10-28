import React from 'react';
import TextBox from '../TextBox';


function AddReviewForm({ textBoxText, title, buttonText }) {

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
                <p>
                    <label for="date-posted">Date Posted: </label>
                    <input type="date" id="date-posted" class="date-input" name="date-posted"></input>
                </p>
                <p>
                    <textarea name="comment" rows="4" cols="50">Comment</textarea>
                </p>
                <p>
                    <select name="recommend" class="select-box">
                        <option value="">Recommend?</option>
                        <option value="True">True</option>
                        <option value="False">False</option>
                    </select>
                </p>
                <input type="submit" value={buttonText} class="add-button"></input>

            </fieldset>
        </form>
    );

}

export default AddReviewForm;