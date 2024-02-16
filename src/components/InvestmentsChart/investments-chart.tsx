import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";
import { Investment } from "../../shared/interfaces";
import { roundToDecimalDigits } from "../../shared/utilities";

interface InvestmentsChartProps {
  investments: Investment[];
}

function groupInvestments(investments: Investment[]) {
  let groupedInvestments: Record<string, number> = {};
  const uniqueTypesOfInvestment = new Set(
    investments.map((investment) => investment.TypeOfInvestment)
  );
  uniqueTypesOfInvestment.forEach((typeOfInvestment) => {
    let totalValue = 0;
    const currInvestmentsOfType = investments.filter(
      (investment) => investment.TypeOfInvestment === typeOfInvestment
    );
    for (const investment of currInvestmentsOfType) {
      totalValue += investment.Value;
    }
    groupedInvestments[typeOfInvestment] = totalValue;
  });
  return groupedInvestments;
}

function InvestmentsChart({ investments }: InvestmentsChartProps) {
  if (typeof Highcharts === "object") {
    HighchartsExporting(Highcharts);
  }

  const groupedInvestments = groupInvestments(investments);
  const chartData = new Array<{}>();
  Object.entries(groupedInvestments).forEach(([key, value]) => {
    chartData.push({ name: key, y: roundToDecimalDigits(value, 2) });
  });

  const options = {
    chart: {
      type: "pie",
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: [
          {
            enabled: true,
            distance: 20,
          },
          {
            enabled: true,
            distance: -40,
            format: "{point.percentage:.1f}%",
            style: {
              fontSize: "1em",
              textOutline: "none",
              opacity: 0.7,
            },
            filter: {
              operator: ">",
              property: "percentage",
              value: 10,
            },
          },
        ],
      },
    },
    title: {
      text: "Portfolio Areas",
    },
    series: [
      {
        name: "Total Value",
        colorByPoint: true,
        data: chartData,
      },
    ],
  };
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
}

export default InvestmentsChart;
