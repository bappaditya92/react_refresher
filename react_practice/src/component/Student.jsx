import Colleges from "./Colleges";

function Student({ student }) {
  return (
    <div>
      <h3>Student Data</h3>
      {student.students.map((Stud) => (
        <ul>
          <li>Id: {Stud.id}</li>
          <li>Name: {Stud.name}</li>
          <li>Age: {Stud.age}</li>
          <Colleges college/>
        </ul>
      ))}
    </div>
  );
}
export default Student;
