"use client";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import ProductDemo from "./ProductDemo";
import React from "react";
//常量
const PHONES: string[] = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
];

function splitArray<T>(array: Array<T>, numParts: number): Array<Array<T>> {
  const result: Array<Array<T>> = [];
  const chunkSize = Math.ceil(array.length / numParts); //每部分长度 比如array为6，numPart为3，则chunkSize为2

  for (let i = 0; i < numParts; i++) {
    const start = i * chunkSize;
    const end = start + chunkSize;
    result.push(array.slice(start, end)); //(0,2),即提取[0,1]的元素并生成新数组推入result
  }

  return result;
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    //监听DOM元素的大小变化-
    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    //内存清理
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((imgSrc, reviewIndex) => (
        <Review
          key={reviewIndex}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          imgSrc={imgSrc}
        />
      ))}
    </div>
  );
}

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

function Review({ imgSrc, className, ...props }: ReviewProps) {
  const POSSIBLE_ANIMATION_DELAYS = [
    "0s",
    "0.1s",
    "0.2s",
    "0.3s",
    "0.4s",
    "0.5s",
  ]; //六个随机延迟动画时间

  const animationDelay =
    POSSIBLE_ANIMATION_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
    ];

  return (
    <div
      className={cn(
        "animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-400/50",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <ProductDemo imgSrc={imgSrc} />
    </div>
  );
}

function ReviewGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  //页面加载成功后只显示一次，进入到视窗的amount后数值显示
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  const columns: Array<Array<string>> = splitArray(PHONES, 3); //二维数组
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);
  console.log(columns);
  console.log(column1, column2, column3);
  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView ? (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              cn({
                "md:hidden": reviewIndex >= column1.length + column3[0].length,
                "lg:hidden": reviewIndex >= column1.length,
              })
            }
            msPerPixel={7}
          />
          <ReviewColumn
            className="hidden md:block"
            reviews={[...column2, ...column3[1]]}
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? "lg:hidden" : ""
            }
            msPerPixel={15}
          />
          <ReviewColumn reviews={column3.flat()} msPerPixel={10} />
        </>
      ) : (
        <h1 className="mt-16 text-6xl text-center absolute">
          Let&apos;s see the amazing works...
        </h1>
      )}
      {/* 淡入淡出 */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100"></div>
    </div>
  );
}

export function Reviews() {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <Image
        aria-hidden="true"
        src="/what-people-are-buying.png"
        width={193}
        height={143}
        className="absolute select-none hidden xl:block -left-32 top-1/3"
        alt="what-people-are-buying"
      />

      <ReviewGrid />
    </MaxWidthWrapper>
  );
}
