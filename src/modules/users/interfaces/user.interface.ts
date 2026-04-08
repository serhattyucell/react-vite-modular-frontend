import type { UserRole } from '@/modules/users/enums/user-role.enum';

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
}
