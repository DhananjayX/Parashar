import React , { Component } from 'react';
import Head from './Head';
import ToyContainer from '../Toy/ToyContainer';


class  App extends Component {        
        render() {
               
            return (
            <div> 
                    <Head/>            
                    <ToyContainer ToyCount="1"/>
            </div>   

            );
        }
}

export default App;