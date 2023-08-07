const mapping: Record<string, string> = {
  clients: 'client',
  examinations: 'examination',
  results: 'result',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
