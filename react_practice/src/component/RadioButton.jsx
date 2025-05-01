import { useState } from "react";

function RadionButton() {
  const [gender, setGender] = useState("female");
  const[city,setCity] = useState("Contai")
  return (
    <div>
      <h1>Radio Button</h1>
      <h4>Select Gender</h4>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        value={"male"}
        name="gender"
        checked={gender == "male"}
        id="male"
      />

      <label htmlFor="male">Male</label>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        value={"female"}
        name="gender"
        checked={gender == "female"}
        id="female"
      />
      <label htmlFor="female">Female</label>
      <h2>Selected Gender: {gender}</h2>
      <br /><br />

      <h4>Select City</h4>
      <select defaultValue={"Contai"} onChange={(event)=>setCity(event.target.value)}>
        <option value="Kolkata">Kolkata</option>
        <option value="Contai">Contai</option>
        <option value="Haldia">Haldia</option>
      </select>
      <h1>Selected City: {city}</h1>


    </div>
  );
}
export default RadionButton;
