
import React ,{ Component }  from 'react';
import Toy from './Toy';
import './css/stylesToyCon.css';

class  ToyContainer extends Component {   
    
    render() {
       
        var ls = [];
         for(var i=0;i<this.props.ToyCount;i++)
         {
             ls.push(<Toy key={i}/>);
         }
        return (       
            <div>   
                <div className="cntHeader bgclr">
                </div>
                <div className="cntBody">
                    {ls}  
                </div>              
                    
            </div>
        );
    }
}

export default ToyContainer;