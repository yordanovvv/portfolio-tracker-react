import { Investment } from "./interfaces";
import { roundToDecimalDigits } from "./utilities";

function generateRandomDate(from: Date, to: Date): Date {
  return new Date(
    from.getTime() + Math.random() * (to.getTime() - from.getTime())
  );
}

function getRandomTypeOfInvestment(): string {
  //get random index for 6 possible values for type of investment
  const min = 0;
  const max = 5;
  const index = Math.floor(Math.random() * (max - min + 1)) + min;
  switch (index) {
    case 0:
      return "CASH";
    case 1:
      return "CRYPTO";
    case 2:
      return "STOCKS";
    case 3:
      return "GOLD";
    case 4:
      return "PROPERTY";
    case 5:
      return "LAND";
    default:
      return "";
  }
}

function generateInvestment(): Investment {
  const typeOfInvestment = getRandomTypeOfInvestment();
  const investment: Investment = {
    TypeOfInvestment: typeOfInvestment,
    Status: Math.random() * 10 >= 0.7,
    Date: generateRandomDate(new Date(2023, 1, 1), new Date()).toLocaleString(),
    Name: typeOfInvestment.toLocaleLowerCase(),
    Value: roundToDecimalDigits(Math.random() * 100, 2),
  };
  return investment;
}

export function getRandomInvestments(count: number): Investment[] {
  let investments = new Array<Investment>();
  for (let i = 0; i < count; i++) {
    const newInvestment = generateInvestment();
    newInvestment.Name = newInvestment.Name + i;
    investments.push(newInvestment);
  }
  return investments;
}
