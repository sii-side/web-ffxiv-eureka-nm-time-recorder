import Time from './Time'

export default class NotoriousMonster {
  private fullName: string
  private shortName: string
  private time: Time

  public constructor (name, shortName) {
    this.fullName = name
    this.shortName = shortName
    this.time = null
  }

  public full () {
    return this.fullName
  }

  public short () {
    return this.shortName
  }

  public unix () {
    return this.time ? this.time.unix() : 0
  }

  public kill () {
    this.time = new Time()
  }

  public reset () {
    this.time = null
  }

  public text () {
    return this.time ? `${this.shortName}${this.time.format()}` : ''
  }
}
