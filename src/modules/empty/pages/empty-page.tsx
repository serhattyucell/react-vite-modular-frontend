import { useEmpty } from '@/modules/empty/hooks/use-empty';
import { EmptyPlaceholder } from '@/modules/empty/components/empty-placeholder';

export const EmptyPage = (): JSX.Element => {
  useEmpty();
  return <EmptyPlaceholder />;
};
