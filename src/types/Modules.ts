export enum Modules {
  Account = "account",
  Wallet = "wallet",
  Workshop = "workshop"
}
type accountModule = {
  Module: Modules.Account;
  Name: string;
  Email: string;
  Phone: string;
  Bolge: string;
  Balances: any[];
};
type walletModule = {
  Module: Modules.Wallet;
  Name: string;
};
type workshopModule = {
  Module: Modules.Workshop;
  Name: string;
};

export const mockAccount: accountModule = {
  Module: Modules.Account,
  Name: "Müşteri - 1",
  Email: "musteri@exampe.com",
  Phone: "12123123",
  Bolge: "Merkez",
  Balances: [
    {
      CUCode: "USD",
      Amount: 1000,
      Sign: "$"
    },
    {
      CUCode: "HAS",
      Amount: 45,
      Sign: "Gr"
    }
  ]
};

export const mockWallet: walletModule = {
  Module: Modules.Wallet,
  Name: "Merkez kasa"
};
export const mockWorkshop: workshopModule = {
  Module: Modules.Workshop,
  Name: "18 Alyans"
};

export type AnyModule = accountModule | walletModule | workshopModule;
