export type AspectRatio = '1:1' | '3:4' | '4:3' | '9:16' | '16:9';

export enum AppMode {
  CHAT = 'CHAT',
  VISION = 'VISION',
  GENERATE = 'GENERATE'
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  isLoading?: boolean;
}
