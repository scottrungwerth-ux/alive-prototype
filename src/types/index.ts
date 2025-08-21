
export type Lesson = {
  id: string
  title: string
  number: number
  duration: string
  topics: string[]
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  summary: string
}

export type ChatTurn = {
  role: 'user' | 'coach'
  text: string
  ts: number
}
