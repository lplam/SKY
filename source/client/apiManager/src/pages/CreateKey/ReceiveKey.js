import React, {Component} from "react";
class ReceiveKey extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            key:""
        };
    }

    render(){
        
        return(
            <div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <input type="text" name="" id="input" class="form-control" value={this.state.key}  style={{width:"600px"}}/>
                    <button type="button" class="btn btn-success">COPY</button>
                    <button type="button" class="btn btn-warning">NEXT</button>
                </div>
            </div> 
        )
    }
}


export default ReceiveKey;