import { makeAutoObservable } from 'mobx'

class Blur {
  isShow: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  show() {
    this.isShow = true
  }

  hide() {
    this.isShow = false
  }
}

export default new Blur()
