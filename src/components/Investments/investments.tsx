import { StyledEngineProvider } from "@mui/material";
import { Investment } from "../../shared/interfaces";
import SideBarLayout from "../SideBarLayout/SideBarLayout";
import CustomButton from "../CustomButton/custom-button";
import InvestmentsPanel from "../InvestmentsPanel/investments-panel";
import InvestmentCard from "../InvestmentCard/investment-card";
import CustomDialog from "../CustomDialog/custom-dialog";
import NewInvestmentForm from "../NewInvestmentForm/new-investment-form";
import { getRandomInvestments } from "../../shared/generator";
import { useState } from "react";

function Investments() {
  const [investments, setInvestments] = useState<Investment[]>(
    getRandomInvestments(10)
  );
  const [isCloseInvestmentDialogOpen, setIsCloseInvestmentDialogOpen] =
    useState<boolean>(false);
  const [investmentToBeClosed, setInvestmentToBeClosed] =
    useState<Investment | null>(null);
  const [isCreateNewInvestmentDialogOpen, setIsCreateNewInvestmentDialogOpen] =
    useState<boolean>(false);

  const onCloseInvestmentClickHandler = (investment: Investment) => {
    setInvestmentToBeClosed(investment);
    setIsCloseInvestmentDialogOpen(true);
  };

  const onCreateNewInvestmentHandler = (investment: Investment) => {
    setInvestments([...investments, investment]);
    closeCreateNewInvestmentHandler();
  };

  const closeInvestmentHandler = () => {
    if (investmentToBeClosed) {
      investmentToBeClosed.Status = false;

      setIsCloseInvestmentDialogOpen(false);
    }
  };

  const closeCreateNewInvestmentHandler = () => {
    setIsCreateNewInvestmentDialogOpen(false);
  };

  return (
    <>
      <SideBarLayout>
        <h1 className="text-2xl">
          <b>Investments</b>
        </h1>
        <div>
          <StyledEngineProvider injectFirst>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-fit">
              <span className="mb-4 w-full md:mr-4">
                <CustomButton
                  onClick={() => setInvestments(getRandomInvestments(10))}
                >
                  Load Investments
                </CustomButton>
              </span>
              <span className="mb-4 w-full">
                <CustomButton
                  onClick={() => setIsCreateNewInvestmentDialogOpen(true)}
                >
                  Create new investment
                </CustomButton>
              </span>
            </div>
          </StyledEngineProvider>
        </div>
        <div className="">
          <InvestmentsPanel investments={investments} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {investments.length > 0 &&
            investments.map((investment, index) => {
              return (
                <InvestmentCard
                  key={index}
                  investment={investment}
                  onCloseInvestmentClick={onCloseInvestmentClickHandler}
                />
              );
            })}
        </div>
      </SideBarLayout>

      <CustomDialog
        isOpen={isCloseInvestmentDialogOpen}
        setIsOpen={setIsCloseInvestmentDialogOpen}
        onConfirm={closeInvestmentHandler}
        dialogBody={
          <p>
            Are you sure you want to close investment{" "}
            <b>{investmentToBeClosed?.Name}</b>? This action can NOT be
            reverted!
          </p>
        }
      />

      <CustomDialog
        isOpen={isCreateNewInvestmentDialogOpen}
        setIsOpen={setIsCreateNewInvestmentDialogOpen}
        showActionButtons={false}
        dialogBody={
          <NewInvestmentForm
            onSubmit={onCreateNewInvestmentHandler}
            onCancel={closeCreateNewInvestmentHandler}
          />
        }
      />
    </>
  );
}

export default Investments;
