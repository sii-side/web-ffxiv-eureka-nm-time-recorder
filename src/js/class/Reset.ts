import Recorder from './Recorder'

export default class Reset {
  private recorder: Recorder
  private element: HTMLInputElement

  public constructor (recorder) {
    this.recorder = recorder
    this.element = document.querySelector('.record input[type=reset]')
  }

  public init () {
    this.attach()
  }

  private attach () {
    this.element.addEventListener('click', e => this.reset())
  }

  private reset () {
    this.recorder.reset()
  }
}
