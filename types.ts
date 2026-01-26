
export enum AppState {
  AGE_GATE = 'AGE_GATE',
  LOADING = 'LOADING',
  PROFILE = 'PROFILE'
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  tag?: string;
  highlight?: boolean;
  checkoutUrl: string;
}

export interface Post {
  id: number;
  type: 'photo' | 'video' | 'highlight';
  date: string;
  likes: number;
  comments: number;
  thumbnail: string;
}
