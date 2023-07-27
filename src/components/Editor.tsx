import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContext } from './initialContext'


export function Editor(){

  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: initialContext,
  })

  return (
      <EditorContent
        className="max-w-[400] mx-auto pt-16 prose prose-violet"
        editor={editor}
      />
  )
}