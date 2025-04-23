function Todo() {
  return (
    <div>
      <h1>Bappaditya Sinha's Todo</h1>
      <img
        src="https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=80"
        alt="Bappaditya Sinha"
        className="photo"
      />

      <ul>
        <li>This is my favourite flower</li>
        <li>This is the great flower</li>
      </ul>

      <button onClick={() => alert("Hello")}>Click</button>
    </div>
  );
}
export default Todo;
