function ClickEventFunctionCall(){
    // function callFun(){
    //     alert("Function called...")
    // }

    const fruit =  (name)=>{
        alert(name)
    }

    return(
        <>
        <h1>Event and function call</h1>
        {/* <button onClick={callFun}>click me</button> */}
        <button onClick={()=>fruit('apple')}>apple</button>
        <button onClick={()=>fruit('banana')}>banana</button>
        </>
    )
}
export default ClickEventFunctionCall;