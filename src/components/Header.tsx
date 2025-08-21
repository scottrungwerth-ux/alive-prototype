
export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <div className="dot"></div>
        <strong>StudentReach ALIVE</strong>
        <span className="badge">Prototype</span>
      </div>
      <div style={{display:'flex',gap:8}}>
        <span className="pill">Mentally</span>
        <span className="pill">Physically</span>
        <span className="pill">Socially</span>
        <span className="pill">Directionally</span>
      </div>
    </div>
  )
}
