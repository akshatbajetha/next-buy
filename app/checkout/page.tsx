"use client";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import SectionTitle from "@/components/global/SectionTitle";
import { useToast } from "@/hooks/use-toast";
import { checkoutOrderAction, fetchCartItemsByCartId } from "@/utils/actions";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { formatCurrency } from "@/utils/format";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

function CheckoutPage() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const [cartItems, setCartItems] = useState<CartItemWithProduct[]>([]);
  const cartId = searchParams.get("cartId")!;
  const orderId = searchParams.get("orderId")!;
  useEffect(() => {
    const fetchData = async () => {
      const fetchedCartItems = await fetchCartItemsByCartId(cartId);
      setCartItems(fetchedCartItems); // update the cartItems state
    };
    fetchData();
  }, [cartId]);

  const handleClick = () => {
    setTimeout(() => {
      toast({ description: "Order Placed Successfully" });
    }, 1000);
    const url = "https://buymeacoffee.com/akshatbajetha";
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <SectionTitle text="Order Summary" />
      <FormContainer action={checkoutOrderAction}>
        <input type="hidden" name="cartId" value={cartId} />
        <input type="hidden" name="orderId" value={orderId} />
        <SummarySection cartItems={cartItems} />
        <a onClick={handleClick}>
          <SubmitButton text="Pay Now" className="mt-8 p-6 text-lg" />
        </a>
      </FormContainer>
    </>
  );
}
type CartItemWithProduct = {
  id: string;
  orderTotal: number;
  cartItems: {
    amount: number;
    product: {
      image: string;
      name: string;
      price: number;
    };
  }[];
};

function SummarySection({ cartItems }: { cartItems: CartItemWithProduct[] }) {
  return (
    <div className="mt-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Image</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartItems.map((item) => {
            return (
              <>
                {item.cartItems.map((p) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell className="w-1/4">
                        <Image
                          src={p.product.image}
                          width={200}
                          height={200}
                          alt={p.product.name}
                          className="object-cover"
                        />
                      </TableCell>
                      <TableCell className="w-1/4">{p.product.name}</TableCell>
                      <TableCell className="w-1/4">{p.amount}</TableCell>
                      <TableCell className="w-1/4">
                        {formatCurrency(p.amount * p.product.price)}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </>
            );
          })}
        </TableBody>
        <TableCaption className="font-bold text-xl mt-4">
          Total Amount: {formatCurrency(cartItems[0]?.orderTotal)}
        </TableCaption>
      </Table>
    </div>
  );
}
export default CheckoutPage;
