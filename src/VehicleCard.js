import './VehicleCard.css';
import PlateNum from './PlateNumber';
import Longitude from './Longitude';
import Lattitude from './Lattitude';




const VehicleCard = ({ userData }) => {
    

    
    return (
        <div className="card">
            <div className="card__title">{userData.name.first} {userData.name.last}</div>
            <div className="card__body">
   
                <p> Numer rejestracyjny: <PlateNum length={6} /> </p>
                <p> Nr kontaktowy: { Math.floor(100000000 + Math.random() * 900000000) } </p>
                <p> Współrzędne geograficzne: <Lattitude  />N, <Longitude  />E </p>
                <p> Średnia prędkość: { Math.floor(Math.random() * (140)) + 60} km/h </p>
                


           </div>
        </div>
        
    )
};

export default VehicleCard;