import { ComponentProps, ReactNode } from "react";

interface floatButtonProps extends ComponentProps<'button'>{
  children: ReactNode;
}


export function FloatButton(props : floatButtonProps){
  return (
    <button
      className="flex items-center gap-2 p1 rounded min-w-[280px]
      hover:bg-zinc-400"
      {...props}
    >
      {props.children}
    </button>
  )
}