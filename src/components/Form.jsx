import React, {useState} from "react"
import Error from "./Error";



const Form = ({ saveSearch }) => {

  const [keyword, setKeyWord] = useState('');
  const [errorKeyword, setErrorKeyWord] = useState(false);

  const handleChange = e => {
    setKeyWord(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (keyword.trim() === '') {
      setErrorKeyWord(true);
      return;
    }

    setErrorKeyWord(false)

    saveSearch(keyword)
    setKeyWord('')

  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div className='form'>
      <input
        type='text'
        placeholder='Busca una Imagen, por ejemplo, Futbol o Café!'
        className='input'
        onChange={handleChange}
        value={keyword}
      />
      <button
        type='submit'
      >Buscar</button>

      </div>

      {errorKeyword ? <Error mensaje='Agrega una busqueda' /> : null}
    </form>
  )
}

export default Form
