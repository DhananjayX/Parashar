
import React ,{ Component }  from 'react';
import Toy from './Toy';
import './css/stylesToyCon.css';

class  ToyContainer extends Component {   
    
    constructor(props) 
    {
        super(props);
<<<<<<< HEAD
        this.state = {toys:[], globalCnt:0 };

        this.addToy = this.addToy.bind(this);
        this.removeToy = this.removeToy.bind(this);
        this.getGlobalCount = this.getGlobalCount.bind(this);
        this.increaseGlobalCount = this.increaseGlobalCount.bind(this);

=======
        this.state = {toys:[], globalCount:0 };

        this.addToy = this.addToy.bind(this);
        this.removeToy = this.removeToy.bind(this);
        this.increaseGlobalCount = this.increaseGlobalCount.bind(this);
        this.getGlobalCount = this.getGlobalCount.bind(this);
        
>>>>>>> d2058ce9412852f11ea5bf566329756189147462
        this.addToy();

    }

    getGlobalCount()
    {
<<<<<<< HEAD
        console.log('global cnt get');
        return this.state.globalCnt;
            
    }
    increaseGlobalCount()
    {
        let gcnt = this.state.globalCnt;
        gcnt++;
        this.setState({globalCnt:gcnt});
        console.log('global cnt increased : new value' + gcnt)
    }

=======
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
>>>>>>> d2058ce9412852f11ea5bf566329756189147462
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
<<<<<<< HEAD
                    simplemethod ={this.removeToy}  
                    inrGlobalCnt = {this.increaseGlobalCount}
                    getGlobalCnt = {this.getGlobalCount}
                    />);
=======
                 removeToy ={this.removeToy}
                 increaseGlobalCnt = {this.increaseGlobalCount}
                 currentGlobalCnt =  {this.state.globalCount}
                 getCurrentGlobalCnt ={this.getGlobalCount} 
                 />);
>>>>>>> d2058ce9412852f11ea5bf566329756189147462
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