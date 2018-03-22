import Recorder from './Recorder'

export default class Settings {
  private recorder: Recorder
  private all: object
  private elements: Array<HTMLInputElement>

  public constructor (recorder: Recorder) {
    this.recorder = recorder
    this.all = {}
    this.elements = Array.from(document.querySelectorAll('.settings input'))
  }

  public init () : void {
    this.load()
    this.attach()
  }

  public item (name: string|null) : any {
    return name ? this.all[name] : this.all
  }

  private attach () : void {
    this.elements.forEach(element => {
      element.addEventListener('change', this.save.bind(this))
    })
  }

  private save () : void {
    this.elements.forEach(element => {
      this.all[element.name] = element.checked
    })
    window.localStorage.setItem('settings', JSON.stringify(this.all))
    this.recorder.output()
  }

  private load () : void {
    if (!window.localStorage.getItem('settings')) {
      this.save()
    }
    this.all = JSON.parse(window.localStorage.getItem('settings'))
    this.elements.forEach(element => {
      element.checked = this.all[element.name]
    })
    this.recorder.output()
  }
}
