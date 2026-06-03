export interface ClockOptions {
  template: string
  element?: HTMLElement
}

class Clock {
  protected template: string
  protected element?: HTMLElement
  protected timer: ReturnType<typeof setInterval> | undefined

  constructor({ template, element }: ClockOptions) {
    this.template = template
    this.element = element
  }

  protected render(): void {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, '0')
    const mins = String(date.getMinutes()).padStart(2, '0')
    const secs = String(date.getSeconds()).padStart(2, '0')

    const output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs)

    if (this.element) {
      this.element.textContent = output
    } else {
      console.log(output)
    }
  }

  public start(): void {
    this.render()
    this.timer = setInterval(() => this.render(), 1000)
  }

  public stop(): void {
    clearInterval(this.timer)
  }
}

export { Clock }
