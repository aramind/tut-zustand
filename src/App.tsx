import { useShallow } from "zustand/shallow";
import { useStore } from "./store/store";

function App() {
  // method 1
  // const age = useStore((state) => state.age);
  // const fullName = useStore((state) => state.fullName);

  //method 2
  const { age, fullName } = useStore(
    useShallow((state) => ({
      age: state.age,
      fullName: state.fullName,
    }))
  );

  return (
    <div>
      <p>{age}</p>
      <p>{fullName}</p>
    </div>
  );
}

export default App;
