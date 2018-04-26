
import React ,{ Component }  from 'react';
import './css/stylesToy.css';


class  Toy extends Component {  
    
    Subscribed(nm) {
                    console.log(" i m clicked at :" + Date.now());
                    alert('Subscribed!' );
    }

  
    render() {
                
        return (
        <div className="maindiv"> 
                <div>
                    <div className="cnt1"> <div className="nbr"> </div> </div>
                    <div className="cnt2"> <div className="nbr">  </div>  </div>
                </div>
                <div>
                    <input className="btn" onClick= {this.Subscribed} type="button" name="Subscribe" value= "Subscribe"/>                    
                </div>
        </div>   
        );
    }
}

export default Toy;