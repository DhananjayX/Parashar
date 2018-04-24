import React , { Component } from 'react';

class Head extends Component{



render() {
            var styles1 = {                    
                background:"#80B5DA",
                height:"40px",
                paddingTop:"15px"

        };
        var stylesTitle = { 
            background:"white",
            fontSize:"1.3em",
            height:"30px",
            width:"200px",
            lineHeight:"30px",
            verticalAlign: "middle",
            marginLeft:"10px",
            display:"inline",
            borderRadius :"40px"    ,
            paddingLeft:"15px"            

    };
        var styleToyCount = { 
        background:"white",
        fontSize:"1.3em",
        height:"30px",
        width:"200px",
        lineHeight:"30px",
        verticalAlign: "middle",
        marginLeft:"10px",
        display:"inline",
        borderRadius :"40px"    ,
        paddingLeft:"15px"   
        };

        var styles2 = {   
            
        };

        var styles3 = {
            background:"#142E41",
            height:"10px",
            width:"100%",            
        };
        var styles4 = {
            background:"#193D56",
            height:"10px",
            width:"100%"
        };
        var styles5 = {
            background:"#2F73A2",
            height:"10px",
            width:"100%"
        };
        

           return (
               <div>

                    <div style={styles1}>
                        <div style={stylesTitle}> Hello React!! </div>                        
                    </div>
                    
                     {/* these are all ribbons */}
                    <div style={styles5}>                        
                    </div>
                    <div style={styles4}>                        
                    </div>
                    <div style={styles3}>                        
                    </div>
                    
                </div>
                

           ) 

}


}

export default Head;