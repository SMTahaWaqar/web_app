import './App.css';
import CurrentWeather from './components/CurrentWeather';
import DayWeather from './components/DayWeather';
import NavScrollExample from './components/Navbar';

function App() {

  // const [coords, setCoords] = useState({});

  // const getLocation = async () => {
  //   if (!navigator.geolocation) {
  //     alert('Geolocation is not supported by your browser');
  //   } else {
  //     await navigator.geolocation.getCurrentPosition((position) => {
  //       setCoords(position.coords)
  //       console.log(position.coords)
  //     }, () => {
  //       alert('Unable to retrieve your location');
  //     });
  //   }
  // }

  // useEffect(() => {
  //   getLocation();
  // }, [])
  
  
  

  return (
    <>
    <NavScrollExample />
    <CurrentWeather />
    <DayWeather />
    </>
  );
}

export default App;
