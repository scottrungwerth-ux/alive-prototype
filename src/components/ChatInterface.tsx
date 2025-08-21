
import { useEffect, useRef } from 'react'
import type { Lesson } from '@types/index'
import { useChat } from '@hooks/useChat'
import ChatMessage from './ChatMessage'

export default function ChatInterface({ lesson, onClose }:{ lesson:Lesson|null, onClose:()=>void }){
  const { history, input, setInput, typing, send } = useChat(lesson ?? undefined)
  const scroller = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: 'smooth' })
  },[history, typing])

  if(!lesson) return null

  return (
    <div style={{
      position:'fixed', inset:0, background:'rgba(6,10,22,.66)', backdropFilter:'blur(6px)',
      display:'grid', placeItems:'center', padding:16, zIndex:50
    }}>
      <div className="card" style={{width:'min(920px,100%)',maxHeight:'90vh',display:'grid',gridTemplateRows:'auto 1fr auto',gap:12}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{display:'flex',flexDirection:'column'}}>
            <div style={{opacity:.7,fontSize:12}}>Lesson {lesson.number}</div>
            <div style={{fontWeight:700}}>{lesson.title}</div>
          </div>
          <button className="btn" onClick={onClose}>Close</button>
        </div>

        <div ref={scroller} style={{overflow:'auto',display:'grid',gap:12,paddingRight:4}}>
          {history.map(h => <ChatMessage key={h.ts+Math.random()} turn={h} />)}
          {typing && <div style={{opacity:.7}}>Coach is typing…</div>}
        </div>

        <form onSubmit={(e)=>{e.preventDefault(); send(input)}} style={{display:'flex',gap:8}}>
          <input
            value={input}
            onChange={e=>setInput(e.target.value)}
            placeholder="Type your reply…"
            style={{flex:1,background:'#0b1020',border:'1px solid rgba(255,255,255,.1)',borderRadius:10,padding:'12px 14px',color:'#e8eeff'}}
          />
          <button className="btn btn-primary" type="submit" disabled={!input.trim()}>Send</button>
        </form>
      </div>
    </div>
  )
}
