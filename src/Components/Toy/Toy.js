import React ,{ Component }  from 'react';
import './css/stylesToy.css';

class  Toy extends Component {  
    
    constructor(props) {
        super(props);
<<<<<<< HEAD
        this.state = { toySubscrCnt: 0,globalCount:0 };
=======
        this.state = { toySubscrCnt: 0,childGlobalCnt:0 };
>>>>>>> d2058ce9412852f11ea5bf566329756189147462
        this.Subscribed = this.Subscribed.bind(this);
        this.removeaToy = this.removeaToy.bind(this);
       
      }

      componentDidMount()
      {
         let curGlobalcnt = this.props.getCurrentGlobalCnt();
         this.setState({childGlobalCnt:curGlobalcnt});

      }
    Addtoy(){       
        console.log('comp added');       
    }

   
    Subscribed(nm) {
<<<<<<< HEAD
                    this.setState({ toySubscrCnt: this.state.toySubscrCnt+1 });  
                    this.props.inrGlobalCnt();                 
                    var gl = this.props.getGlobalCnt();
                    console.log('glb count ='  +gl);
                    this.setState({globalCount:gl});
=======
                    this.setState({ toySubscrCnt: this.state.toySubscrCnt+1 });   
                    this.props.increaseGlobalCnt();  
                    let curGlobalcnt = this.props.getCurrentGlobalCnt();
                    this.setState({childGlobalCnt:curGlobalcnt});
>>>>>>> d2058ce9412852f11ea5bf566329756189147462
    }

    componentWillReceiveProps(nextProps) {
        console.log('cmp x called : id =' + this.props.index);        
        let curGlobalcnt = nextProps.currentGlobalCnt;
        this.setState({childGlobalCnt:curGlobalcnt});        
      }
  
    removeaToy()
    {
        this.props.removeToy(this.props.index);
    }

    render() {                
        return (
        <div className="maindiv"> 
                <div>
                    <div className="toyhdr"> a Toy [ id = {this.props.index}]  </div>
                    <div className="cntContainer">
                        <div className="cnt clr16877C"> L Count:{this.state.toySubscrCnt}</div>
<<<<<<< HEAD
                        <div className="cnt clrB81651"> G Count:{this.state.globalCount}  </div>
=======
                        <div className="cnt clrB81651"> G Count:{this.state.childGlobalCnt}  </div>
>>>>>>> d2058ce9412852f11ea5bf566329756189147462
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