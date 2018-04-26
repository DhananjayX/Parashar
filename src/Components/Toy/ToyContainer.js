
import React ,{ Component }  from 'react';
import Toy from './Toy';
import './css/stylesToyCon.css';

class  ToyContainer extends Component {   
    
    constructor(props) {
        super(props);
        this.state = { cnt: 1 };
        this.Addtoy = this.Addtoy.bind(this);
      }

    Addtoy(){
        this.setState({ cnt: this.state.cnt+1 });
        console.log('comp added');
        
    }

    render() {       
        var ls = [];        
         for(var i=0;i<this.state.cnt;i++)
         {
             ls.push(<Toy key={i} />);
         }
        return (       
            <div>   
                <div className="cntHeader bgclr">
                    <input className="btnhdr" value="Add a component +" type="button" name="btnAdd" onClick = {this.Addtoy}/>
                    total toy count = {this.state.cnt}
                </div>
                <div className="cntBody">
                    {ls}  
                </div>              
                    
            </div>
        );
    }
}

export default ToyContainer;