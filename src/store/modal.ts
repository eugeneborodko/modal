import { makeAutoObservable } from 'mobx'

class Modal {
  isModal: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  show() {
    this.isModal = true
  }

  hide() {
    this.isModal = false
  }
}

export default new Modal()
