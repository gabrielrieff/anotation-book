export const schema = [
  {
    id: 1,
    src: "https://www.notion.so/images/blocks/text/en-US.png",
    title: "Texto",
    resume: "Comece a escrever com texto sem formatação.",
    handleEditor: () => {},
  },
  {
    id: 2,
    src: "https://www.notion.so/images/blocks/header.57a7576a.png",
    title: "Título 1",
    resume: "Título da seção grande.",
    handleEditor: (props: any) => props.editor.chain().focus().toggleHeading({ level: 1 }).run(),
  },
  {
    id: 3,
    src: "https://www.notion.so/images/blocks/subheader.9aab4769.png",
    title: "Título 2",
    resume: "Título da seção médio.",
    handleEditor: (props: any) => props.editor.chain().focus().toggleHeading({ level: 2 }).run(),
  },
  {
    id: 4,
    src: "https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png",
    title: "Título 3",
    resume: "Título da seção pequeno.",
    handleEditor: (props: any) => props.editor.chain().focus().toggleHeading({ level: 3 }).run(),
  },
  {
    id: 5,
    src: "https://www.notion.so/images/blocks/bulleted-list.0e87e917.png",
    title: "Lista com marcadores",
    resume: "Criar uma lista com marcadores simples.",
    handleEditor: (props: any) => props.editor.chain().focus().toggleBulletList().run(),
  },
  {
    id: 6,
    src: "https://www.notion.so/images/blocks/to-do.f8d20542.png",
    title: "Lista de tarefas",
    resume: "Acompanhar tarefas com uma lista de tarefas.",
    handleEditor: (props: any) => props.editor.chain().focus().toggleTaskList().run(),
  },
  {
    id: 7,
    src: "https://www.notion.so/images/blocks/simple-table.e31a23bb.png",
    title: "Tabela",
    resume: "Adicione uma lista com marcadores simples.",
    handleEditor: (props: any) => props.editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run(),
  },
];