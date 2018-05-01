import React ,{ Component }  from 'react';
import './css/simpleStyles.css';

class Simple extends Component
{
    render() {
return (
        <div className="simpledivmain"> simple : {this.props.Count}  , Increase count : <input type="button" value="+  from child" onClick={this.props.IncreaseCount} /> </div>);
    }

}

export default Simple;