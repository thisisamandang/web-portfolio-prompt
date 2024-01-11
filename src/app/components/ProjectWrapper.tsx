import React from "react";
import { cn } from "../lib/utils";

type Props = {};

const ProjectWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" glassmorphic h-1/2 p-5 ml-3 flex flex-col gap-5 text-gray-700 rounded-2xl">
      {children}
    </div>
  );
};

const ProjectTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & { as?: "h1" | "h2" | "h3" | "div" }
>(({ className, as: Comp = "div", ...props }, ref) => (
  <Comp ref={ref} className={cn("text-[#035A4E]", className)} {...props} />
));
ProjectTitle.displayName = "CardTitle";

const ProjectDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={className} {...props} />
));
ProjectDescription.displayName = "CardDescription";

export { ProjectWrapper, ProjectTitle, ProjectDescription };
