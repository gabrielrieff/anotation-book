import { BsCheckAll } from "react-icons/bs";

interface floatSaveProps {
  onSave : () => void;
}

export function FloatSave(props: floatSaveProps) {
  
  return (
    <div className="flex justify-evenly gap-1 fixed bottom-11 right-10">
      <button onClick={props.onSave} className="bg-blue-500 hover:bg-blue-400 duration-[0.3s] rounded">
        <BsCheckAll className="w-8 h-8 text-white" />
      </button>
    </div>
  );
}
