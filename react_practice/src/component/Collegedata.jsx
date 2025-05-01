import Colleges from "./Colleges";
function CollegeData(){
    const collegeData = [
        {
          name: "Massachusetts Institute of Technology",
          location: "Cambridge, MA",
          email: "mit@test.com",
          students: [
            { id: 1, name: "Alice", age: 20 },
            { id: 2, name: "Bob", age: 21 },
            { id: 3, name: "Charlie", age: 19 },
            { id: 4, name: "Diana", age: 22 },
            { id: 5, name: "Ethan", age: 20 },
            { id: 6, name: "Fiona", age: 23 },
            { id: 7, name: "George", age: 21 },
            { id: 8, name: "Hannah", age: 20 },
            { id: 9, name: "Ian", age: 22 },
            { id: 10, name: "Judy", age: 19 },
          ],
        },
        {
          name: "Stanford University",
          location: "Stanford, CA",
          email: "stanford@test.com",
          students: [
            { id: 11, name: "Kevin", age: 20 },
            { id: 12, name: "Laura", age: 21 },
            { id: 13, name: "Mike", age: 19 },
            { id: 14, name: "Nina", age: 22 },
            { id: 15, name: "Oscar", age: 20 },
            { id: 16, name: "Pam", age: 23 },
            { id: 17, name: "Quentin", age: 21 },
            { id: 18, name: "Rachel", age: 20 },
            { id: 19, name: "Steve", age: 22 },
            { id: 20, name: "Tina", age: 19 },
          ],
        },
        {
          name: "Harvard University",
          location: "cambridgee, MA",
          email: "harvard@test.com",
          students: [
            { id: 21, name: "Uma", age: 22 },
            { id: 22, name: "Victor", age: 20 },
            { id: 23, name: "Wendy", age: 19 },
            { id: 24, name: "Xander", age: 21 },
            { id: 25, name: "Yara", age: 20 },
            { id: 26, name: "Zane", age: 23 },
            { id: 27, name: "Abby", age: 21 },
            { id: 28, name: "Ben", age: 22 },
            { id: 29, name: "Clara", age: 19 },
            { id: 30, name: "Derek", age: 20 },
          ],
        },
        {
          name: "California Institute of Technology",
          location: "Pasadena, CA",
          email: "california@test.com",
          students: [
            { id: 31, name: "Ella", age: 22 },
            { id: 32, name: "Frank", age: 21 },
            { id: 33, name: "Grace", age: 20 },
            { id: 34, name: "Henry", age: 19 },
            { id: 35, name: "Ivy", age: 23 },
            { id: 36, name: "Jack", age: 22 },
            { id: 37, name: "Kara", age: 21 },
            { id: 38, name: "Liam", age: 20 },
            { id: 39, name: "Mona", age: 19 },
            { id: 40, name: "Noah", age: 20 },
          ],
        },
        {
          name: "University of Oxford",
          location: "Oxford, UK",
          email: "oxford@test.com",
          students: [
            { id: 41, name: "Olivia", age: 21 },
            { id: 42, name: "Peter", age: 20 },
            { id: 43, name: "Queenie", age: 22 },
            { id: 44, name: "Ron", age: 19 },
            { id: 45, name: "Samantha", age: 23 },
            { id: 46, name: "Tom", age: 20 },
            { id: 47, name: "Ursula", age: 22 },
            { id: 48, name: "Vince", age: 21 },
            { id: 49, name: "Willow", age: 20 },
            { id: 50, name: "Xenia", age: 19 },
          ],
        },
        {
          name: "University of Cambridge",
          location: "Cambridg, UK",
          email: "cambridge@test.com",
          students: [
            { id: 51, name: "Yvonne", age: 20 },
            { id: 52, name: "Zack", age: 21 },
            { id: 53, name: "Ava", age: 22 },
            { id: 54, name: "Brian", age: 23 },
            { id: 55, name: "Cindy", age: 19 },
            { id: 56, name: "David", age: 20 },
            { id: 57, name: "Emily", age: 22 },
            { id: 58, name: "Finn", age: 21 },
            { id: 59, name: "Gina", age: 20 },
            { id: 60, name: "Harry", age: 19 },
          ],
        },
        {
          name: "ETH Zurich",
          location: "Zurich, Switzerland",
          email: "Zurich@test.com",
          students: [
            { id: 61, name: "Isabel", age: 21 },
            { id: 62, name: "Jason", age: 20 },
            { id: 63, name: "Kim", age: 22 },
            { id: 64, name: "Leo", age: 19 },
            { id: 65, name: "Megan", age: 23 },
            { id: 66, name: "Nathan", age: 22 },
            { id: 67, name: "Opal", age: 21 },
            { id: 68, name: "Paul", age: 20 },
            { id: 69, name: "Rita", age: 19 },
            { id: 70, name: "Sam", age: 20 },
          ],
        },
        {
          name: "University of Tokyo",
          location: "Tokyo, Japan",
          email: "tokio@test.com",
          students: [
            { id: 71, name: "Toru", age: 21 },
            { id: 72, name: "Yuki", age: 20 },
            { id: 73, name: "Kenji", age: 22 },
            { id: 74, name: "Aiko", age: 19 },
            { id: 75, name: "Sota", age: 23 },
            { id: 76, name: "Rina", age: 22 },
            { id: 77, name: "Daichi", age: 21 },
            { id: 78, name: "Emi", age: 20 },
            { id: 79, name: "Haruto", age: 19 },
            { id: 80, name: "Nana", age: 20 },
          ],
        },
        {
          name: "University of Melbourne",
          location: "Melbourne, Australia",
          email: "melbourne@test.com",
          students: [
            { id: 81, name: "Blake", age: 20 },
            { id: 82, name: "Chloe", age: 21 },
            { id: 83, name: "Dylan", age: 22 },
            { id: 84, name: "Eva", age: 19 },
            { id: 85, name: "Felix", age: 20 },
            { id: 86, name: "Gabriella", age: 23 },
            { id: 87, name: "Hugo", age: 21 },
            { id: 88, name: "Isla", age: 20 },
            { id: 89, name: "Jackie", age: 22 },
            { id: 90, name: "Kyle", age: 19 },
          ],
        },
        {
          name: "National University of Singapore",
          location: "Singapore",
          email: "nus@test.com",
          students: [
            { id: 91, name: "Lena", age: 20 },
            { id: 92, name: "Marcus", age: 21 },
            { id: 93, name: "Nico", age: 22 },
            { id: 94, name: "Olive", age: 19 },
            { id: 95, name: "Philip", age: 23 },
            { id: 96, name: "Que", age: 21 },
            { id: 97, name: "Rei", age: 20 },
            { id: 98, name: "Sasha", age: 19 },
            { id: 99, name: "Taro", age: 22 },
            { id: 100, name: "Una", age: 20 },
          ],
        },
      ];
      

      
    return(

       <div>
        {collegeData.map((college,location)=>(
            <div key={location}>
               <Colleges college={college}/>
                
            </div>
        ))}
       </div>
    )
}
export default CollegeData; 