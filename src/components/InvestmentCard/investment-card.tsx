import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  StyledEngineProvider,
} from "@mui/material";
import CustomButton from "../CustomButton/custom-button";
import { Investment } from "../../shared/interfaces";

interface InvestmentCardProps {
  investment: Investment;
  onCloseInvestmentClick: (investment: Investment) => void;
}

function InvestmentCard({
  investment,
  onCloseInvestmentClick,
}: InvestmentCardProps) {
  const GROUP_CLASS_NAMES = "flex flex-col flex-grow items-center text-center";
  return (
    <StyledEngineProvider injectFirst>
      <Card
        className={`m-2 bg-primary dark:bg-secondary text-secondary dark:text-primary border border-secondary dark:border-primary`}
      >
        {" "}
        <CardHeader
          className={`${GROUP_CLASS_NAMES} `}
          title={
            <>
              <div>{investment.Name}</div>
              <div className="text-base ">
                <i>{investment.TypeOfInvestment}</i>
              </div>
            </>
          }
        />
        <CardContent>
          <div className={GROUP_CLASS_NAMES}>
            <Chip
              variant="filled"
              color={investment.Status ? "success" : "error"}
              label={investment.Status ? "Active" : "Closed"}
            />
          </div>
          <div className={GROUP_CLASS_NAMES}>
            {" "}
            <span>Date:</span>
            <span>{investment.Date}</span>
          </div>
          <div className={GROUP_CLASS_NAMES}>
            {" "}
            <span>Value:</span>
            <span>{investment.Value}</span>
          </div>
        </CardContent>
        {investment.Status && (
          <CardActions className="justify-center">
            <CustomButton onClick={() => onCloseInvestmentClick(investment)}>
              Close Investment
            </CustomButton>
          </CardActions>
        )}
      </Card>
    </StyledEngineProvider>
  );
}

export default InvestmentCard;
