import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Rating from "./Rating";
import Comment from "./Comment";
import Image from "next/image";
import Link from "next/link";

type ReviewCardProps = {
  reviewInfo: {
    productId: string;
    comment: string;
    rating: number;
    name: string;
    image: string;
  };
  children?: React.ReactNode;
};

function ReviewCard({ reviewInfo, children }: ReviewCardProps) {
  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center">
          <Image
            src={reviewInfo.image}
            alt={reviewInfo.name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <Link href={`/products/${reviewInfo.productId}`}>
              <h3 className="text-sm font-bold capitalize mb-1 hover:underline">
                {reviewInfo.name}
              </h3>
            </Link>
            <Rating rating={reviewInfo.rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={reviewInfo.comment} />
      </CardContent>
      <div className="absolute top-3 right-3">{children}</div>
    </Card>
  );
}
export default ReviewCard;
