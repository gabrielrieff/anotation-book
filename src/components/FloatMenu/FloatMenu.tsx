import { FloatingMenu } from "@tiptap/react";
import { Float } from "../FloatButton";

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
    className="bg-zinc-500 shadow-xl border border-zinc-600 shadow-black/20
    rounded-lg overflow-hidden flex flex-col py-2 px-1 gap-2"
  >
      <Float.Root>
          <Float.Image
            src="https://www.notion.so/images/blocks/text/en-US.png"
            alt="Texto"
          />
          <Float.Text>
            <span className="text-sm">Texto</span>
            <span className="text-xs text-zinc-400">
              Comece a escrever com texto sem formatação.
            </span>
          </Float.Text>
        </Float.Root>

        <Float.Root
          onClick={() =>
            props.editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          <Float.Image
            src="https://www.notion.so/images/blocks/header.57a7576a.png"
            alt="Título"
          />
          <Float.Text>
            <span className="text-sm">Título</span>
            <span className="text-xs text-zinc-400">
              Título da seção grande.
            </span>
          </Float.Text>
      </Float.Root>

  </FloatingMenu>
  )
}