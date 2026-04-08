import type { User } from '@/modules/users/interfaces/user.interface';

interface UsersListProps {
  users: User[];
}

export const UsersList = ({ users }: UsersListProps): JSX.Element => {
  return (
    <ul className="stack">
      {users.map((user) => (
        <li key={user.id} className="card">
          <strong>{user.fullName}</strong>
          <p>{user.email}</p>
          <small>{user.role}</small>
        </li>
      ))}
    </ul>
  );
};
