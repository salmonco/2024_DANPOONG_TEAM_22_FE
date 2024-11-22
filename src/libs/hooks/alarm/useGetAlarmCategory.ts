import { getAlarmCategory } from '@apis/alarm';
import { useQuery } from '@tanstack/react-query';
import { AlarmCategoryRequestData } from '@type/alarm';

const useGetAlarmCategory = ({
  alarmCategoryId,
}: Readonly<AlarmCategoryRequestData>) => {
  return useQuery({
    queryKey: ['getAlarmCategory', alarmCategoryId],
    queryFn: () => getAlarmCategory({ alarmCategoryId }),
    enabled: !!alarmCategoryId,
  });
};

export default useGetAlarmCategory;
