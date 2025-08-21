
export default function ProgressStats(){
  return (
    <div className="grid" style={{gridTemplateColumns:'repeat(4,minmax(0,1fr))'}}>
      {['Completion','Streak','Points','Lessons'].map((k,i)=> (
        <div key={k} className="card" style={{display:'grid',gap:6}}>
          <div style={{opacity:.7,fontSize:12}}>{k}</div>
          <div style={{fontSize:24,fontWeight:700}}>
            {i===0?'12%':i===1?'3 days':i===2?'120': '3/21'}
          </div>
        </div>
      ))}
    </div>
  )
}
