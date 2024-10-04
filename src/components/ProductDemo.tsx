import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Image from "next/image";
interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const ProductDemo = ({
  imgSrc,
  className,
  dark = false,
  ...props
}: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* 演示绿幕 */}
      <Image
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        width={896}
        height={1831}
        alt="phone demo"
        className="pointer-events-none z-50 select-none"
      />
      {/* 接收传入的图片 叠加绿幕 */}
      <div className="absolute -z-10 inset-0">
        <Image
          src={imgSrc}
          className="object-cover"
          width={896}
          height={1831}
          alt="overlaying phone image"
        />
      </div>
    </div>
  );
};

export default ProductDemo;
