import * as React from "react";

export const useFormFields = (initialState) => {
  const [fieldValues, setFieldValues] = React.useState(initialState);

  return [
    fieldValues,
    function(event) {
      setFieldValues({
        ...fieldValues,
        [event.target.id]: event.target.value
      });
    }
  ]
}