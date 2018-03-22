export default class Time {
  private time: Date

  public constructor (time: Date = null) {
    this.time = time ? time : new Date()
  }

  public unix () : number {
    return this.time.getTime()
  }

  private hour () : string {
    return `0${this.time.getHours()}`.slice(-2)
  }

  private min () : string {
    return `0${this.time.getMinutes()}`.slice(-2)
  }

  public format (useColon: boolean = false, useBracket: boolean = false) : string {
    return `${useBracket ? '[' : ''}${this.hour()}${useColon ? ':' : ''}${this.min()}${useBracket ? ']' : ''}`
  }
}
