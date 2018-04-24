
import React ,{ Component }  from 'react';
import ReactDOM from 'react-dom';
import Toy from './Toy';

class  ToyContainer extends Component {        
    render() {
       
        var cntHeader = {              
                    background:"",
                    height:"50px",                                        
                    borderWidth:"1px",    
                    borderStyle:"Solid",
                    borderColor:"lightgray",
                    margin:"1px",
                    marginTop:"2px"

        };
        var cntBody = {              
            background:"",                                              
            borderWidth:"1px",    
            borderStyle:"Solid",
            borderColor:"lightgray",           
            margin:"1px",
        };
         
        var ls = [];
         for(var i=0;i<this.props.ToyCount;i++)
         {
             ls.push(<Toy/>);
         }
        return (       
            <div>   
                <div style={cntHeader}>
                </div>
                <div style={cntBody}>
                    {ls}  
                </div>               
                    
            </div>
        );
    }
}

export default ToyContainer;