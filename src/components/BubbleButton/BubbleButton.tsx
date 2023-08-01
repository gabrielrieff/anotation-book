import { ComponentProps, ReactNode } from "react";

interface bubbleButtonProps extends ComponentProps<'button'>{
  children: ReactNode
}

export function BubbleButton(props : bubbleButtonProps){
  return(
    <button
    className="p-2 text-zinc-100 text-sm flex items-center gap-1.5 
    font-medium leading-none hover:text-zinc-50 hover:bg-zinc-400 
    duration-[0.2s] data-[active=true]:text-violet-500 data-[active=true]:bg-violet-300"
    {...props} />
  )
}