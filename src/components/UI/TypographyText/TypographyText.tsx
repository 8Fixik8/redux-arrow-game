import styles from "./TypographyText.module.css"
import cn from "classnames"

import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material"
export interface ITypographyTextProps extends MuiTypographyProps {}

const TypographyText: React.FC<ITypographyTextProps> = (props) => {
  const { children, className = "" } = props

  return (
    <MuiTypography {...props} className={cn(styles.text, className)}>
      {children}
    </MuiTypography>
  )
}

export default TypographyText
