import { useState, useEffect } from 'react'

/**
 * Types `text` character-by-character when `active` is true.
 * Resets fully when `active` becomes false.
 */
export function useTypewriter(text, active, { speed = 22, startDelay = 0 } = {}) {
  const [displayed, setDisplayed] = useState('')
  const [done,      setDone]      = useState(false)

  useEffect(() => {
    if (!active) { setDisplayed(''); setDone(false); return }
    let i = 0
    setDisplayed(''); setDone(false)
    const start = setTimeout(() => {
      const tick = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) { clearInterval(tick); setDone(true) }
      }, speed)
      return () => clearInterval(tick)
    }, startDelay)
    return () => clearTimeout(start)
  }, [active, text, speed, startDelay])

  return { displayed, done }
}

/**
 * Runs four parallel typewriter intervals (eyebrow, title, body word-by-word, link)
 * all starting at the same time when `active` flips true.
 */
export function useStoryWriter(copy, active) {
  const [eyebrow, setEyebrow] = useState('')
  const [title,   setTitle]   = useState('')
  const [body,    setBody]    = useState('')
  const [link,    setLink]    = useState('')
  const [doneMap, setDoneMap] = useState({ eyebrow: false, title: false, body: false, link: false })

  useEffect(() => {
    if (!active) {
      setEyebrow(''); setTitle(''); setBody(''); setLink('')
      setDoneMap({ eyebrow: false, title: false, body: false, link: false })
      return
    }

    const timers = []

    let i = 0
    const eyebrowText = copy.history
    timers.push(setInterval(() => {
      i++; setEyebrow(eyebrowText.slice(0, i))
      if (i >= eyebrowText.length) { clearInterval(timers[0]); setDoneMap(p => ({ ...p, eyebrow: true })) }
    }, 18))

    let j = 0
    const titleText = copy.storyTitle
    timers.push(setInterval(() => {
      j++; setTitle(titleText.slice(0, j))
      if (j >= titleText.length) { clearInterval(timers[1]); setDoneMap(p => ({ ...p, title: true })) }
    }, 16))

    const words = copy.story.split(' ')
    let k = 0
    timers.push(setInterval(() => {
      k++; setBody(words.slice(0, k).join(' '))
      if (k >= words.length) { clearInterval(timers[2]); setDoneMap(p => ({ ...p, body: true })) }
    }, 22))

    const linkText = copy.read + ' ↗'
    let l = 0
    timers.push(setInterval(() => {
      l++; setLink(linkText.slice(0, l))
      if (l >= linkText.length) { clearInterval(timers[3]); setDoneMap(p => ({ ...p, link: true })) }
    }, 20))

    return () => timers.forEach(clearInterval)
  }, [active, copy])

  return {
    eyebrow, title, body, link,
    cursorOn: (field) => !doneMap[field] && active,
  }
}
