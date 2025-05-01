function Loops() {
  //   const userName = ["Bappa", "Aditya", "Anil", "Sourav", "Rahul"];
  //   const collegeData = ["Ju", "IIT", "Nit"];

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

  return (
    <div>
      <h1>Loops using Map</h1>

      <table border={1}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Loops;
