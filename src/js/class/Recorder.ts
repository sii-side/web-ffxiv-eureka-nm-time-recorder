import NotoriousMonster from './NotoriousMonster'
import Record from './Record'

export default class Recorder {
  private elements: Array<HTMLInputElement>
  private notoriousMonsters: Array<NotoriousMonster>
  private record: Record

  public constructor () {
    this.elements = Array.from(document.querySelectorAll('.report input'))
    this.notoriousMonsters = this.elements.map(element => new NotoriousMonster(element.name, element.dataset.shortName))
    this.record = new Record()
  }

  public init () {
    this.attach()
  }

  private attach () {
    this.elements.forEach(element => {
      element.addEventListener('click', e => {
        this.report(element)
        this.output()
      })
    })
  }

  private report (input) {
    const index = this.elements.indexOf(input)
    this.notoriousMonsters[index].kill()
  }

  private text () {
    return this.sort().map(notoriousMonster => {
      return notoriousMonster.text()
    }).filter(text => !!text).join('\u0020')
  }

  private sort () {
    return this.notoriousMonsters.slice().sort((a, b) => a.unix() - b.unix())
  }

  private output () {
    this.record.output(this.text())
  }
}
