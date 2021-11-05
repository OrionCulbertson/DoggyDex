import React from 'react';

export const FormErrors = ({formErrors}) =>
  <div className='formErrors color-blue'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}> {'*'} {fieldName} {formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>