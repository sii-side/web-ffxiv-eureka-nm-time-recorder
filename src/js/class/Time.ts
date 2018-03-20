export default class Time {
  private time: Date

  public constructor () {
    this.time = new Date()
  }

  public unix () {
    return this.time.getTime()
  }

  private hour () {
    return `0${this.time.getHours()}`.slice(-2)
  }

  private min () {
    return `0${this.time.getMinutes()}`.slice(-2)
  }

  public format () {
    return `${this.hour()}${this.min()}`
  }
}
