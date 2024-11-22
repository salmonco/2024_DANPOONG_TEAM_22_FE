import { getLetters } from '@apis/providedFile';
import { useQuery } from '@tanstack/react-query';
import { LettersRequestData } from '@type/providedFile';

const useGetLetters = ({
  parentCategoryId,
  pageable,
}: Readonly<LettersRequestData>) => {
  return useQuery({
    queryKey: ['getLetters', parentCategoryId, pageable],
    queryFn: () => getLetters({ parentCategoryId, pageable }),
  });
};

export default useGetLetters;
