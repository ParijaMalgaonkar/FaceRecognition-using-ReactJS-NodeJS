import React from 'react';
import './App.css';
import Particles from 'react-particles-js';

import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import SignIn from './Components/SignIn/Signin';


const particlesOptions = {
  particles : {
    opacity : {
      value: 0.1
    },
    number : {
      value: 90,
      density : {
        enable: true,
        value_area:700
      }
    }, 
    interactivity : {
      onhover : {
        enable: true,
      }

    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className='particles'
        params={particlesOptions} />
      <Navigation />
      <Logo />
      <SignIn />

      {/* <ImageLinkForm />
      <FaceRecognition /> */}
 
    </div>
  );
}

export default App;
