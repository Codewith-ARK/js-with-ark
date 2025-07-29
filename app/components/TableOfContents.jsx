// components/TableOfContents.tsx
'use client'
import { useState } from 'react'
import { Menu, ArrowUp } from 'lucide-react'
import { learnings } from '../data/learning'

const TableOfContents = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block bg-base-200 p-4 rounded-lg shadow space-y-2">
        <h2 className="text-lg font-bold mb-2">📑 Table of Contents</h2>
        <ul className="space-y-1 text-sm">
          {learnings.map(day => (
            <li key={day.id}>
              <a href={`#${day.id}`} className="link link-hover">
                {day.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-base-200 border-t border-base-300 flex justify-around items-center p-2 z-50">
        <button onClick={() => setOpen(true)} className="btn btn-sm btn-ghost gap-2">
          <Menu size={18} /> Menu
        </button>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn btn-sm btn-ghost gap-2">
          <ArrowUp size={18} /> Top
        </button>
      </div>

      {/* Drawer Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-end sm:items-center justify-center">
          <div className="bg-base-100 p-6 w-full sm:w-[400px] rounded-t-2xl sm:rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">📑 Table of Contents</h3>
              <button onClick={() => setOpen(false)} className="btn btn-sm">Close</button>
            </div>
            <ul className="space-y-2 text-sm">
              {learnings.map(day => (
                <li key={day.id}>
                  <a
                    href={`#${day.id}`}
                    onClick={() => setOpen(false)}
                    className="link link-hover block"
                  >
                    {day.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default TableOfContents