const Userrr = ({user})=>{
    return(
        <div style={{
            border: "1px solid green",
            padding: "10px",
            margin: "10px",
            width: "400px",
            borderRadius: "10px"
        }}>
            <h3>id: <span style={{color:'red'}}>{user.id}</span></h3>
           <h3>Name: <span style={{color:'green'}}>{user.name}</span></h3>
           <h3>email: <span style={{color:'yellowgreen'}}>{user.email}</span></h3>
           <h3>Age: <span style={{color:'skyblue'}}>{user.age}</span></h3>
        </div>
    )
}
export default Userrr;