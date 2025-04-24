function State(){
    let fruit = "Banana";
    const handleFruit = ()=>{
        fruit = "mango";
        console.log(fruit);
        
    }
    return(
        <div>
            <h1>{fruit}</h1>
            <button onClick={handleFruit}>click me</button>
        </div>
    )
}
export default State;