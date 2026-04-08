import { emptyService } from '@/modules/empty/services/empty-service';

export const useEmpty = () => {
  const message = emptyService.getEmptyMessage();
  return { message };
};
