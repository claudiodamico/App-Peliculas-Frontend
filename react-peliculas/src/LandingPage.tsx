import { useState, useEffect } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO } from "./peliculas/peliculas.model";

export default function LandingPage(){

    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

    useEffect (() =>{
    const timerId = setTimeout(() => {

      setPeliculas({enCartelera: [
        {
          id: 1, titulo: 'Matrix', 
          poster: 'https://http2.mlstatic.com/D_NQ_NP_756444-MLA46741993452_072021-O.jpg'
        },
        {
          id: 2, titulo: 'Matrix2', 
          poster: 'https://es.web.img3.acsta.net/r_1280_720/pictures/bzp/01/28540.jpg'
        }
      ],

      proximosEstrenos: [
        {
          id: 3, titulo: 'Matrix Resurrecciones',
          poster: 'https://img.ecartelera.com/noticias/fotos/67000/67076/2.jpg'
        }
      ]})

    }, 500);

    return () => clearTimeout(timerId);
  })
  
    return (
        <>
        <h3>En cartelera</h3>
       <ListadoPeliculas peliculas={peliculas.enCartelera}/>

       <h3>Proximos Estrenos</h3>
       <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>
       </>
    )
}