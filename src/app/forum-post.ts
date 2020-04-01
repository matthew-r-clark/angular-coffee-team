import { ForumSubPost } from './forum-sub-post';

export interface ForumPost {
  title: string,
  author: string,
  time: string,
  message: string,
  replies: ForumSubPost[],
}