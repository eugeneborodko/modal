import { makeAutoObservable } from 'mobx'

class Form {
  firstName: string = ''
  secondName: string = ''
  isFirstName: boolean = false
  isSecondName: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  setFirstName(value: string) {
    this.firstName = value
  }

  setSecondName(value: string) {
    this.secondName = value
  }

  showFirstName() {
    this.isFirstName = true
  }

  showSecondName() {
    this.isSecondName = true
  }
}

export default new Form()
