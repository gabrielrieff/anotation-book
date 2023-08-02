import {
  useEditor,
  EditorContent,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'

import Paragraph from '@tiptap/extension-paragraph'

import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'

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
      Paragraph,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: initialContext,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });


  if (!editor) {
    return null
  }
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
