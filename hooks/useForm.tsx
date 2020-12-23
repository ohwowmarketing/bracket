import { useState } from 'react'

interface FormFields {
  [propName: string]: any
}

const useForm = (callback: () => void, initialFormFields: FormFields) => {
  const [values, setValues] = useState(initialFormFields)
  const handleSubmit = event => {
    if (event) {
      event.preventDefault()
    }
    callback()
  }
  const handleChange = event => {
    event.persist()
    setValues(FormValues => ({
      ...FormValues,
      [event.target.name]: event.target.value
    }))
  }
  const handleUpdateFields = (fields: FormFields) => {
    console.log(fields)
    setValues(fields)
  }
  return { handleChange, handleSubmit, values, handleUpdateFields }
}

export default useForm
