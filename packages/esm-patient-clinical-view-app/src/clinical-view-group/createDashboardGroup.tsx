import React from 'react';
import { DashboardGroupExtension } from './dashboard-group.component';

export const createDashboardGroup = ({
  title,
  slotName,
  isExpanded,
}: {
  title: string;
  slotName: string;
  isExpanded?: boolean;
}) => {
  const DashboardGroup = ({ basePath }: { basePath: string }) => {
    return <DashboardGroupExtension title={title} slotName={slotName} basePath={basePath} isExpanded={isExpanded} />;
  };
  return DashboardGroup;
};
