import User from "./User"

// const Users = ({name, age, address, email})=>{
    const Users = ({userDetails})=>{
    // console.log(data.name);
    
    
    
    return(
        <div>
            <hr />
            <h1>User component</h1>
            {/* <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{address}</h1>
            <h1>Email: {email}</h1> */}
            <h1>{userDetails.userId}</h1>
            <h1>{userDetails.firstName}</h1>
            <h1>{userDetails.lastName}</h1>
            <h1>{userDetails.gender}</h1>
        

        </div>
    )
}
export default Users;