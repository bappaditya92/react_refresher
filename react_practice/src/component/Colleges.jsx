import CollegeData from "./Collegedata";

const Colleges = ({college})=>{
 
    
    return(
        <div style={{backgroundColor:"#acc",
            padding:"20px",
            borderBottom:"2px solid #000",
            margin:"20px",
            borderRadius:"10px"
        }}>
             <h1>name: {college.name}</h1>
                <ul>
                    <li>
                        <h3>City: {college.location}</h3>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h3>email: {college.email}</h3>
                    </li>
                    <li>
                        <div>
                            <li>
                                <ul>
                                    <div>
                                        {college.students.map((item)=>(
                                            <ul>
                                                <li>{item.id}</li>
                                                <li>{item.name}</li>
                                                <li>{item.age}</li>
                                            </ul>
                                            
                                        ))}
                                    </div>
                                </ul>
                            </li>
                        </div>
                    </li>
                </ul>
        </div>
    )
}
export default Colleges;