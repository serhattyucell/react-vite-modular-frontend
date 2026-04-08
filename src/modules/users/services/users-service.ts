import type { User } from '@/modules/users/interfaces/user.interface';
import { UserRole } from '@/modules/users/enums/user-role.enum';

const getUsers = async (): Promise<User[]> => {
  return Promise.resolve([
    {
      id: '1',
      fullName: 'Jane Doe',
      email: 'jane@example.com',
      role: UserRole.ADMIN,
    },
    {
      id: '2',
      fullName: 'John Smith',
      email: 'john@example.com',
      role: UserRole.USER,
    },
  ]);
};

export const usersService = {
  getUsers,
};
