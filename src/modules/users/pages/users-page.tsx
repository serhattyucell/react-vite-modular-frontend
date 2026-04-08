import { useUsers } from '@/modules/users/hooks/use-users';
import { UsersList } from '@/modules/users/components/users-list';
import { PageLoader } from '@/common/components/shared/page-loader';

export const UsersPage = (): JSX.Element => {
  const { users, isLoading } = useUsers();

  return (
    <section className="stack">
      <h2>Users</h2>
      {isLoading ? <PageLoader /> : <UsersList users={users} />}
    </section>
  );
};
