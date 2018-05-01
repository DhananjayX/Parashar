import React , { Component } from 'react';
import Head from './Head';
//import ToyContainer from '../Toy/ToyContainer';
import SimpleContainer from '../SimpleComp/simpleContainer';
import ToyContainer from '../Toy/ToyContainer';

class  App extends Component {        
        render() {
               
            return (
            <div> 
                    <Head/>            
                    
                    <ToyContainer />
            </div>   

            );
        }
}

export default App;