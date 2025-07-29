// app/page.tsx
import DaySection from './components/DaySection'
import ScrollToTop from './components/ScrollToTop'
import TableOfContents from './components/TableOfContents'
import { learnings } from './data/learning'

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
      <aside className="lg:sticky lg:top-6 lg:self-start">
        <TableOfContents />
      </aside>

      <main className="space-y-12">
        {learnings.map(day => (
          <DaySection key={day.id} {...day} />
        ))}
      </main>

      <ScrollToTop />
    </div>
  )
}
