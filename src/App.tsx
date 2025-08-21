
import { useState } from 'react'
import type { Lesson } from '@types/index'
import Header from '@components/Header'
import LessonGrid from '@components/LessonGrid'
import ProgressStats from '@components/ProgressStats'
import ChatInterface from '@components/ChatInterface'

export default function App(){
  const [active, setActive] = useState<Lesson|null>(null)

  return (
    <div className="container">
      <Header />
      <div className="grid" style={{gridTemplateColumns:'2fr 1fr', alignItems:'start'}}>
        <div className="grid" style={{gap:16}}>
          <h2 style={{margin:'6px 0'}}>Start a lesson</h2>
          <LessonGrid onStart={setActive} />
        </div>
        <div className="grid" style={{gap:16}}>
          <h2 style={{margin:'6px 0'}}>Your progress</h2>
          <ProgressStats />
          <div className="card">
            <div style={{fontWeight:600, marginBottom:8}}>Coach Tip</div>
            <div style={{opacity:.9, lineHeight:1.5}}>
              Write your goal. Tell an ally. Find a Yoda. Journal one minute. Small daily actions win.
            </div>
          </div>
        </div>
      </div>

      <div className="footer">© StudentReach — ALIVE Coaching Prototype</div>

      <ChatInterface lesson={active} onClose={()=>setActive(null)} />
    </div>
  )
}
