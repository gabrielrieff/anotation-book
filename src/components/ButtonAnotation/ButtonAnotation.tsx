import { useEffect, useState } from "react";

interface buttonAnotationProps {
  onToggleState: () => void;
}

export function ButtonAnotation(props: buttonAnotationProps) {
  const [anotations, setAnotations] = useState<Array<any>>([]);
  const keys = Object.keys(localStorage);

  useEffect(() => {

    keys.map((e) => {
      const anotation = JSON.parse(localStorage.getItem(e)!);

      const obj = Object.assign({}, anotation)

      var myObject = [...anotations, obj];

      console.log(anotation);
      console.log(myObject);
      
      setAnotations(myObject);

    });

  }, []);

  return (
    <>
      {anotations.map((item) => (
        <button
          className="flex items-center justify-between bg-zinc-100
        hover:bg-zinc-200 duration-[0.3s] p-1 rounded"
          onClick={props.onToggleState}
          key={item[0]}
        >
          <h3 className="font-semibold">{item[0]}</h3>
          <span className="text-xs text-zinc-400">{item[1]}</span>
        </button>
      ))}
    </>
  );
}
