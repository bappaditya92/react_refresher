import User from "./User"

const Users = ({name, age, address})=>{
    // console.log(data.name);
    console.log(name, age, address);
    
    
    return(
        <div>
            <h1>User component</h1>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{address}</h1>
        

        </div>
    )
}
export default Users;