export default class Time {
  private time: Date

  public constructor () {
    this.time = new Date()
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

  public format () : string {
    return `${this.hour()}${this.min()}`
  }
}
