import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import modal from './../../store/modal'
import blur from './../../store/blur'
import form from './../../store/form'
import styles from './modal.module.scss'

const Modal: FC = observer(() => {
  const onClickHandler = () => {
    modal.hide()
    blur.hide()
  }

  return (
    <div
      className={modal.isModal ? styles.modal : styles.hidden}
      onBlur={onClickHandler}
    >
      <p className={styles.text}>
        Hello, {form.firstName} {form.secondName}
      </p>
      <button className={styles.button} onClick={onClickHandler}>
        close modal
      </button>
    </div>
  )
})

export default Modal
