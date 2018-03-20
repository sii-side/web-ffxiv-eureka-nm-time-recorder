import Recorder from './Recorder'

export default class Copy {
  private recorder: Recorder
  private element: HTMLInputElement

  public constructor (recorder) {
    this.recorder = recorder
    this.element = document.querySelector('.record input[type=button]')
  }

  public init () : void {
    this.attach()
  }

  private attach () : void {
    this.element.addEventListener('click', e => this.copy())
  }

  private copy () : void {
    this.recorder.selectRecord()
    document.execCommand('copy')
  }
}
