import React from 'react';
import Game from './Game';
import {GameProvider} from './context/GameContext';

const App = ()=><GameProvider><Game/></GameProvider>
export default App;