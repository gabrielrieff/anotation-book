import {
  useEditor,
  EditorContent,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { lowlight } from "lowlight";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import html from "highlight.js/lib/languages/xml";

import "highlight.js/styles/atom-one-dark-reasonable.css";

import { initialContext } from "./initialContext";
import { BubbleMenuContainer } from "./BubbleMenu/BubbleMenu";
import { FloatMenu } from "./FloatMenu/FloatMenu";

lowlight.registerLanguage("html", html);

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: initialContext,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
      <EditorContent
        className="max-w-[400] mx-auto pt-16 prose prose-violet"
        editor={editor}
      />
      {editor && (
        <FloatMenu editor={editor}/>
      )}
      {editor && (
        <BubbleMenuContainer editor={editor}/>
      )}
    </>
  );
}
