import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { Check, Star } from "lucide-react";
import ProductDemo from "@/components/ProductDemo";
export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* 图片 */}
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                {/* 图片渐变效果 */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
                <Image
                  src="/snake-1.png"
                  className="w-full"
                  width={633}
                  height={824}
                  alt="snake-1"
                />
              </div>
              {/* 标题 */}
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 text-white px-2">Custom</span>{" "}
                Phone Case
              </h1>
              {/* 产品描述 */}
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone case.
              </p>

              {/* 产品特点 */}
              <ul className="mt-8 space-y-2 text-left flex flex-col font-medium items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="text-green-600 h-5 w-5 shrink-0" />
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="text-green-600 h-5 w-5 shrink-0" />5 year
                    print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="text-green-600 h-5 w-5 shrink-0" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              {/* 用户头像 */}
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    width={300}
                    height={300}
                    alt="user-1"
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    width={300}
                    height={300}
                    alt="user-2"
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    width={300}
                    height={300}
                    alt="user-3"
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    width={300}
                    height={300}
                    alt="user-4"
                  />
                  <Image
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    width={300}
                    height={300}
                    alt="user-5"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="text-green-600 fill-green-600 w-4 h-4" />
                    <Star className="text-green-600 fill-green-600 w-4 h-4" />
                    <Star className="text-green-600 fill-green-600 w-4 h-4" />
                    <Star className="text-green-600 fill-green-600 w-4 h-4" />
                    <Star className="text-green-600 fill-green-600 w-4 h-4" />
                  </div>
                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 产品图片 */}
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                src="/your-image.png"
                className="absolute w-40 left-56 lg:w-52 -top-20 select-none hidden sm:block lg:hidden xl:block"
                width={619}
                height={428}
                alt="your image"
              />
              <Image
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
                width={339}
                height={608}
                alt="line"
              />
              <ProductDemo className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
