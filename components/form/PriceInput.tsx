import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const name = "price";
type FormInputNumberProps = {
  defaultValue?: number;
};

function PriceInput({ defaultValue }: FormInputNumberProps) {
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
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}
export default PriceInput;
