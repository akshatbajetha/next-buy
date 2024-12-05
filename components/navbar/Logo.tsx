import Link from "next/link";
import { CiShop } from "react-icons/ci";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <CiShop className="w-6 h-6" />
      </Link>
    </Button>
  );
}
export default Logo;
