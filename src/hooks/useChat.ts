
import { useEffect, useRef, useState } from 'react'
import type { ChatTurn, Lesson } from '@types/index'

const seed = (lesson?: Lesson): ChatTurn[] => [
  {
    role: 'coach',
    text: lesson?.id === 'graveyards'
      ? 'Welcome to Graveyards. Quick warm-up: In one sentence, how do you hope people describe you in 10 years?'
      : 'Hi! I\'m your ALIVE coach. Ask anything or click a lesson to start.',
    ts: Date.now()
  }
]

export function useChat(lesson?: Lesson) {
  const [history, setHistory] = useState<ChatTurn[]>(seed(lesson))
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const pendingRef = useRef<number | null>(null)

  useEffect(()=>{
    setHistory(seed(lesson))
  },[lesson?.id])

  const send = (text: string) => {
    if (!text.trim()) return
    const now = Date.now()
    setHistory(h => [...h, { role: 'user', text: text.trim(), ts: now }])
    setInput('')
    setTyping(true)
    if (pendingRef.current) window.clearTimeout(pendingRef.current)

    pendingRef.current = window.setTimeout(()=>{
      const lower = text.toLowerCase()
      let reply = 'Got it. Tell me more.'

      if (lesson?.id === 'graveyards') {
        if (lower.includes('remember') || lower.includes('legacy') || lower.includes('describe')) {
          reply = 'Beautiful. Now, name one small action this week that moves you toward that description.'
        } else if (lower.includes("don't know") || lower.includes('unsure')) {
          reply = 'Totally okay. Try this: list three qualities you admire in others. Which one can you practice in the next 48 hours?'
        } else if (lower.includes('goal') || lower.includes('plan')) {
          reply = 'Write it down. Who could be your ally to check in with you? Pick someone and set a day/time for a 60-second update.'
        } else {
          reply = 'Graveyards zooms out: how you live today shapes how you\'re remembered. What\'s one thing you\'ll do differently before the day ends?'
        }
      } else if (lesson?.id?.includes('thoughts-triggers')) {
        reply = 'Name a recent trigger ➜ your thought ➜ the emotion ➜ your response. We\'ll adjust the thought together.'
      } else if (lesson?.id === 'goals') {
        reply = 'Let\'s make a SMART goal. What\'s the specific outcome by a date, and what\'s your first 10-minute action?'
      }

      setHistory(h => [...h, { role: 'coach', text: reply, ts: Date.now() }])
      setTyping(false)
    }, 600)
  }

  return { history, input, setInput, typing, send }
}
