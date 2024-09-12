import styles from "./TypographyHeader.module.css"
import cn from "classnames"

import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material"

export interface ITypographyHeaderProps extends MuiTypographyProps {}

const TypographyHeader: React.FC<ITypographyHeaderProps> = (props) => {
  const { children, className = "" } = props

  return (
    <MuiTypography
      variant="h3"
      {...props}
      className={cn(styles.text, className)}
    >
      {children}
    </MuiTypography>
  )
}

export default TypographyHeader
