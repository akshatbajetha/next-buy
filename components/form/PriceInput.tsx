import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const name = "price";

function PriceInput() {
  return (
    <div className="mb-2">
      <Label htmlFor="price" className="capitalize">
        Price (₹)
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={1}
        required
        placeholder="Enter product price"
      />
    </div>
  );
}
export default PriceInput;
