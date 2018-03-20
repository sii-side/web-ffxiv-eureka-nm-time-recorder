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

  public full () : string {
    return this.fullName
  }

  public short (isHalfWidth = true) : string {
    return isHalfWidth ? this.halfWidth() : this.shortName
  }

  private halfWidth () : string {
    const map = {
      ア: "ｱ", イ: "ｲ", ウ: "ｳ", エ: "ｴ", オ: "ｵ",
      カ: "ｶ", キ: "ｷ", ク: "ｸ", ケ: "ｹ", コ: "ｺ",
      サ: "ｻ", シ: "ｼ", ス: "ｽ", セ: "ｾ", ソ: "ｿ",
      タ: "ﾀ", チ: "ﾁ", ツ: "ﾂ", テ: "ﾃ", ト: "ﾄ",
      ナ: "ﾅ", ニ: "ﾆ", ヌ: "ﾇ", ネ: "ﾈ", ノ: "ﾉ",
      ハ: "ﾊ", ヒ: "ﾋ", フ: "ﾌ", ヘ: "ﾍ", ホ: "ﾎ",
      マ: "ﾏ", ミ: "ﾐ", ム: "ﾑ", メ: "ﾒ", モ: "ﾓ",
      ヤ: "ﾔ", ユ: "ﾕ", ヨ: "ﾖ",
      ラ: "ﾗ", リ: "ﾘ", ル: "ﾙ", レ: "ﾚ", ロ: "ﾛ",
      ワ: "ﾜ", ヲ: "ｦ", ン: "ﾝ", ー: "ｰ",
      ヴ: "ｳﾞ",
      ガ: "ｶﾞ", ギ: "ｷﾞ", グ: "ｸﾞ", ゲ: "ｹﾞ", ゴ: "ｺﾞ",
      ザ: "ｻﾞ", ジ: "ｼﾞ", ズ: "ｽﾞ", ゼ: "ｾﾞ", ゾ: "ｿﾞ",
      ダ: "ﾀﾞ", ヂ: "ﾁﾞ", ヅ: "ﾂﾞ", デ: "ﾃﾞ", ド: "ﾄﾞ",
      バ: "ﾊﾞ", ビ: "ﾋﾞ", ブ: "ﾌﾞ", ベ: "ﾍﾞ", ボ: "ﾎﾞ",
      パ: "ﾊﾟ", ピ: "ﾋﾟ", プ: "ﾌﾟ", ペ: "ﾍﾟ", ポ: "ﾎﾟ",
      ァ: "ｧ", ィ: "ｨ", ゥ: "ｩ", ェ: "ｪ", ォ: "ｫ",
      ャ: "ｬ", ュ: "ｭ", ョ: "ｮ", ッ: "ｯ", ヮ: "ヮ",
    }
    return this.shortName.replace(/[ァ-ヶー]/g, m => map[m])
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
