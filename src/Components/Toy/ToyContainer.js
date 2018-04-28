
import React ,{ Component }  from 'react';
import Toy from './Toy';
import './css/stylesToyCon.css';

class  ToyContainer extends Component {   
    
    constructor(props) 
    {
        super(props);
        this.state = {toys:[], globalCount:0 };

        this.addToy = this.addToy.bind(this);
        this.removeToy = this.removeToy.bind(this);
        this.increaseGlobalCount = this.increaseGlobalCount.bind(this);
        this.getGlobalCount = this.getGlobalCount.bind(this);
        
        this.addToy();

    }

    getGlobalCount()
    {
            var gc = this.state.globalCount;
            console.log("parent get global count  triggered , value=" + gc);
            return gc;                        
    }

    increaseGlobalCount()
    {
            var gc = this.state.globalCount;
            gc=gc+1;
            this.setState({globalCount:gc});
            console.log("parent increaseGlobalCount triggered");
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
        ltoy.push(<Toy key={this.state.toys.length} index={this.state.toys.length} 
                 removeToy ={this.removeToy}
                 increaseGlobalCnt = {this.increaseGlobalCount}
                 currentGlobalCnt =  {this.state.globalCount}
                 getCurrentGlobalCnt ={this.getGlobalCount} 
                 />);
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