"use client";
import {
  ImageUp,
  SquareBottomDashedScissors,
  PackageCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
const Steps = () => {
  const pathname = usePathname();
  const LUCIDES = [ImageUp, SquareBottomDashedScissors, PackageCheck];
  const STEPS = [
    {
      name: "Step 1: Add image",
      description: "Choose an image for your case",
      url: "/upload",
    },
    {
      name: "Step 2: Customize design",
      description: "Make the case for yours",
      url: "/design",
    },
    {
      name: "Step 3: Summary",
      description: "Review your final design",
      url: "/preview",
    },
  ];
  return (
    <ol className="rounded-md bg-white lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
      {STEPS.map((step, i) => {
        //判断当前页面的路径是否和当前步骤的 URL 匹配
        const isCurrent = pathname.endsWith(step.url);
        //判断是否有后续步骤的路径匹配当前页面的路径。
        const isComplete = STEPS.slice(i + 1).some((step) =>
          pathname.endsWith(step.url)
        );
        const Icon = LUCIDES[i];
        return (
          <li key={step.name} className="relative overflow-hidden lg:flex-1">
            <div>
              {/* 进度条 */}
              <span
                className={cn(
                  "absolute left-0 top-0 h-full w-1 lg:bottom-0 bg-zinc-400 lg:top-auto lg:h-1 lg:w-full",
                  { "bg-zinc-700": isCurrent, "bg-primary": isComplete }
                )}
                aria-hidden="true"
              />

              <span
                className={cn(
                  i !== 0 ? "lg:pl-9" : "",
                  "flex items-center px-6 py-4 text-sm font-medium"
                )}
              >
                <span className="flex-shrink-0">
                  <Icon
                    className={cn(
                      "flex items-center size-11 sm:size-[4.5rem] justify-center",
                      {
                        "text-gray-900": isCurrent, // 当前步骤时的颜色
                        "text-gray-400": !isCurrent && !isComplete, // 默认颜色
                        "text-gray-700": isComplete, // 已完成步骤的颜色
                      }
                    )}
                  />
                </span>

                <span className="ml-4 h-full mt-0.5 flex min-w-0 flex-col justify-center">
                  <span
                    className={cn("text-sm font-semibold", {
                      "text-gray-900": isCurrent,
                      "text-gray-400": !isComplete && !isCurrent,
                      "text-gray-700": isComplete,
                    })}
                  >
                    {step.name}
                  </span>
                  <span
                    className={cn("text-sm", {
                      "text-gray-900 font-semibold  ": isCurrent,
                      "text-gray-400": !isComplete && !isCurrent,
                      "text-gray-700": isComplete,
                    })}
                  >
                    {step.description}
                  </span>
                </span>
              </span>

              {/* 分隔符 */}
              {i!==0?(
                <div className="absolute inset-0 w-3 hidden lg:block">
                  <svg
                    className='h-full w-full text-gray-300'
                    viewBox='0 0 12 82'
                    fill='none'
                    preserveAspectRatio='none'>
                    <path
                      d='M0.5 0V31L10.5 41L0.5 51V82'
                      stroke='currentcolor'
                      vectorEffect='non-scaling-stroke'
                    />
                  </svg>  
                </div>
              ):null}
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default Steps;
