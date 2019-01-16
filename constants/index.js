import { Constants } from "expo";

export const constants = {
  statusbarMargin: Constants.statusBarHeight,
};

export const getUserInfo = () => {
  const { deviceId, deviceName, platform } = Constants;
  return {
    deviceId,
    deviceName,
    platform,
  };
};

export const deviceInfo = {
  statusbarMargin: Constants.statusBarHeight,
};
