// src/customHook/useCounter.js
import { useState, useEffect } from "react"

export function useCounter(initialValue = 0, options = {}) {
  const { min = -Infinity, max = Infinity, step = 1 } = options

  const [count, setCount] = useState(initialValue)
  const [history, setHistory] = useState([initialValue])

  // Efecto para validar límites
  useEffect(() => {
    if (count < min) setCount(min)
    if (count > max) setCount(max)
  }, [min, max, count])

  const increment = () => {
    setCount(prev => {
      const newValue = Math.min(prev + step, max)
      setHistory(prevHistory => [...prevHistory, newValue])
      return newValue
    })
  }

  const decrement = () => {
    setCount(prev => {
      const newValue = Math.max(prev - step, min)
      setHistory(prevHistory => [...prevHistory, newValue])
      return newValue
    })
  }

  const reset = () => {
    setCount(initialValue)
    setHistory([initialValue])
  }

  const setValue = (value) => {
    const newValue = Math.min(Math.max(value, min), max)
    setCount(newValue)
    setHistory(prevHistory => [...prevHistory, newValue])
  }

  const undo = () => {
    if (history.length > 1) {
      setHistory(prevHistory => {
        const newHistory = prevHistory.slice(0, -1)
        setCount(newHistory[newHistory.length - 1])
        return newHistory
      })
    }
  }

  const isMin = count <= min
  const isMax = count >= max

  return {
    count,
    history,
    increment,
    decrement,
    reset,
    setValue,
    undo,
    isMin,
    isMax,
    canUndo: history.length > 1
  }
}