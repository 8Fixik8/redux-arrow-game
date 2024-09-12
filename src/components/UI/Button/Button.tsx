import styles from "./Button.module.css"
import cn from "classnames"

import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material"
export interface IButtonProps extends MuiButtonProps {}

const Button: React.FC<IButtonProps> = (props) => {
  const { children, className = "" } = props

  return (
    <MuiButton
      variant="contained"
      size="small"
      {...props}
      className={cn(styles.button, className)}
    >
      {children}
    </MuiButton>
  )
}

export default Button
