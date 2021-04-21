import { FC } from 'react'
import Form from './../Form'
import Modal from './../Modal'
import modal from './../../store/modal'
import blur from '../../store/blur'
import { observer } from 'mobx-react-lite'
import './../../styles/index.scss'

const App: FC = observer(() => {
  const modalHandler = () => {
    modal.hide()
    blur.hide()
  }

  return (
    <>
      <div className={blur.isShow ? 'blur' : 'hidden'} onClick={modalHandler} />
      <Form />
      <Modal />
    </>
  )
})

export default App
