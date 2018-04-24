
import React ,{ Component }  from 'react';
import ReactDOM from 'react-dom';

class  Toy extends Component {  
    
    Subscribed() {
                    console.log(" i m clicked at :" + Date.now());
    }

    render() {
        
        var styles = {
                maindiv :{
                    background:"lightgray",
                    height:"157px",
                    width:"160px",
                    margin:"10px",
                    padding:"10px",
                    display:"inline-block",
                    borderWidht:"1px"  ,
                    borderRadius:"8px"

                },
                btn :{
                    background:"#46081E",
                    height:"50px",
                    bordersize:"1px"  ,
                    margin:"08px",
                    color:"white",
                    width:"140px"   ,  
                    borderWidth:"1px",
                    fontSize:"1.3em" ,
                    fontFamily:"inherit"
                } ,
                cnt1 :{
                    background:"#B81651",
                    height:"60px",
                    margin:"10px",                   
                    display:"inline-block",
                    width:"60px",
                    borderRadius:"50% 50%"                    
                } ,
                cnt2 :{
                    background:"#16877C",
                    height:"60px",
                    margin:"10px",
                    display:"inline-block",
                    width:"60px",
                    borderRadius:"50% 50%"        
                }  ,
                nbr :{
                    fontSize:"0.8em" ,
                    display:"inline-block",       
                    position:"relative"   ,
                    textAlign: "center",
                    verticalAlign: "middle",
                    lineHeight: "50px",
                    margin:"auto",
                    width:"80%", 
                    padding:"4px"

                }               
            };

        
        return (
        <div style={styles.maindiv}> 
                <div>
                    <div style={styles.cnt1}> <div style={styles.nbr}> </div> </div>
                    <div style={styles.cnt2}> <div style={styles.nbr}>  </div>  </div>
                </div>
                <div>
                    <input style={styles.btn} onClick= {this.Subscribed} type="button" name="Subscribe" value="Subscribe"/>
                    
                </div>
        </div>   
        );
    }
}

export default Toy;