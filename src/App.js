import React from 'react';
import Index from './components/index'
import "./style.css";
import "./fontchido/fontchido.css";
import "./canvas.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
window.onbeforeunload = function(){ window.scrollTo(0,0); }
function App() {
  return (
    <Index/>
  );
}

export default App;
