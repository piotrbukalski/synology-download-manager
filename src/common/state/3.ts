import { state0to1 } from './1';

import {
  CachedTasks_2,
  Settings_2,
  State_2,
  Logging_2,
  state1to2,
} from './2';

export {
  Protocol_1,
  VisibleTaskSettings_1,
  TaskSortType_1,
  CachedTasks_2,
  NotificationSettings_2,
  Settings_2,
  ConnectionSettings_1,
  Logging_2,
} from './2';

export interface StateVersion_3 {
  stateVersion: 3;
}

export interface State_3 extends Settings_2, CachedTasks_2, Logging_2, StateVersion_3 {}

export function state2to3(state: State_2): State_3 {
  state = {
    ...state1to2(state0to1(null)),
    ...state,
  };
  delete (state as any).cachedTasksVersion;
  return {
    ...state,
    lastSevereError: undefined,
    stateVersion: 3,
  };
}
