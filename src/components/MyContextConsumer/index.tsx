import { component$, useContext } from "@builder.io/qwik";
import { MyContext } from "../../context/MyContext";

export const MyContextConsumer = component$(() => {
  const myContext = useContext(MyContext);

  return (
    <div>
      <h2>MyContextConsumer</h2>
      myContext.count = {myContext.count}
    </div>
  );
});
