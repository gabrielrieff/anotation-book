import {
  BubbleMenu
} from "@tiptap/react";

import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from "react-icons/rx";
import { BubbleButton } from "../BubbleButton/BubbleButton";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

interface bubbleMenuProps {
  editor: any
}

export function BubbleMenuContainer(props : bubbleMenuProps){
  return (
    <BubbleMenu
    className="bg-zinc-500 shadow-xl border border-zinc-600 shadow-black/20
    rounded-lg overflow-hidden flex divide-x divide-zinc-600"
    editor={props.editor}
  >
    <ToggleGroup.Root type="single" defaultValue="center" className="w-full flex">
      <ToggleGroup.Item value="center">
        <BubbleButton>
          Text
          <RxChevronDown className="w-5 h-5" />
        </BubbleButton>
      </ToggleGroup.Item>

      <ToggleGroup.Item value="center">
        <BubbleButton>
          <RxChatBubble className="w-5 h-5" />
          Comment
        </BubbleButton>
      </ToggleGroup.Item>

      <div className="flex items-center">
        <ToggleGroup.Item value="center">
          <BubbleButton
            onClick={() => props.editor.chain().focus().toggleBold().run()}
            data-active={props.editor.isActive("bold")}
          >
            <RxFontBold className="w-5 h-5" />
          </BubbleButton>
        </ToggleGroup.Item>

        <ToggleGroup.Item value="center">
          <BubbleButton
            onClick={() => props.editor.chain().focus().toggleItalic().run()}
            data-active={props.editor.isActive("italic")}
          >
            <RxFontItalic className="w-5 h-5" />
          </BubbleButton>
        </ToggleGroup.Item>

        <ToggleGroup.Item value="center">
          <BubbleButton
            onClick={() => props.editor.chain().focus().toggleStrike().run()}
            data-active={props.editor.isActive("strike")}
          >
            <RxStrikethrough className="w-5 h-5" />
          </BubbleButton>
        </ToggleGroup.Item>

        <ToggleGroup.Item value="center">
          <BubbleButton
            onClick={() => props.editor.chain().focus().toggleCode().run()}
            data-active={props.editor.isActive("code")}
          >
            <RxCode className="w-5 h-5" />
          </BubbleButton>
        </ToggleGroup.Item>
      </div>
    </ToggleGroup.Root>
  </BubbleMenu>
    )
}