import { Investment } from "../../shared/interfaces";
import { roundToDecimalDigits } from "../../shared/utilities";
import InvestmentsChart from "../InvestmentsChart/investments-chart";

interface InvestmentsPanelProps {
  investments: Investment[];
}

function InvestmentsPanel({ investments }: InvestmentsPanelProps) {
  const totalValue = roundToDecimalDigits(
    investments.reduce((accumulator, item) => {
      return (accumulator += item.Value);
    }, 0),
    2
  );

  return (
    <div
      className={`border-secondary dark:border-primary border-dotted border-2`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly pb-4">
        <div className="flex flex-col items-center">
          <span>Invested value:</span> <span>{totalValue}</span>
        </div>
        <div className="flex flex-col items-center">
          <span>Active investments:</span>
          <span>
            {
              investments.filter((investment) => investment.Status === true)
                .length
            }
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span>Closed investments:</span>
          <span>
            {
              investments.filter((investment) => investment.Status === false)
                .length
            }
          </span>
        </div>
      </div>

      <div>
        <InvestmentsChart investments={investments} />
      </div>
    </div>
  );
}

export default InvestmentsPanel;
