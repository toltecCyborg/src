import {
  ButtonClickedCallback,
  IProjectListItem,
  ITaskListItem,
  IGateListItem
} from '../../../models';

export interface IProjectDashboardProps {
  spProjectListItems: IProjectListItem[];
  onGetProjectListItems?: ButtonClickedCallback;
  spTaskListItems: ITaskListItem[];
  spFilteredTaskItems: ITaskListItem[];
  onGetTaskListItems?: ButtonClickedCallback;
  selectedTask:ITaskListItem;
  spGateListItems: IGateListItem[];
  onGetGateListItems?: ButtonClickedCallback;
  onSelectItem: (item: string, group: string) => void;
  description: string;
  project: IProjectListItem;
  
  showLog: boolean;
  showButtons: boolean;
    
  refreshInterval: number;
  filterValue: string;
  isDashboard: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
}
