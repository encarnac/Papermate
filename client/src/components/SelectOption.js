import React from 'react';


function SelectOption({data}) {
    return (
      <>  
      {data.map((data, i) => 
               {return Object.values(data).map((value) => 
                  <option value={value}>{value}</option>)})}   
      </>
   )
}
    
export default SelectOption;