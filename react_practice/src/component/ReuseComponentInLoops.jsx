import Userrr from "./Userrr";
function ReuseComponentInLoops(){
    const userData = [
        {
          name: "Bappaditya",
          age: 30,
          email: "bsinha@gmail.com",
          id: 101,
        },
        {
          name: "Aditya",
          age: 32,
          email: "aditya@gmail.com",
          id: 201,
        },
        {
          name: "Rahul",
          age: 25,
          email: "rahul@gmail.com",
          id: 301,
        },
        {
          name: "Sourav",
          age: 23,
          email: "sourav@gmail.com",
          id: 401,
        },
        {
          name: "Sumit",
          age: 29,
          email: "Sumit@gmail.com",
          id: 501,
        },
      ];
    return(
        <>
        {/* <h1>Reuse Component</h1> */}
        {
            userData.map((user)=>(
                <div key={user.id}>
                    <Userrr user={user}/>
                </div>

            ))
        }
        </>

    )
    
}
export default ReuseComponentInLoops;