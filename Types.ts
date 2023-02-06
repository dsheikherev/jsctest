export type ListItemWithAction<AArg> = {
  key: string;
  title: string;
  description?: string;
  action?: (e: AArg | undefined) => Promise<void> | void;
};
