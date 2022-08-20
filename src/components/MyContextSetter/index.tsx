import { component$, useContext } from "@builder.io/qwik";
import { MyContext } from "../../context/MyContext";

export const MyContextSetter = component$(() => {
  const myContext = useContext(MyContext);

  return (
    <div>
      <h2>MyContextSetter</h2>
      <button onClick$={() => myContext.count++}>myContext.count++</button>
    </div>
  );
});
