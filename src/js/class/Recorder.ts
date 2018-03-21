import NotoriousMonsters from './NotoriousMonsters'
import Record from './Record'
import Copy from './Copy'
import Reset from './Reset'
import Import from './Import'

export default class Recorder {
  private elements: Array<HTMLInputElement>
  private notoriousMonsters: NotoriousMonsters
  private record: Record
  private copy: Copy
  private reset: Reset
  private import: Import

  public constructor () {
    this.elements = Array.from(document.querySelectorAll('.report input'))
    this.notoriousMonsters = new NotoriousMonsters(this.elements)
    this.record = new Record()
    this.copy = new Copy(this)
    this.reset = new Reset(this)
    this.import = new Import(this)
  }

  public init () : void {
    this.attach()
    this.copy.init()
    this.reset.init()
    this.import.init()
  }

  private attach () : void {
    this.elements.forEach(element => {
      element.addEventListener('click', e => this.report(element))
    })
  }

  private report (input) : void {
    const index = this.elements.indexOf(input)
    this.notoriousMonsters.kill(index)
    this.output()
  }

  private output () : void {
    this.record.output(this.notoriousMonsters.text())
  }

  public resetAll () : void {
    this.notoriousMonsters.reset()
    this.output()
  }

  public selectRecord () : void {
    this.record.select()
  }

  public importReport (reports) : void {
    reports.forEach(report => {
      this.report(this.elements[report.index])
    })
    this.output()
  }
}
