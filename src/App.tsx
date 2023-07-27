import { Editor } from "./components/Editor"


function App() {

  return (
    <>
        <div className='min-h-screen bg-zinc-300 text-zinc-900 p-8'>
          <div className="bg-white  w-[1100] mx-auto rounded-xl min-h-[720px] shadow-sm overflow-hidden grid grid-cols-[16rem_1fr]">
            <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
              <div className="flex gap-2 group">
                <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400 duration-[0.3s]" />
                <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400 duration-[0.3s]" />
                <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400 duration-[0.3s]" />
              </div>
            </aside>
            <main className="p-4">
                <Editor />
            </main>
          </div>
        </div>
    </>
  )
}

export default App
