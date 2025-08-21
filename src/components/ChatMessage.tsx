
import type { ChatTurn } from '@types/index'

export default function ChatMessage({turn}:{turn:ChatTurn}){
  const isCoach = turn.role === 'coach'
  return (
    <div style={{display:'flex',gap:10,alignItems:'flex-start'}}>
      <div style={{width:28,height:28,borderRadius:14,background:isCoach?'linear-gradient(90deg,#38bdf8,#22d3ee)':'#1f2937'}}></div>
      <div style={{background:isCoach?'#0f172a':'#111827',border:'1px solid rgba(255,255,255,.06)',borderRadius:12,padding:'10px 12px',lineHeight:1.5}}>
        {turn.text}
      </div>
    </div>
  )
}
