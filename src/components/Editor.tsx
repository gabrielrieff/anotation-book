import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { lowlight } from "lowlight";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import html from "highlight.js/lib/languages/xml";

import "highlight.js/styles/atom-one-dark-reasonable.css";

import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from "react-icons/rx";

import { initialContext } from "./initialContext";
import { BubbleButton } from "./BubbleButton";

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
        <BubbleMenu
          className="bg-zinc-500 shadow-xl border border-zinc-600 shadow-black/20
                      rounded-lg overflow-hidden flex divide-x divide-zinc-600"
          editor={editor}
        >
          <BubbleButton>
            Text
            <RxChevronDown className="w-5 h-5" />
          </BubbleButton>

          <BubbleButton>
            <RxChatBubble className="w-5 h-5" />
            Comment
          </BubbleButton>

          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive("bold")}
            >
              <RxFontBold className="w-5 h-5" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive("italic")}
            >
              <RxFontItalic className="w-5 h-5" />
            </BubbleButton>

            <BubbleButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            data-active={editor.isActive("strike")}
            >
              <RxStrikethrough className="w-5 h-5" />
            </BubbleButton>

            <BubbleButton
            onClick={() => editor.chain().focus().toggleCode().run()}
            data-active={editor.isActive("code")}
            >
              <RxCode className="w-5 h-5" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
}
