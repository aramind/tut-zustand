import { ChangeQtyButtons } from "./components/ChangeQtyButtons";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./components/ui/card";
import { PRODUCTS_DATA } from "./lib/mockData";
import { useStore } from "./store/store";

function App() {
  const addProduct = useStore((s) => s.addProduct);
  const cartProducts = useStore((s) => s.products);

  return (
    <main className="space-y-2 dark h-screen bg-background max-w-sm mx-auto mt-2">
      <h1 className="text-2xl text-white">Products:</h1>
      {PRODUCTS_DATA.map((p) => (
        <Card key={p.id}>
          <CardHeader>{p.title}</CardHeader>
          <CardContent>{p.price}$</CardContent>
          <CardFooter>
            {cartProducts.find((item) => item.id === p.id) ? (
              <ChangeQtyButtons productId={p.id} />
            ) : (
              <Button onClick={() => addProduct(p)} variant="default">
                Add to cart
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </main>
  );
}

export default App;
