import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import ImagenList from './components/ImagenList'

function App() {

  const [search, setSearch] = useState(null);

  const saveSearch = (keyword) => {
    setSearch(keyword)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Buscador de Imágenes</h2>
        <Form
          saveSearch={saveSearch}
        />
      </header>
      <main className="App-main">
        <ImagenList
          search={search}
        />
      </main>
    </div>
  )
}

export default App
