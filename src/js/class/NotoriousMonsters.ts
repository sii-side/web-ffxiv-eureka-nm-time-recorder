import NotoriousMonster from './NotoriousMonster'

export default class NotoriousMonsters {
  private all : Array<NotoriousMonster>

  public constructor (elements: Array<HTMLInputElement>) {
    this.all = elements.map(element => new NotoriousMonster(element.name, element.dataset.shortName))
  }

  public kill (index: number) {
    this.all[index].kill()
  }

  private sort () : Array<NotoriousMonster> {
    return this.all.slice().sort((a, b) => a.unix() - b.unix())
  }

  public text () : string {
    return this.sort().map(notoriousMonster => {
      return notoriousMonster.text()
    }).filter(text => !!text).join('\u0020')
  }

  public reset () : void {
    this.all.forEach(notoriousMonster => {
      notoriousMonster.reset()
    })
  }
}
