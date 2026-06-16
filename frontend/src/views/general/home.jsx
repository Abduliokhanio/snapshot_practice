import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function getType(int) {
        if (int === 0) { return "zero"; };
        return even_or_odd(int)
    }

    function even_or_odd(int) {
        if(int % 2 === 0) {
            return "even";
        }
        else {
            return "odd";
        }
    }

  return (
    <>
        <h1>Hello, World!</h1>
        <p>Welcome to the pokemon app!</p>
        <p>counter: {count}</p>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>

        <p>Type: {getType(count)}</p>
    </>
);

}
export default Home;