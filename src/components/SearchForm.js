import React from 'react';

function SearchForm({ textBoxText, searchText }) {

    return (
        <>
            <form>
                <input type="text" placeholder={textBoxText}></input>
                <button type="submit">{searchText}</button>
            </form>
        </>
    );

}
export default SearchForm;