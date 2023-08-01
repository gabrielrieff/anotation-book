interface buttonAnotationProps {
  title: string;
  date: string
  onToggleState: () => void;
}

export function ButtonAnotation(props: buttonAnotationProps){
  return (
    <button className="flex items-center justify-between bg-zinc-100
    hover:bg-zinc-200 duration-[0.3s] p-1 rounded"
      onClick={props.onToggleState}
    >
      <h3 className="font-semibold">{props.title}</h3>
      <span className="text-xs text-zinc-400">{props.date}</span>
    </button>
  )
}