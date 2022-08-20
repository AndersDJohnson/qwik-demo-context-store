import { useStore, component$, useContextProvider } from "@builder.io/qwik";
import { MyContext } from "../../context/MyContext";
import { MyContextSetter } from "../MyContextSetter";
import { MyContextConsumer } from "../MyContextConsumer";

export const App = component$(() => {
  // Create some reactive storage
  const myContextState = useStore({
    count: 0,
  });

  useContextProvider(MyContext, myContextState);

  return (
    <div>
      <MyContextConsumer />

      <hr />

      <MyContextSetter />
    </div>
  );
});
