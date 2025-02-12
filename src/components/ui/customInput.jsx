import * as React from "react";

import { cn } from "src/lib/utils";

const CustomInput = React.forwardRef(
  ({ className, type, adornment, adornmentProps = {}, ...props }, ref) => {
    const {
      position = "start",
      adornmentClassName,
      ...restAdornmentProps
    } = adornmentProps;

    return (
      <div
        className={cn(
          "m-0 flex h-9 items-center justify-center overflow-hidden rounded-md border border-input bg-transparent p-0 py-0 text-base shadow-xs transition-colors focus-within:outline-hidden focus-within:ring-1 focus-within:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
      >
        {adornment && position === "start" && (
          <span
            className={cn(
              "flex h-full w-10 items-center justify-end border-none bg-gray-100 py-1 text-muted-foreground",
              adornmentClassName,
            )}
            {...restAdornmentProps}
          >
            {adornment}
          </span>
        )}
        <input
          type={type}
          className={cn(
            "flex h-full w-full items-center justify-center bg-transparent py-1 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        {adornment && position === "end" && (
          <span
            className={cn(
              "flex h-full w-10 items-center justify-center border-none bg-gray-100 px-2 text-muted-foreground",
              adornmentClassName,
            )}
            {...restAdornmentProps}
          >
            {adornment}
          </span>
        )}
      </div>
    );
  },
);
CustomInput.displayName = "CustomInput";

export { CustomInput };
