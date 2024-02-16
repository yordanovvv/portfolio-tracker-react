import { Delete, Edit } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { User } from "../../shared/interfaces";

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

function UserCard({ user, onEdit, onDelete }: UserCardProps) {
  return (
    <div
      className={`flex flex-row flex-wrap m-4 border border-secondary dark:border-primary`}
    >
      <div className="m-auto">
        {" "}
        <Avatar>
          {user.FirstName[0]}
          {user.LastName[0]}
        </Avatar>
      </div>
      <div className="flex flex-col m-auto">
        <span>{user.FirstName}</span>
        <span>{user.LastName}</span>
      </div>
      <div className="m-auto">{user.Age}</div>
      <div className="flex flex-col m-auto">
        <Edit
          fontSize="medium"
          className={`inline-flex text-secondary dark:text-primary cursor-pointer`}
          onClick={() => onEdit(user)}
        />

        <Delete
          fontSize="medium"
          className={`inline-flex text-secondary dark:text-primary cursor-pointer`}
          onClick={() => onDelete(user)}
        />
      </div>
    </div>
  );
}

export default UserCard;
