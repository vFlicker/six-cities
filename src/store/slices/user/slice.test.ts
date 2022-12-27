import { AuthStatus } from '~/constants';
import { makeError, makeUser } from '~/utils';

import userReducer, { checkAuthStatus, login, logout } from './slice';
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
    expect(userReducer(undefined, UNKNOWN_TYPE)).toEqual(initialState);
  });

  describe('checkAuthStatus', () => {
    it('should update loading to "true" when checkAuthStatus is pending', () => {
      const ACTION_TYPE = { type: checkAuthStatus.pending.type };

      const updatedState: State = {
        ...initialState,
        loading: true,
      };

      expect(userReducer(initialState, ACTION_TYPE)).toEqual(updatedState);
    });

    it('should update loading to "false", set authStatus to "Auth" and add user when checkAuthStatus is fulfilled', () => {
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

      expect(userReducer(initialState, ACTION_TYPE)).toEqual(updatedState);
    });

    it('should add error to state when checkAuthStatus is rejected', () => {
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

      expect(userReducer(initialState, ACTION_TYPE)).toEqual(updatedState);
    });

    it('should remove error from state when checkAuthStatus is pending or fulfilled', () => {
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

      expect(userReducer(initialState, PENDING_ACTION_TYPE)).toEqual(
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

      expect(userReducer(initialState, FULFILLED_ACTION_TYPE)).toEqual(
        fulfilledUpdatedState,
      );
    });
  });

  describe('login', () => {
    it('should update loading to "true" when login is pending', () => {
      const ACTION_TYPE = { type: login.pending.type };

      const updatedState: State = {
        ...initialState,
        user: null,
        loading: true,
      };

      expect(userReducer(initialState, ACTION_TYPE)).toEqual(updatedState);
    });

    it('should update loading to "false", set authStatus to "Auth" and add user when login is fulfilled', () => {
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

      expect(userReducer(initialState, ACTION_TYPE)).toEqual(updatedState);
    });

    it('should add error to state when login is rejected', () => {
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

      expect(userReducer(initialState, ACTION_TYPE)).toEqual(updatedState);
    });

    it('should remove error from state when login is pending or fulfilled', () => {
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

      expect(userReducer(initialState, PENDING_ACTION_TYPE)).toEqual(
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

      expect(userReducer(initialState, FULFILLED_ACTION_TYPE)).toEqual(
        fulfilledUpdatedState,
      );
    });
  });

  describe('logout', () => {
    it('should update loading to "true" when logout pending', () => {
      const ACTION_TYPE = { type: logout.pending.type };

      const updatedState: State = {
        ...initialState,
        loading: true,
      };

      expect(userReducer(initialState, ACTION_TYPE)).toEqual(updatedState);
    });

    it('should update loading to "false", set authStatus to "NoAuth" and remove user when logout is fulfilled', () => {
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

      expect(userReducer(initialState, ACTION_TYPE)).toEqual(updatedState);
    });

    it('should add error to state when logout is rejected', () => {
      const ACTION_TYPE = {
        type: logout.rejected.type,
        payload: error,
      };

      const updatedState: State = {
        ...initialState,
        loading: false,
        error: error,
      };

      expect(userReducer(initialState, ACTION_TYPE)).toEqual(updatedState);
    });

    it('should remove error from state when logout is pending or fulfilled', () => {
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

      expect(userReducer(initialState, PENDING_ACTION_TYPE)).toEqual(
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

      expect(userReducer(initialState, FULFILLED_ACTION_TYPE)).toEqual(
        fulfilledUpdatedState,
      );
    });
  });
});
