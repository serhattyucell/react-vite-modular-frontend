import type { EmptyStatus } from '@/modules/empty/types/empty-status.type';
import type { EmptyViewMode } from '@/modules/empty/enums/empty-view-mode.enum';

export interface EmptyState {
  status: EmptyStatus;
  mode: EmptyViewMode;
}
