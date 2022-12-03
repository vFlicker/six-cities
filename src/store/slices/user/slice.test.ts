import { AuthStatus } from '~/constants';
import { makeError, makeUser } from '~/utils';

import userSlice, { checkAuthStatus, login, logout } from './slice';
import { State } from './types';

const initialState: State = {
  authStatus: AuthStatus.Unknown,
  user: null,
  loading: false,
  error: null,
};

const user = makeUser();
const error = makeError();

describe('Slice: user', () => {
  it('without additional parameters should return initial state', () => {
    const UNKNOWN_TYPE = { type: 'UNKNOWN_ACTION' };
    expect(userSlice.reducer(undefined, UNKNOWN_TYPE)).toEqual(initialState);
  });

  describe('checkAuthStatus', () => {
    it('should update loading to "true" if checkAuthStatus pending', () => {
      const ACTION_TYPE = { type: checkAuthStatus.pending.type };

      const updatedState: State = {
        ...initialState,
        loading: true,
      };

      expect(userSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should update loading to "false", set authStatus to "Auth" and add user if checkAuthStatus fulfilled', () => {
      const ACTION_TYPE = {
        type: checkAuthStatus.fulfilled.type,
        payload: user,
      };

      const initialState: State = {
        authStatus: AuthStatus.Unknown,
        user: null,
        loading: true,
        error: null,
      };

      const updatedState: State = {
        ...initialState,
        authStatus: AuthStatus.Auth,
        user: user,
        loading: false,
      };

      expect(userSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should add error to error property if checkAuthStatus rejected', () => {
      const ACTION_TYPE = {
        type: checkAuthStatus.rejected.type,
        payload: error,
      };

      const updatedState: State = {
        ...initialState,
        authStatus: AuthStatus.NoAuth,
        loading: false,
        error: error,
      };

      expect(userSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should remove error from state if checkAuthStatus pending or fulfilled', () => {
      const initialState: State = {
        authStatus: AuthStatus.NoAuth,
        user: null,
        loading: false,
        error: error,
      };

      const PENDING_ACTION_TYPE = {
        type: checkAuthStatus.pending.type,
      };

      const pendingUpdatedState: State = {
        ...initialState,
        loading: true,
        error: null,
      };

      expect(userSlice.reducer(initialState, PENDING_ACTION_TYPE)).toEqual(
        pendingUpdatedState,
      );

      const FULFILLED_ACTION_TYPE = {
        type: checkAuthStatus.fulfilled.type,
        payload: user,
      };

      const fulfilledUpdatedState: State = {
        ...initialState,
        authStatus: AuthStatus.Auth,
        user: user,
        error: null,
      };

      expect(userSlice.reducer(initialState, FULFILLED_ACTION_TYPE)).toEqual(
        fulfilledUpdatedState,
      );
    });
  });

  describe('login', () => {
    it('should update loading to "true" if login pending', () => {
      const ACTION_TYPE = { type: login.pending.type };

      const updatedState: State = {
        ...initialState,
        user: null,
        loading: true,
      };

      expect(userSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should update loading to "false", set authStatus to "Auth" and add user if login fulfilled', () => {
      const ACTION_TYPE = {
        type: login.fulfilled.type,
        payload: user,
      };

      const initialState: State = {
        authStatus: AuthStatus.Unknown,
        user: null,
        loading: true,
        error: null,
      };

      const updatedState: State = {
        ...initialState,
        authStatus: AuthStatus.Auth,
        user: user,
        loading: false,
      };

      expect(userSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should add error to error property if login rejected', () => {
      const ACTION_TYPE = {
        type: login.rejected.type,
        payload: error,
      };

      const updatedState: State = {
        ...initialState,
        authStatus: AuthStatus.NoAuth,
        loading: false,
        error: error,
      };

      expect(userSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should remove error from state if login pending or fulfilled', () => {
      const initialState: State = {
        authStatus: AuthStatus.NoAuth,
        user: null,
        loading: false,
        error: error,
      };

      const PENDING_ACTION_TYPE = {
        type: login.pending.type,
      };

      const pendingUpdatedState: State = {
        ...initialState,
        loading: true,
        error: null,
      };

      expect(userSlice.reducer(initialState, PENDING_ACTION_TYPE)).toEqual(
        pendingUpdatedState,
      );

      const FULFILLED_ACTION_TYPE = {
        type: login.fulfilled.type,
        payload: user,
      };

      const fulfilledUpdatedState: State = {
        ...initialState,
        authStatus: AuthStatus.Auth,
        user: user,
        error: null,
      };

      expect(userSlice.reducer(initialState, FULFILLED_ACTION_TYPE)).toEqual(
        fulfilledUpdatedState,
      );
    });
  });

  describe('logout', () => {
    it('should update loading to "true" if logout pending', () => {
      const ACTION_TYPE = { type: logout.pending.type };

      const updatedState: State = {
        ...initialState,
        loading: true,
      };

      expect(userSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should update loading to "false", set authStatus to "NoAuth" and remove user if logout fulfilled', () => {
      const ACTION_TYPE = {
        type: logout.fulfilled.type,
      };

      const initialState: State = {
        authStatus: AuthStatus.Auth,
        user: user,
        loading: true,
        error: null,
      };

      const updatedState: State = {
        ...initialState,
        authStatus: AuthStatus.NoAuth,
        user: null,
        loading: false,
      };

      expect(userSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should add error to error property if logout rejected', () => {
      const ACTION_TYPE = {
        type: logout.rejected.type,
        payload: error,
      };

      const updatedState: State = {
        ...initialState,
        loading: false,
        error: error,
      };

      expect(userSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should remove error from state if logout pending or fulfilled', () => {
      const initialState: State = {
        authStatus: AuthStatus.NoAuth,
        user: null,
        loading: false,
        error: error,
      };

      const PENDING_ACTION_TYPE = {
        type: logout.pending.type,
      };

      const pendingUpdatedState: State = {
        ...initialState,
        loading: true,
        error: null,
      };

      expect(userSlice.reducer(initialState, PENDING_ACTION_TYPE)).toEqual(
        pendingUpdatedState,
      );

      const FULFILLED_ACTION_TYPE = {
        type: logout.fulfilled.type,
        payload: user,
      };

      const fulfilledUpdatedState: State = {
        ...initialState,
        authStatus: AuthStatus.NoAuth,
        user: null,
        error: null,
      };

      expect(userSlice.reducer(initialState, FULFILLED_ACTION_TYPE)).toEqual(
        fulfilledUpdatedState,
      );
    });
  });
});
