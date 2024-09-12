import styles from "./Modal.module.css"

import { Modal as MuiModal } from "@mui/material"

import { useAppDispatch } from "../../../../app/hooks"
import { Button } from "../../../UI"
import { resetStore } from "../../store/slices"
import ResultMessage from "./components/ResultMessage"
import cn from "classnames"

export interface IModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
  isSuccessEndGame: boolean
}

const Modal: React.FC<IModalProps> = (props) => {
  const { isSuccessEndGame, setIsShowModal } = props

  const dispatch = useAppDispatch()

  const handleClose = () => {
    setIsShowModal(false)
    dispatch(resetStore())
  }

  return (
    <MuiModal open onClose={handleClose} className={styles.wrapper}>
      <div
        className={cn(
          styles.modal,
          isSuccessEndGame ? styles.modalSuccess : styles.modalUnsuccess,
        )}
      >
        <ResultMessage isSuccessEndGame={isSuccessEndGame} />
        <Button onClick={handleClose} className={styles.button}>
          Start New Game
        </Button>
      </div>
    </MuiModal>
  )
}

export default Modal
