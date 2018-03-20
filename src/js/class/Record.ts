export default class Record {
  private element: HTMLTextAreaElement

  public constructor () {
    this.element = document.querySelector('.record textarea')
  }

  public output (text) {
    this.element.value = text
  }

  public select () {
    this.element.select()
  }
}