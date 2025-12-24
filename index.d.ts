// @ts-ignore
import SteamID from "steamid";

type SteamSignInOptions = {
  agent: any;
};

declare class SteamSignIn {
  constructor(realm: string, options?: SteamSignInOptions);
  getUrl(returnUrl: string): string;
  verifyLogin(url: string): Promise<SteamID>;
}

export default SteamSignIn;
