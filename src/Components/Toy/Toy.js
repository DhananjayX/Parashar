import React ,{ Component }  from 'react';
import './css/stylesToy.css';

class  Toy extends Component {  
    
    constructor(props) {
        super(props);
        this.state = { toySubscrCnt: 0,globalCount:0 };
        this.Subscribed = this.Subscribed.bind(this);
        this.removeaToy = this.removeaToy.bind(this);
       
      }

    Addtoy(){       
        console.log('comp added');       
    }

   
    Subscribed(nm) {
                    this.setState({ toySubscrCnt: this.state.toySubscrCnt+1 });  
                    this.props.inrGlobalCnt();                 
                    var gl = this.props.getGlobalCnt();
                    console.log('glb count ='  +gl);
                    this.setState({globalCount:gl});
    }
  
    removeaToy()
    {
        this.props.simplemethod(this.props.index);
    }
    render() {                
        return (
        <div className="maindiv"> 
                <div>
                    <div className="toyhdr"> a Toy [ id = {this.props.index}]  </div>
                    <div className="cntContainer">
                        <div className="cnt clr16877C"> L Count:{this.state.toySubscrCnt}</div>
                        <div className="cnt clrB81651"> G Count:{this.state.globalCount}  </div>
                    </div>
                </div>
                <div className="subscribe">
                    <input className="btn" onClick= {this.Subscribed} type="button" name="Subscribe" value= "Subscribe"/>                    
                </div>
                <div className="toyftr">time:{(new Date()).toLocaleTimeString()}</div>
                <div className="removeToy" onClick={this.removeaToy}> X </div>
        </div>   
        );
    }
}

export default Toy;