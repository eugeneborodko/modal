import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import modal from './../../store/modal'
import form from './../../store/form'
import blur from './../../store/blur'
import styles from './form.module.scss'

const Form: FC = observer(() => {
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (form.firstName) {
      form.showFirstName()
    }

    if (form.secondName) {
      form.showSecondName()
    }

    if (form.firstName && form.secondName) {
      modal.show()
      blur.show()
    }
  }

  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    form.setFirstName(event.target.value)
  }

  const handleSecondName = (event: React.ChangeEvent<HTMLInputElement>) => {
    form.setSecondName(event.target.value)
  }

  return (
    <form className={styles.form}>
      <div>
        <input
          className={styles.input}
          type="text"
          value={form.firstName}
          onChange={handleFirstName}
          placeholder="First Name"
        />
        <span className={!form.firstName ? styles.error : styles.hidden}>
          No first name
        </span>
      </div>
      <div>
        <input
          className={styles.input}
          type="text"
          value={form.secondName}
          onChange={handleSecondName}
          placeholder="Second Name"
        />
        <span className={!form.secondName ? styles.error : styles.hidden}>
          No second name
        </span>
      </div>
      <button className={styles.button} onClick={onClickHandler}>
        Done
      </button>
    </form>
  )
})

export default Form
