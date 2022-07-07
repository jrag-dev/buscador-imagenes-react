import {useEffect, useState} from "react";
import {useFetch} from "../hooks/useFetch"
import Imagen from "./Imagen";
import Spinner from "./Spinner";



const ImagenList = ({ search }) => {

  const [paginaactual, setPaginaActual] = useState(1);
  const [totalpaginas, setTotalPaginas] = useState(1);

  const key = '25501598-fb8bfe1e22e672e410c35b046'
  const images_per_page = 32;

  const api = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${images_per_page}&page=${paginaactual}`
  const { data, error, loading } = useFetch(api);

  // mover la pagina hacia arriba
  useEffect(() => {
    const mover = document.querySelector('.imagen-list');
    mover.scrollIntoView({ behavior: 'smooth' });
  }, [paginaactual])


  // Calculamos el numero de paginas
  useEffect(() => {
    const calcularTotalPaginas = Math.ceil(data.totalHits / images_per_page);
    setTotalPaginas(calcularTotalPaginas)
  }, [data.totalHits])


  if (error) {
    return <p>Error realizando la llamada a la api</p>
  }


  const pagePrev = () => {
    const newPaginaActual = paginaactual - 1;

    if (newPaginaActual === 0) return;

    setPaginaActual(newPaginaActual)
  }

  const pageNext = () => {
    const newPaginaActual = paginaactual + 1;

    if (newPaginaActual === totalpaginas + 1) return;

    setPaginaActual(newPaginaActual)
  }

  
  return (
    <>
      <div className='imagen-list'>
        {

          !data.hits 
            ? (
              <Spinner/>
            )
            : (
              data.hits.map(item => (
                <Imagen
                  key={item.id}
                  imagen={item}
                />
              ))
            )
        } 
      </div>

      { 
        data.hits && (
        <div className='pagination'>
          <button
              onClick={pagePrev}
            className='btn-page'
          >Prev</button>

          <button
              onClick={pageNext}
            className='btn-page'
          >Next</button>
        </div>
        )
      }
    </>
  )
}

export default ImagenList
