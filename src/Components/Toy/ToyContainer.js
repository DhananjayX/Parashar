
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
            
        console.log('adding toy first time ..')
        this.addToy();

    }
  

    increaseGlobalCount()
    {
            this.setState({globalCount:this.state.globalCount+1});
            console.log("parent increaseGlobalCount triggered..current globalccount = " + this.state.globalCount);
    }
    removeToy(ind)
    {
            let ltoy =  this.state.toys.slice();
            console.log('index for deletion :' + ind)
            ltoy.splice(ind,1);
            this.setState({ toys:ltoy  });     

    }
    
    addToy(){
       
        let ltoy =  this.state.toys.slice();
        ltoy.push(<Toy key={this.state.toys.length} index={this.state.toys.length} 
                 removeToy ={this.removeToy}
                 increaseGlobalCnt = {this.increaseGlobalCount}
                 CurrentGlobalCnt =  {this.state.globalCount}                 
                 />);
        this.setState({ toys:ltoy  });                
    }


   
    render() {       
        
        return (       
            <div>   
                <div className="cntHeader bgclr">
                   <div className="inlblk"> <input className="btnhdr" value="Add a Toy" type="button" name="btnAdd" onClick ={() => this.addToy()} />
                   
                    </div>
                    
                </div>
                <div className="cntBody">
                {this.state.toys} ooooooooooooooooo
                <Toy key={0} index={0}
                 removeToy ={this.removeToy}
                 increaseGlobalCnt = {this.increaseGlobalCount}
                 CurrentGlobalCnt =  {this.state.globalCount}                 
                 />

                 <Toy key={1} index={1} 
                 removeToy ={this.removeToy}
                 increaseGlobalCnt = {this.increaseGlobalCount}
                 CurrentGlobalCnt =  {this.state.globalCount}                 
                 />

                 <Toy key={2} index={2}
                 removeToy ={this.removeToy}
                 increaseGlobalCnt = {this.increaseGlobalCount}
                 CurrentGlobalCnt =  {this.state.globalCount}                 
                 />
                </div>              
                    
            </div>
        );
    }
}

export default ToyContainer;