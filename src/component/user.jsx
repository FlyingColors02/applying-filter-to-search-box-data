import React from "react";

const Users=({userData})=>{
    return(
        <div className="row">
            {
                userData.map(item=>(
                    <div className="col-md-3" key={item.id} style={{width:"160px",margin:"2px"}}>
                        <div className="card text-left">
                          <img className="card-img-top" src={`https://i.pravatar.cc/150?img=${item.id}`} alt=""/>
                          <div className="card-body">
                            <h4 className="card-title">{item.name}</h4>
                            <p className="card-text">{item.email}</p>
                          </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Users;