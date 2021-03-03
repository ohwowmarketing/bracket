import { makeStyles } from '@material-ui/core/styles'
import { SM } from '@mui/Layout'
import { H5, P, Caption } from '@mui/Typography'

const useStyles = makeStyles((theme) => ({
  bg: {
    padding: theme.spacing(4, 6),
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: '10px'
  }
}))

const Rules = () => {
  const classes = useStyles()
  return (
    <SM className={classes.bg}>
      <H5 gutterBottom>Rules</H5>
      <P>
        NO PURCHASE NECESSARY FOR ENTRY. AVOID WHERE PROHIBITED BY LAW. THIS
        CONTEST IS INTENDED FOR UNITED STATES RESIDENTS EXCLUSIVELY, AND THIS
        PROMOTION SHOULD NOT BE ENTERED IF YOU ARE NOT LOCATED IN THE UNITED
        STATES. YOU MUST BE 21+ YEARS OLD IN ORDER FOR VALID ENTRY INTO THE
        CONTEST.
      </P>
      <P>
        BY ENTRY INTO THE CONTEST, YOU CONSENT TO BE ENTERED INTO SPORTS
        GAMBLING GUIDES, LLC EMAIL / SMS NEWSLETTERS, MESSAGE AND DATA RATES MAY
        APPLY.
      </P>
      <H5 gutterBottom>Scoring</H5>
      <P>A correct pick in each round is shown below:</P>
      <P>
        First Round: 10 Points
        <br />
        Second Round: 20 Points
        <br />
        Sweet 16: 40 Points
        <br />
        Elite 8: 80 Points
        <br />
        Final 4: 160 Points
        <br />
        Championship: 320 Points
      </P>
      <P>
        In the event a match does not occur, no points will be awarded for that
        match.
      </P>
      <P>
        All entries / picks will be locked on Friday, March 19th, 2021 at 11:00
        AM EST. Once brackets are locked no additional changes can be made to
        the brackets submitted.
      </P>
      <P>
        Ties: In the event of a tie after games are concluded, entrants are
        required to enter the total combined score of the final game, and the
        entries with the closest score will be deemed the winners.
      </P>
      <P>
        The Sponsor (Sports Gambling Guides, LLC) has final say on all disputes.
      </P>

      <H5 gutterBottom>Prizes</H5>
      <P>The approximate retail value of all prizes is $1,000.</P>
      <P>
        Grand Prize Winner (One) $500 Amazon Gift Card to be sent to winner’s
        address.
      </P>
      <P>
        2nd Place Winner (One) $250 Amazon Gift Card to be sent to winner’s
        address.
      </P>
      <P>
        3rd Place Winner (One) $100 Amazon Gift Card to be sent to winner’s
        address.
      </P>
      <P>4-6th (One) $50 Amazon Gift Card to be sent to winner’s address.</P>
      <Caption>
        *Amazon is not a sponsor of this promotion. Except as required by law,
        Amazon gift cards cannot be transferred for value or redeemed for cash.
        Gift Cards may be used only for purchases of eligible goods at
        Amazon.com or its affiliate websites.
      </Caption>
    </SM>
  )
}

export default Rules
