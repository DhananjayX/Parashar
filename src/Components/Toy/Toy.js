
import React ,{ Component }  from 'react';
import './css/stylesToy.css';
import madat from '../xtemp/trs/madat';

class  Toy extends Component {  
    
    Subscribed() {
                    console.log(" i m clicked at :" + Date.now());
    }

    render() {
                
        return (
        <div className="maindiv"> 
                <div>
                    <div className="cnt1"> <div className="nbr"> </div> </div>
                    <div className="cnt2"> <div className="nbr">  </div>  </div>
                </div>
                <div>
                    <input className="btn" onClick= {this.Subscribed} type="button" name="Subscribe" value="Subscribe"/>                    
                </div>
        </div>   
        );
    }
}

export default Toy;