import { useEffect, useState } from 'react';
import { usersService } from '@/modules/users/services/users-service';
import type { User } from '@/modules/users/interfaces/user.interface';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadUsers = async (): Promise<void> => {
      const response = await usersService.getUsers();
      setUsers(response);
      setIsLoading(false);
    };

    void loadUsers();
  }, []);

  return { users, isLoading };
};
