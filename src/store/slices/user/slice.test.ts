import { AuthStatus } from '~/constants';
import {
  initialState,
  loadingState,
  rejectedState,
  authState,
} from '~/tests/store/user';
import { error } from '~/utils/mock-data';

import userReducer, { checkAuthStatus, login, logout } from './slice';

describe('Slice: user', () => {
  it('without additional parameters should return initial state', () => {
    const actionType = { type: 'UNKNOWN_ACTION' };
    expect(userReducer(undefined, actionType)).toEqual(initialState);
  });

  describe('checkAuthStatus', () => {
    it('should return a state with the loading status "true" when checkAuthStatus is pending', () => {
      const actionType = { type: checkAuthStatus.pending.type };

      const result = userReducer(initialState, actionType);
      expect(result.loading).toBeTruthy();
    });

    it('should return a state with the loading status "false" when checkAuthStatus is fulfilled', () => {
      const actionType = {
        type: checkAuthStatus.fulfilled.type,
        payload: authState.user,
      };

      const result = userReducer(loadingState, actionType);
      expect(result.loading).toBeFalsy();
    });

    it('should return a state with added user when checkAuthStatus is fulfilled', () => {
      const actionType = {
        type: checkAuthStatus.fulfilled.type,
        payload: authState.user,
      };

      const result = userReducer(loadingState, actionType);
      expect(result.user).toEqual(authState.user);
    });

    it('should return a state with updated auth status when checkAuthStatus is fulfilled', () => {
      const actionType = {
        type: checkAuthStatus.fulfilled.type,
        payload: authState.user,
      };

      const result = userReducer(loadingState, actionType);
      expect(result.authStatus).toBe(AuthStatus.Auth);
    });

    it('should return a state with added error when checkAuthStatus is rejected', () => {
      const actionType = {
        type: checkAuthStatus.rejected.type,
        payload: error,
      };

      const result = userReducer(initialState, actionType);
      expect(result.error).toEqual(error.message);
    });

    it('should return a state with removed error when checkAuthStatus is pending', () => {
      const actionType = {
        type: checkAuthStatus.pending.type,
      };

      const result = userReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });

    it('should return a state with removed error when checkAuthStatus is fulfilled', () => {
      const actionType = {
        type: checkAuthStatus.fulfilled.type,
        payload: authState.user,
      };

      const result = userReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });
  });

  describe('login', () => {
    it('should return a state with the loading status "true" when login is pending', () => {
      const actionType = { type: login.pending.type };

      const result = userReducer(initialState, actionType);
      expect(result.loading).toBeTruthy();
    });

    it('should return a state with the loading status "false" when login is fulfilled', () => {
      const actionType = {
        type: login.fulfilled.type,
        payload: authState.user,
      };

      const result = userReducer(loadingState, actionType);
      expect(result.loading).toBeFalsy();
    });

    it('should return a state with added user when login is fulfilled', () => {
      const actionType = {
        type: login.fulfilled.type,
        payload: authState.user,
      };

      const result = userReducer(loadingState, actionType);
      expect(result.user).toEqual(authState.user);
    });

    it('should return a state with updated auth status when login is fulfilled', () => {
      const actionType = {
        type: login.fulfilled.type,
        payload: authState.user,
      };

      const result = userReducer(loadingState, actionType);
      expect(result.authStatus).toBe(AuthStatus.Auth);
    });

    it('should return a state with added error when login is rejected', () => {
      const actionType = {
        type: login.rejected.type,
        payload: error,
      };

      const result = userReducer(initialState, actionType);
      expect(result.error).toEqual(error.message);
    });

    it('should return a state with removed error when login is pending', () => {
      const actionType = {
        type: login.pending.type,
      };

      const result = userReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });

    it('should return a state with removed error when login is fulfilled', () => {
      const actionType = {
        type: login.fulfilled.type,
        payload: authState.user,
      };

      const result = userReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });
  });

  describe('logout', () => {
    it('should return a state with the loading status "true" when logout is pending', () => {
      const actionType = { type: logout.pending.type };

      const result = userReducer(authState, actionType);
      expect(result.loading).toBeTruthy();
    });

    it('should return a state with the loading status "false" when logout is fulfilled', () => {
      const actionType = { type: logout.fulfilled.type };

      const result = userReducer(loadingState, actionType);
      expect(result.loading).toBeFalsy();
    });

    it('should return a state with removed user when logout is fulfilled', () => {
      const actionType = { type: logout.fulfilled.type };

      const result = userReducer(authState, actionType);
      expect(result.user).toBeNull();
    });

    it('should return a state with updated auth status when logout is fulfilled', () => {
      const actionType = { type: logout.fulfilled.type };

      const result = userReducer(authState, actionType);
      expect(result.authStatus).toBe(AuthStatus.NoAuth);
    });

    it('should return a state with added error when logout is rejected', () => {
      const actionType = {
        type: logout.rejected.type,
        payload: error,
      };

      const result = userReducer(authState, actionType);
      expect(result.error).toEqual(error.message);
    });

    it('should return a state with removed error when logout is pending', () => {
      const actionType = {
        type: logout.pending.type,
      };

      const result = userReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });

    it('should return a state with removed error when logout is fulfilled', () => {
      const actionType = {
        type: logout.fulfilled.type,
        payload: authState.user,
      };

      const result = userReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });
  });
});
