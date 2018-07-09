import * as myActions from '../actions/post.action';

export interface Post {
  name: string;
  outcode: string;
  country: string;
  [prop: string]: any;
}
export interface IState {
  data?: Post[];
  loading: boolean;
}

export const initState: IState = {
  data: [],
  loading: false
}

export function reducer (state = initState, action: myActions.PostAction ): IState {

  switch (action.type) {
    case myActions.ADD_POST: {
      return {
        ...state,
        loading: false
      };
    }
    case myActions.ADD_POST_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
  }
  return state;
}
