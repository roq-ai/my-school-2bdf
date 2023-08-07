interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Examiner', 'Payment Manager', 'Technical Support'],
  tenantName: 'Client',
  applicationName: 'MY SCHOOL ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
