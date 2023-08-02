import { FloatingMenu } from "@tiptap/react";
import { Float } from "../FloatButton";
import { schema } from "./schema";

interface floatMenuProps {
  editor: any;
}

export function FloatMenu(props: floatMenuProps){

  return (
    <FloatingMenu
    editor={props.editor}
    shouldShow={({ state }) => {
      const { $from } = state.selection;
      const currentLineText = $from.nodeBefore?.textContent;

      return currentLineText === "/";
    }}
    className="bg-zinc-100 shadow-xl border border-zinc-300 shadow-black/20
    rounded-lg overflow-hidden flex flex-col py-2 px-1 gap-2"
  >
    <button onClick={() => props.editor.chain().focus().t}></button>
    {schema.map((float) => (
        <Float.Root
          key={float.id}
          onClick={() => float.handleEditor(props)}
        >
          <Float.Image
            src={float.src}
            alt={float.title}
          />
          <Float.Text>
            <span className="text-sm">{float.title}</span>
            <span className="text-xs text-zinc-400">
            {float.resume}
            </span>
          </Float.Text>
      </Float.Root>
    ))}
  </FloatingMenu>
  )
}