import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { CircleCheckBig, Star, SmilePlus } from "lucide-react";
import ProductDemo from "@/components/ProductDemo";
import { Icons } from "@/components/Icons";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
export default async function Home() {
  return (
    <div className="bg-slate-50">
      {/* 产品介绍 */}
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* 标题 */}
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-black text-white px-2 py-1 rounded-xl">
                  Custom
                </span>{" "}
                Phone Case
              </h1>
              {/* 产品描述 */}
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-a-kind </span>
                phone case.{" "}
                <span className="underline underline-offset-4 text-xl font-bold">
                  MonoCase
                </span>{" "}
                helps you protect your memories, not just your phone...
              </p>

              {/* 产品特点 */}
              <ul className="mt-8 space-y-2 text-left flex flex-col font-medium items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <CircleCheckBig className="text-black size-6 shrink-0" />
                    <p>
                      <span className="font-bold text-2xl">H</span>igh-quality,
                      durable material
                    </p>
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <CircleCheckBig className="text-black size-6 shrink-0" />
                    <p>
                      <span className="font-bold text-2xl">5</span>-year print
                      guarantee
                    </p>
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <CircleCheckBig className="text-black size-6 shrink-0" />
                    <p>
                      <span className="font-bold text-2xl">C</span>ompatible
                      with modern iPhone models
                    </p>
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
                    <Star className="text-yellow-300 fill-yellow-300 w-5 h-5" />
                    <Star className="text-yellow-300 fill-yellow-300 w-5 h-5" />
                    <Star className="text-yellow-300 fill-yellow-300 w-5 h-5" />
                    <Star className="text-yellow-300 fill-yellow-300 w-5 h-5" />
                    <Star className="text-yellow-300 fill-yellow-300 w-5 h-5" />
                  </div>
                  {/* 好评用户数量 */}
                  <p>
                    <span className="font-semibold">1.250</span> trusted
                    customers
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

      {/* 第二部分 */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What out{" "}
              <span className="relative px-2">
                customers{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-black" />
              </span>{" "}
              say
            </h2>
          </div>

          {/* 用户具体评价 */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            {/* 用户一 */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="text-lg leading-8 text-center">
                <p>
                  &quot;The case feels durable and I even got a compliment on
                  the design. Had the case for two and a half months now and the
                  image is super
                  <span className="p-1 mx-1 rounded-md bg-slate-800 text-white">
                    clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it.&quot;
                </p>
              </div>
              {/* 用户一的个人资料 */}
              <div className="flex gap-4 mt-2">
                <Image
                  className="rounded-full size-12 object-cover"
                  src="/users/user-1.png"
                  width={300}
                  height={300}
                  alt="user-1"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <SmilePlus className="size-5 stroke-[3px] text-black" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 用户二 */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="text-lg leading-8 text-center">
                <p>
                  &quot;I usually keep my phone together with my keys in my
                  pocket and that led to some pretty heavy scratchmarks on all
                  of my last phone cases. This one, besides a barely noticeable
                  scratch on the corner,looks brand
                  <span className="p-1 mx-1 rounded-md bg-slate-800 text-white">
                    new
                  </span>
                  after about half a year . I dig it.&quot;
                </p>
              </div>
              {/* 用户二的个人资料 */}
              <div className="flex gap-4 mt-2">
                <Image
                  className="rounded-full size-12 object-cover"
                  src="/users/user-2.png"
                  width={300}
                  height={300}
                  alt="user-2"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Emmy Rossum</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <SmilePlus className="size-5 stroke-[3px] text-black" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        {/* 产品轮播图 */}
        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      {/* 第三部分 */}
      <section>
        <MaxWidthWrapper className="py-24">
          <div className=" mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Upload your photo and get{" "}
                <span className="bg-black text-white px-2 py-1 rounded-xl">
                  your onw case
                </span>{" "}
                now
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40 place-items-center">
              {/* 箭头居中 移动屏幕状态下旋转90度 */}
              <Image
                src="/arrow.png"
                width={126}
                height={31}
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 left-[55%] rotate-90 md:rotate-0
                "
                alt="arrow"
              />

              <div className="relative h-80 md:h-full w-full max-w-sm md:justify-self-end rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <Image
                  src="/horse.jpg"
                  width={853}
                  height={1280}
                  className="bg-white rounded-md object-cover shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                  alt="horse_phone"
                />
              </div>

              <ProductDemo imgSrc="/horse_phone.jpg" className="w-60" />
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <CircleCheckBig className="inline size-6 mr-1.5" />
              High-quality silicone material
            </li>
            <li className="w-fit">
              <CircleCheckBig className="inline size-6 mr-1.5" />
              Scratch- and fingerprint resistant coating
            </li>
            <li className="w-fit">
              <CircleCheckBig className="inline size-6 mr-1.5" />
              Wireless charging compatible
            </li>
            <li className="w-fit">
              <CircleCheckBig className="inline size-6 mr-1.5" />5 year print
              warranty
            </li>

            <div className="flex justify-center">
              <Link
                className={buttonVariants({
                  size: "lg",
                  className:'mx-auto mt-8'
                })}
                href="/configure/upload"
              >
                Create your case now
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
