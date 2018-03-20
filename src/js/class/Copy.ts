import Recorder from './Recorder'

export default class Copy {
  private recorder: Recorder
  private element: HTMLInputElement

  public constructor (recorder) {
    this.recorder = recorder
    this.element = document.querySelector('.record input[type=button]')
  }

  public init () {
    this.attach()
  }

  private attach () {
    this.element.addEventListener('click', e => this.copy())
  }

  private copy () {
    this.recorder.selectRecord()
    document.execCommand('copy')
  }
}
