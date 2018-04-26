
import React ,{ Component }  from 'react';
import Toy from './Toy';
import './css/stylesToyCon.css';

class  ToyContainer extends Component {   
    
    constructor(props) {
        super(props);
        this.state = {toys:[] };
        this.Addtoy = this.Addtoy.bind(this);
        
        this.Addtoy();
        /*
        var ltoy =  this.state.toys;
        ltoy.push(<Toy key={0} />);
        this.setState({ toys:ltoy  });
        */
      }

    Addtoy(){
       
        var ltoy =  this.state.toys;
        ltoy.push(<Toy key={this.state.toys.length+1} />);
        this.setState({ toys:ltoy  });                
    }

    render() {       
        
        return (       
            <div>   
                <div className="cntHeader bgclr">
                    <input className="btnhdr" value="Add a Toy" type="button" name="btnAdd" onClick = {this.Addtoy}/>
                    total toy count = {this.state.toys.length}
                </div>
                <div className="cntBody">
                    {this.state.toys}  
                </div>              
                    
            </div>
        );
    }
}

export default ToyContainer;