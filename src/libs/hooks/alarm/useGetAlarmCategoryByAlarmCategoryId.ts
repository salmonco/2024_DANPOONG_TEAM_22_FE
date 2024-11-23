import { getAlarmCategoryByAlarmCategoryId } from '@apis/alarm';
import { useQuery } from '@tanstack/react-query';
import { AlarmCategoryRequestData } from '@type/alarm';

const useGetAlarmCategoryByAlarmCategoryId = ({ alarmCategoryId }: Readonly<AlarmCategoryRequestData>) => {
  return useQuery({
    queryKey: ['getAlarmCategoryByAlarmCategoryId', alarmCategoryId],
    queryFn: () => getAlarmCategoryByAlarmCategoryId({ alarmCategoryId }),
    enabled: !!alarmCategoryId,
  });
};

export default useGetAlarmCategoryByAlarmCategoryId;
