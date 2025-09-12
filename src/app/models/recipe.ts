export interface Recipe {
  id: number;
  title: string;
  description: string;
  userId: number;
  categoryId: number;
  imageKey?: string; // might be null from backend
  imageUrl?: string; // optional for presigned URL in frontend
}
