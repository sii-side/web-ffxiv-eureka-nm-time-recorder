import Recorder from './Recorder'

export default class Reset {
  private recorder: Recorder
  private element: HTMLInputElement

  public constructor (recorder: Recorder) {
    this.recorder = recorder
    this.element = document.querySelector('.record input[type=reset]')
  }

  public init () : void {
    this.attach()
  }

  private attach () : void {
    this.element.addEventListener('click', e => this.reset())
  }

  private reset () : void {
    this.recorder.resetAll()
  }
}
