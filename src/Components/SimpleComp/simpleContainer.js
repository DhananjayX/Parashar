import React ,{ Component }  from 'react';
import './css/simpleStyles.css';
import Simple from './simple'
import ToyContainer from '../Toy/ToyContainer';

class SimpleContainer extends Component
{
    constructor(props) {
        super(props);
        this.state = {
          Count:0
        };

        this.IncreaseCount = this.IncreaseCount.bind(this);
      }

      IncreaseCount()
      {

        this.setState({Count:this.state.Count+1});
      }
    render() {
        return (
            <div>
                    <div className="smcnthdr"> header <input type="button" onClick={this.IncreaseCount} value="+  from parent" text="hell" /> </div>
                    <div className="simpledivmain"> 
                        <Simple Count={this.state.Count} IncreaseCount= {this.IncreaseCount} /> 
                        <Simple Count={this.state.Count} IncreaseCount= {this.IncreaseCount} /> 
                    </div>
        
            </div> );
        }

}

export default SimpleContainer;