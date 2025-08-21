
import { lessons } from '@data/lessons'
import type { Lesson } from '@types/index'
import LessonCard from './LessonCard'

export default function LessonGrid({ onStart }:{ onStart:(l:Lesson)=>void }){
  return (
    <div className="grid grid-3">
      {lessons.map(l => <LessonCard key={l.id} lesson={l} onStart={onStart} />)}
    </div>
  )
}
