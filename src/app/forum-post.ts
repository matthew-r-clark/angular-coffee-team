import { ForumReply } from './forum-reply';

export interface ForumPost {
  title: string,
  author: string,
  time: string,
  message: string,
  replies: ForumReply[],
}