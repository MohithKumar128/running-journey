export interface Activity {
  file: string;
  start_time: string;
  distance_m: number;
  duration_s: number;
  avg_pace_min_km: number;
}

export interface Stats {
  totalDistance: number;
  totalTime: number;
  avgPace: number;
  longestRun: Activity;
  monthlyDistance: Record<string, number>;
  activities: Activity[];
}
