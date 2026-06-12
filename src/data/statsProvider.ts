import activitiesData from './gpx_analysis_results.json';
import type { Activity, Stats } from './types';

const activities = activitiesData as Activity[];

export const getStats = (): Stats => {
  const totalDistance = activities.reduce((acc, curr) => acc + curr.distance_m, 0) / 1000;
  const totalTime = activities.reduce((acc, curr) => acc + curr.duration_s, 0) / 3600;
  const avgPace = (activities.reduce((acc, curr) => acc + curr.duration_s, 0) / 60) / totalDistance;
  
  const longestRun = [...activities].sort((a, b) => b.distance_m - a.distance_m)[0];
  
  const monthlyDistance: Record<string, number> = {};
  activities.forEach(activity => {
    const month = activity.start_time.substring(0, 7);
    monthlyDistance[month] = (monthlyDistance[month] || 0) + activity.distance_m / 1000;
  });

  return {
    totalDistance,
    totalTime,
    avgPace,
    longestRun,
    monthlyDistance,
    activities
  };
};
