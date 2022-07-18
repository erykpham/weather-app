import Inputs from './components/Inputs';
import {TemperatureAndDetails, TimeAndLocation, TopButtons, Forecast} from './components';

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700  text-white h-fit shadow-xl shadow-gray-400 selection:bg-white selection:text-blue-600  whitespace-pre">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title="hourly forecast"/>
      <Forecast title="daily forecast"/>
    </div>
  );
}

export default App;
