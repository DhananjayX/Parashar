
import React ,{ Component }  from 'react';
import Toy from './Toy';
import './css/stylesToyCon.css';

class  ToyContainer extends Component {   
    
    constructor(props) 
    {
        super(props);
        this.state = {toys:[] };

        this.addToy = this.addToy.bind(this);
        this.removeToy = this.removeToy.bind(this);
        this.addToy();

    }

    removeToy(ind)
    {
            let ltoy =  this.state.toys;
            console.log('index for deletion :' + ind)
            ltoy.splice(ind,1);
            this.setState({ toys:ltoy  });     

    }
    
    addToy(){
       
        let ltoy =  this.state.toys;
        ltoy.push(<Toy key={this.state.toys.length} index={this.state.toys.length} simplemethod ={this.removeToy}  />);
        this.setState({ toys:ltoy  });                
    }


   
    render() {       
        
        return (       
            <div>   
                <div className="cntHeader bgclr">
                    <input className="btnhdr" value="Add a Toy" type="button" name="btnAdd" onClick ={() => this.addToy()} />
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