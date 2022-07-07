
import { GrLike, GrView } from "react-icons/gr";



const Imagen = ({ imagen }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={imagen.previewURL} alt={imagen.tags} />
      </div>
      <div className="card-body">
        <GrLike /> {imagen.likes}
        <p><GrView/> {imagen.views}</p>
      </div>
      <div className="card-footer">
        <a 
          className="btn-see" 
          href={imagen.largeImageURL}
          target="_blank"
          rel="noopener noreferrer"
        >Ver Imagen</a>
      </div>
    </div>
  )
}

export default Imagen
