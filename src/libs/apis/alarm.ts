import client from '@apis/client';
import {
  AlarmCategoryRequestData,
  AlarmCategoryResponseData,
  AlarmComfortResponseData,
} from '@type/alarm';
import { ResultResponseData } from '@type/common';

const getAlarmComfort = async () => {
  const res = await client.get<ResultResponseData<AlarmComfortResponseData[]>>(
    `/api/v1/alarm/alarm-category/comfort`
  );
  return res.data;
};

const getAlarmCategory = async ({
  alarmCategoryId,
}: Readonly<AlarmCategoryRequestData>) => {
  const res = await client.get<ResultResponseData<AlarmCategoryResponseData>>(
    `/api/v1/alarm/alarm-category/${alarmCategoryId}`
  );
  return res.data;
};

export { getAlarmComfort, getAlarmCategory };
