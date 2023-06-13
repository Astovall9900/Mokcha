/*global chrome*/
import "./App.css"
import { useState, useEffect } from "react";
import { getCurrentTab } from "./utils";
import TrafficContainer from '../components/TrafficContainer'
import {Traffic} from '../types/Traffic'


const App = () => {
  const [traffic, setTraffic] = useState<Traffic>({
    id: 0,
    registerTime: 0,
    requests: {},
  });

  useEffect(() => {
    getCurrentTab((tab: any) => {
      chrome.runtime.sendMessage({ type: 'popupInit', tabId: tab.id }, (response: Traffic) => {
        if (response) {
          setTraffic(response)
        }
      });
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Mokcha: Easy API Mocking</h1>
      </header>
      <p className="App-intro">
          <TrafficContainer traffic={traffic}/>
      </p>
    </div>
  );
}

export default App;
