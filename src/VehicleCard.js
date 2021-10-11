import './VehicleCard.css';
import PlateNum from './PlateNumber';
import Longitude from './Longitude';
import Lattitude from './Lattitude';




const VehicleCard = ({ userData, photos }) => {
    
    
    return (
        <div className="card">
               <div className="card__top"> <p> Numer rejestracyjny:<span> <PlateNum length={6} /> </span></p> </div>
              <img className="card__image" src={photos.urls.small} width="250px" height="200px" alt="car" /> 
              <div className="card__bottom">
                <p> Kierowca: <span>{userData.name.first} {userData.name.last}</span></p>
                <p> Nr kontaktowy: <span>{ Math.floor(100000000 + Math.random() * 900000000) }</span></p>
                <p> Współrzędne geograficzne: <Lattitude  /><span>N,</span> <Longitude  /><span>E</span></p>
                <p> Średnia prędkość: <span> { Math.floor(Math.random() * (140)) + 60} km/h </span></p>
              </div>
         </div>
        
    )
};

export default VehicleCard;