import Time from './Time'
import Settings from './Settings'
import kanaMap from '../data/kana'

export default class NotoriousMonster {
  private fullName: string
  private shortName: string
  private time: Time

  public constructor (name, shortName) {
    this.fullName = name
    this.shortName = shortName
    this.time = new Time()
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

  public kill (time: Date = null) : void {
    this.time = new Time(time)
  }

  public reset () : void {
    this.time = new Time()
  }

  public output (settings: Settings) : string {
    return this.time ? `${
      this.short(settings.item('isHalfWidth'))
    }${
      this.time.format(settings.item('useColon'), settings.item('useBracket'))
    }` : ''
  }

  public hasTime () : boolean {
    return !this.time.isNull()
  }
}
