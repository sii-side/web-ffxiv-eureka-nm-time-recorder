import NotoriousMonster from './NotoriousMonster'
import Settings from './Settings'

export default class NotoriousMonsters {
  private all : Array<NotoriousMonster>

  public constructor (elements: Array<HTMLInputElement>) {
    this.all = elements.map(element => new NotoriousMonster(element.name, element.dataset.shortName))
  }

  public kill (index: number, time: Date = null) {
    this.all[index].kill(time)
  }

  private sort (monsters: Array<NotoriousMonster>, sortByIndex: boolean = false) : Array<NotoriousMonster> {
    return sortByIndex ? monsters : monsters.slice().sort((a, b) => a.unix() - b.unix())
  }

  private filter (monsters: Array<NotoriousMonster>, outputNoRecord: boolean = false) : Array<NotoriousMonster> {
    return outputNoRecord ? monsters : monsters.slice().filter(monster => monster.hasTime())
  }

  private text (monsters: Array<NotoriousMonster>, settings: Settings) : Array<string> {
    return monsters.map(monster => monster.output(settings))
  }

  public output (settings: Settings) : string {
    const delimiter: string = settings.item('usePunctuation') ? '、' : '\u0020'
    const sortedMonsters: Array<NotoriousMonster> = this.sort(this.all, settings.item('sortByIndex'))
    const filterdMonsters: Array<NotoriousMonster> = this.filter(sortedMonsters, settings.item('outputNoRecord')) 
    const monsterTexts: Array<string> = this.text(filterdMonsters, settings)
    return monsterTexts.join(delimiter)
  }

  public reset () : void {
    this.all.forEach(notoriousMonster => {
      notoriousMonster.reset()
    })
  }
}
