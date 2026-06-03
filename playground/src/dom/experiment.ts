
import { ExtendedClock } from '../OOP/extended-clock';

declare const stage: HTMLElement

const label = document.createElement('p')
label.textContent = 'Current time'
label.style.cssText = 'font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;'

const display = document.createElement('div')
display.style.cssText = 'font-size: 56px; font-family: monospace; color: #a78bfa; margin-bottom: 24px;'

const stopBtn = document.createElement('button')
stopBtn.textContent = 'Stop'

const startBtn = document.createElement('button')
startBtn.textContent = 'Start'
startBtn.style.marginLeft = '8px'

stage.append(label, display, stopBtn, startBtn)

const clock = new ExtendedClock({ template: 'h:m:s', element: display }, 1000)
clock.start()

stopBtn.addEventListener('click', () => clock.stop())
startBtn.addEventListener('click', () => clock.start())
