import React from "react";

export const ErrorMsg = ({ errorToDisplay }) => {
  if (errorToDisplay === null) return null

  if (errorToDisplay)
    return (
      <div className='failure'>
        {errorToDisplay}
      </div>
    )
}
export const SuccessMsg = ({ sucToDisplay }) => {
  if (sucToDisplay === null) return null

  if (sucToDisplay)
    return (
      <div className='success'>
        {sucToDisplay}
      </div>
    )
}
