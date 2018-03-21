export default class Record {
  private element: HTMLTextAreaElement

  public constructor () {
    this.element = document.querySelector('.record textarea')
  }

  public output (text: string) : void {
    this.element.value = text
  }

  public select () : void {
    this.element.select()
  }
}