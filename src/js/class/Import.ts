import Recorder from './Recorder'
import nm from '../data/nm'

interface ParsedReport {
  index: number
  time: Date
}

export default class Import {
  recorder: Recorder
  element: HTMLTextAreaElement
  button: HTMLInputElement

  public constructor (recorder) {
    this.recorder = recorder
    this.element = document.querySelector('.import textarea')
    this.button = document.querySelector('.import input')
  }

  public init () : void {
    this.attach()
  }

  private attach () : void {
    this.button.addEventListener('click', this.import.bind(this))
  }

  private import () : void {
    const reports: Array<ParsedReport> = this.split().filter(parsed => parsed.index > -1 && parsed.time)
    this.recorder.importReport(reports)
  }

  private split () : Array<ParsedReport> {
    return this.element.value.split(/[\u0020\u3000、。､｡，．,\.]+/).map(text => this.parse(text))
  }

  private parse (text: string) : ParsedReport {
    return {
      index: this.parseName(text),
      time: this.parseTime(text)
    }
  }

  private parseName (text: string) : number|null {
    const regExp = /[a-zA-Zぁ-んァ-ヶー・ｦ-ﾟ\u4E00-\u9FD5]+/u
    return regExp.test(text) ? this.findNameIndex(text.match(regExp)[0]) : null
  }

  private findNameIndex (target: string) : number {
    return nm.findIndex((names: Array<string>) => names.includes(target))
  }

  private parseTime (text: string) : Date|null {
    const regExp: RegExp = /\[?(\d{1,2}):?(\d{2})\]?/
    if (regExp.test(text)) {
      const matchResult: RegExpMatchArray = text.match(regExp)
      return this.adjustTime(parseInt(matchResult[1]), parseInt(matchResult[2]))
    } else {
      return null
    }
  }

  private adjustTime (h: number, m: number) : Date {
    const now: Date = new Date()
    const target: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m)
    if (target.getTime() - now.getTime() > 0) {
      return new Date(target.setDate(target.getDate() - 1))
    } else {
      return target
    }
  }
}
