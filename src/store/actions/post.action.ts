import { Action } from '@ngrx/store';

export const ADD_POST = '[POST] Add Post';
export const ADD_POST_LOADING = '[POST] Add Post Loading';
export const DELETE_POST = '[POST] Del Post';

export class AddPost implements Action {
  readonly type = ADD_POST;

  constructor( public payload: any ) {}
}

export class AddPostLoading implements Action {
  readonly type = ADD_POST_LOADING;
}

export class DelPost implements Action {
  readonly type = DELETE_POST;

  constructor( public payload: number ) {}
}

export type PostAction = AddPost | AddPostLoading | DelPost;
