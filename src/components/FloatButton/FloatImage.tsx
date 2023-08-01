import { ComponentProps} from "react";

interface floatButtonProps extends ComponentProps<'img'>{
}


export function FloatImage(props : floatButtonProps){
  return (

      <img
        className="w-12 border border-zinc-600 rounded"
        {...props}
      />

  )
}