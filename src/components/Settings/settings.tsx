import { useEffect, useState } from "react";
import { User } from "../../shared/interfaces";
import SideBarLayout from "../SideBarLayout/SideBarLayout";
import CustomButton from "../CustomButton/custom-button";
import UserCard from "../UserCard/user-card";
import CustomDialog from "../CustomDialog/custom-dialog";
import UserForm from "../UserForm/user-form";

function Settings() {
  const [users, setUsers] = useState<User[]>([]);
  const [isUserDialogOpen, setIsUserDialogOpen] = useState<boolean>(false);
  const [maxUserID, setMaxUserID] = useState<number>(0);
  const blankUser = { UserID: 0, FirstName: "", LastName: "", Age: 0 };
  const [clickedUser, setClickedUser] = useState<User>(blankUser);
  const [showConfirmationDialog, setShowConfirmationDialog] =
    useState<boolean>(false);

  useEffect(() => {
    const maxID = users.reduce((max, user) => {
      return user.UserID > max ? user.UserID : max;
    }, 0);
    setMaxUserID(maxID);
  }, [users]);

  const closeUserDialog = () => {
    setClickedUser(blankUser);
    setIsUserDialogOpen(false);
  };

  const onSubmitUserHandler = (user: User) => {
    if (user.UserID === 0) {
      user.UserID = maxUserID + 1;
      const newUsers = [...users, user];
      setUsers(newUsers);
    } else {
      setUsers(
        users.map((element) => {
          if (element.UserID === user.UserID) {
            return user;
          } else {
            return element;
          }
        })
      );
    }
    closeUserDialog();
  };

  const onEditUserHandler = (user: User) => {
    setClickedUser(user);
    setIsUserDialogOpen(true);
  };

  const onDeleteUserHandler = (user: User) => {
    setClickedUser(user);
    setShowConfirmationDialog(true);
  };

  const onCancelDeleteUserHandler = () => {
    setClickedUser(blankUser);
    setShowConfirmationDialog(false);
  };

  const onCancelUserHandler = () => {
    setClickedUser(blankUser);
    setIsUserDialogOpen(false);
  };

  const deleteUser = () => {
    setUsers(users.filter((user) => user.UserID !== clickedUser.UserID));
    setClickedUser(blankUser);
    setShowConfirmationDialog(false);
  };

  return (
    <>
      <SideBarLayout>
        <h1 className="text-2xl">
          <b>Settings</b>
        </h1>
        <div>
          <CustomButton onClick={() => setIsUserDialogOpen(true)}>
            Create new user
          </CustomButton>
        </div>
        {users.length === 0 && (
          <div>
            <p>
              There are no users at this moment. Please use the button above to
              create new users.
            </p>
          </div>
        )}
        {users.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <UserCard
                key={user.UserID}
                user={user}
                onEdit={onEditUserHandler}
                onDelete={onDeleteUserHandler}
              />
            ))}
          </div>
        )}
      </SideBarLayout>

      <CustomDialog
        isOpen={isUserDialogOpen}
        setIsOpen={setIsUserDialogOpen}
        showActionButtons={false}
        dialogBody={
          <UserForm
            user={clickedUser}
            onSubmit={onSubmitUserHandler}
            onCancel={onCancelUserHandler}
          />
        }
      />
      <CustomDialog
        isOpen={showConfirmationDialog}
        setIsOpen={setShowConfirmationDialog}
        dialogBody={
          <p>
            Are you sure you want to delete{" "}
            <i>
              {clickedUser.FirstName} {clickedUser.LastName}
            </i>
            ? This action can <b>NOT</b> be reverted!
          </p>
        }
        confirmButtonText="Delete"
        onConfirm={deleteUser}
        onCancel={onCancelDeleteUserHandler}
      />
    </>
  );
}

export default Settings;
