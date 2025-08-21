
import type { Lesson } from '@types/index'

export default function LessonCard({ lesson, onStart }:{ lesson: Lesson, onStart:(l:Lesson)=>void }) {
  return (
    <div className="card" style={{display:'grid',gap:10}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'column'}}>
          <div style={{opacity:.7,fontSize:12}}>Lesson {lesson.number}</div>
          <div style={{fontWeight:600}}>{lesson.title}</div>
        </div>
        <div className="pill">{lesson.duration}</div>
      </div>
      <div style={{opacity:.85,fontSize:14,lineHeight:1.5}}>{lesson.summary}</div>
      <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
        {lesson.topics.map(t=> <span key={t} className="pill">{t}</span>)}
        <span className="pill">Difficulty: {lesson.difficulty}</span>
      </div>
      <div style={{display:'flex',justifyContent:'flex-end'}}>
        <button className="btn btn-primary" onClick={()=>onStart(lesson)}>Start Lesson</button>
      </div>
    </div>
  )
}
