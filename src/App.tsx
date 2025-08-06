import { create } from "zustand";
import { Button } from "./components/ui/button";

const useStore = create<{
  count: number;
  inc: () => void;
  dec: () => void;
}>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

function App() {
  const store = useStore();

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button onClick={store.inc}>+</Button>
      <Count />
      <Button onClick={store.dec}>-</Button>
    </div>
  );
}

const Count = () => {
  const store = useStore();
  return <p className="text-5xl py-2">{store.count}</p>;
};
export default App;
