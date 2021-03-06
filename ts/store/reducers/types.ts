import { NavigationState } from "react-navigation";
import { FormStateMap } from "redux-form";
import { PersistPartial } from "redux-persist";

import { Action } from "../actions/types";
import { AppState } from "./appState";
import { PersistedAuthenticationState } from "./authentication";
import { BackendInfoState } from "./backendInfo";
import { DeepLinkState } from "./deepLink";
import { EntitiesState } from "./entities";
import { ErrorState } from "./error";
import { LoadingState } from "./loading";
import { NotificationsState } from "./notifications";
import { OnboardingState } from "./onboarding";
import { PinLoginState } from "./pinlogin";
import { ProfileState } from "./profile";
import {
  WalletState,
  WalletStateWithSelectedPaymentMethod,
  WalletStateWithVerificaResponse
} from "./wallet";

export type NetworkState = Readonly<{
  isConnected: boolean;
  actionQueue: ReadonlyArray<Action>;
}>;

export type GlobalState = Readonly<{
  appState: AppState;
  authentication: PersistedAuthenticationState;
  backendInfo: BackendInfoState;
  deepLink: DeepLinkState;
  entities: EntitiesState;
  error: ErrorState;
  form: FormStateMap;
  loading: LoadingState;
  nav: NavigationState;
  network: NetworkState;
  notifications: NotificationsState;
  onboarding: OnboardingState;
  pinlogin: PinLoginState;
  profile: ProfileState;
  wallet: WalletState;
}>;

/**
 * This represents a GlobalState where the Wallet state
 * is guaranteed to store a payment for which the "verifica"
 * information is available
 */
export type GlobalStateWithVerificaResponse = {
  [T in Exclude<keyof GlobalState, "wallet">]: GlobalState[T]
} &
  Readonly<{
    wallet: WalletStateWithVerificaResponse;
  }>;

/**
 * This represents a GlobalState where the Wallet state
 * is guaranteed to store a payment for which the payment
 * method has been selected (+ verifica response)
 */
export type GlobalStateWithSelectedPaymentMethod = {
  [T in Exclude<keyof GlobalState, "wallet">]: GlobalState[T]
} &
  Readonly<{
    wallet: WalletStateWithSelectedPaymentMethod;
  }>;

export type PersistedGlobalState = GlobalState & PersistPartial;
