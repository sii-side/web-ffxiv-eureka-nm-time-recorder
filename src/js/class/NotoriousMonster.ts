import Time from './Time'
import kanaMap from '../data/kana'

export default class NotoriousMonster {
  private fullName: string
  private shortName: string
  private time: Time

  public constructor (name, shortName) {
    this.fullName = name
    this.shortName = shortName
    this.time = null
  }

  public full () : string {
    return this.fullName
  }

  public short (isHalfWidth: boolean = true) : string {
    return isHalfWidth ? this.halfWidth() : this.shortName
  }

  private halfWidth () : string {
    return this.shortName.replace(/[ァ-ヶー]/g, m => kanaMap[m])
  }

  public unix () : number {
    return this.time ? this.time.unix() : 0
  }

  public kill () : void {
    this.time = new Time()
  }

  public reset () : void {
    this.time = null
  }

  public text () : string {
    return this.time ? `${this.short()}${this.time.format()}` : ''
  }
}
