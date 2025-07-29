// components/DaySection.tsx
import React from 'react'

const DaySection = ({ id, title, content, code }) => {
  return (
    <section id={id} className="p-6 bg-base-200 rounded-xl shadow-md scroll-mt-20">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4 text-base leading-relaxed">{content}</div>

      {code && (
        <div className="mt-6">
          <p className="font-medium mb-2">Example code:</p>
          <pre className="bg-black text-white text-sm rounded-lg p-4 overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </section>
  )
}

export default DaySection
