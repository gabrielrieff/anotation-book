import { ComponentProps, ReactNode } from "react";

interface floatTextProps extends ComponentProps<'div'>{
  children: ReactNode;
}


export function FloatText(props : floatTextProps){
  return (

      <div className="flex flex-col text-left" {...props}>
        {props.children}
      </div>
  )
}