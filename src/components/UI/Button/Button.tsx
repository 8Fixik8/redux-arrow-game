import styles from "./Button.module.css"
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material"
export interface IButtonProps extends MuiButtonProps {}

const Button: React.FC<IButtonProps> = (props) => {
  const { children } = props

  return (
    <MuiButton
      variant="contained"
      size="small"
      className={styles.button}
      {...props}
    >
      {children}
    </MuiButton>
  )
}

export default Button
