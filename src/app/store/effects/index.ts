import { MemberEffects } from './member.effects';
import { PostEffects } from './post.effects';

export const effects: any[] = [
  MemberEffects,
  PostEffects
];

export * from './member.effects';
export * from './post.effects';
