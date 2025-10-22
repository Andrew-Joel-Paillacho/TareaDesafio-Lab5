// src/hooks/useForm.js
import { useState } from "react"

export const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const finalValue = type === 'checkbox' ? checked : value

    setFormValues(prev => ({
      ...prev,
      [name]: finalValue
    }))

    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    // Validación de nombre
    if (!formValues.name?.trim()) {
      newErrors.name = 'El nombre es requerido'
    } else if (formValues.name.length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres'
    }

    // Validación de email
    if (!formValues.email?.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'El email no es válido'
    }

    // Validación de contraseña
    if (!formValues.password) {
      newErrors.password = 'La contraseña es requerida'
    } else if (formValues.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres'
    }

    // Validación de términos
    if (!formValues.terms) {
      newErrors.terms = 'Debes aceptar los términos y condiciones'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const resetForm = () => {
    setFormValues(initialState)
    setErrors({})
    setTouched({})
  }

  const isFieldValid = (fieldName) => {
    return !errors[fieldName] && touched[fieldName]
  }

  return {
    formValues,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
    isFieldValid,
    setFormValues
  }
}