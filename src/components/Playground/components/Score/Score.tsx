// import styles from "./Score.module.css"

import { Chip, Stack } from "@mui/material"
import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader } from "../../../UI"
import TypographyText from "../../../UI/TypographyText"
import styles from "./Score.module.css"

const Score: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  return (
    <div>
      <TypographyHeader>Score</TypographyHeader>
      <TypographyText>
        On error, the "Consecutive successful hits" value is reset to zero
      </TypographyText>
      <Stack direction="row" spacing={1}>
        <Chip
          label={
            <>
              Errors: <strong>{state.totalUnsuccessful}</strong>
            </>
          }
          color="error"
          variant="outlined"
          className={styles.chip}
        />
        <br />
        <Chip
          label={
            <>
              Successes: <strong>{state.totalSuccessful}</strong>
            </>
          }
          color="success"
          variant="outlined"
          className={styles.chip}
        />
      </Stack>
    </div>
  )
}

export default Score
