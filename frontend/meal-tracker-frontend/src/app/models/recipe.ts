export interface Recipe {
  _id?: string;
  title: string;
  ingredients: string[];
  instructions: string;
  calories?: number;
  category: "Breakfast" | "Lunch" | "Dinner" | "Snack" | "Other";
  favorite: boolean;
}