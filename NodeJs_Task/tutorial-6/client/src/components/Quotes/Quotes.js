import './Quotes.css'
import autelImg from '../../images/autel_evo_2.jpg';
import djiAirImg from '../../images/dji_air_2.jpg';
import djiMiniImg from '../../images/dji_mini_2.jpg';
import djiPhantomImg from '../../images/dji_phantom_pro.jpg';
import { Link } from 'react-router-dom';

const images=[
  autelImg, djiMiniImg,
  djiAirImg,djiPhantomImg
]

function Quotes({ text }) {
  return (
    <div className='drone-list'>
      <h4>{text || 'Enjoy your flight'}</h4>
      {
        images.map(image=>{
          return(
            <div className='drone-list_box' key={image}>
             <Link to='/products'> <img src={image} alt={image}/></Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Quotes;