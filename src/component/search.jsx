import React from "react";
const Search =({input,placeholder}) => {
    return(
        <div className="row">
            <div className="col-md-8" style={{marginTop:"20px"}}>
               <form>
                   <div className="form-group">
                       <input type="text" className="form-control" placeholder={placeholder}
                       onChange={input}/>
                   </div>
               </form>
            </div>
        </div>
    )
}


    
        
export default Search;