import Tourdata from './Project2.js/Tourdata';
import './App.css';
import{useState} from 'react'
import TourDisplay from './Project2.js/TourDisplay';
import Tour from './Project2.js/Tour';

function App() {
  const [visit, setVisit] = useState(Tourdata)
  const removeTour =(id) =>{
    const newTours = visit.filter((tour)=>tour.id !==id)
    setVisit(newTours)
  }
  return (
   <main>
    <TourDisplay visit ={visit}  removeTour={removeTour}></TourDisplay>
     </main>
  );
}

export default App;
