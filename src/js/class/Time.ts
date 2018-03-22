export default class Time {
  private time: Date

  public constructor (time: Date = null) {
    this.time = time ? time : null
  }

  public isNull () : boolean {
    return this.time === null
  }

  public unix () : number {
    return this.time ? this.time.getTime() : null
  }

  private hour () : string {
    return this.time ? `0${this.time.getHours()}`.slice(-2) : '--'
  }

  private min () : string {
    return this.time ? `0${this.time.getMinutes()}`.slice(-2) : '--'
  }

  public format (useColon: boolean = false, useBracket: boolean = false) : string {
    return `${useBracket ? '[' : ''}${this.hour()}${useColon ? ':' : ''}${this.min()}${useBracket ? ']' : ''}`
  }
}
