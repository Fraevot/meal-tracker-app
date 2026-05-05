export interface Meal {
  _id?: string;
  name: string;
  category: "Breakfast" | "Lunch" | "Dinner" | "Snack";
  calories: number;
  date: string;
  notes?: string;
  plannedDay?: string;
}