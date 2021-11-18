import React from 'react';
import TextBox from '../TextBox';


function AddSubscriptionBillForm({ textBoxText1, textBoxText2, title, buttonText }) {

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
                {textBoxText1.map((text, i) => <p><TextBox textBoxText={text}></TextBox></p>)}
                <p>
                    <select name="plan-type" class="select-box">
                        <option value="">Plan Type:</option>
                        <option value="Tier 1">Tier 1</option>
                        <option value="Tier 2">Tier 2</option>
                        <option value="Tier 3">Tier 3</option>
                        <option value="Tier 4">Tier 4</option>
                    </select>
                </p>
                <p>
                    <label for="order-date"> Order Date: </label>
                    <input type="date" id="order-date" class="date-input" name="order-date"></input>
                </p>
                <p>
                    <label for="expiration-date"> Expiration Date: </label>
                    <input type="date" id="expiration-date" class="date-input" name="expiration-date"></input>
                </p>
                {textBoxText2.map((text, i) => <p><TextBox textBoxText={text}></TextBox></p>)}
                <p>
                    <select name="order-completed" class="select-box">
                        <option value="">Order Completed:</option>
                        <option value="True">True</option>
                        <option value="False">False</option>
                    </select>
                </p>
                <input type="submit" value={buttonText} class="add-button"></input>

            </fieldset>
        </form>
    );

}

export default AddSubscriptionBillForm;