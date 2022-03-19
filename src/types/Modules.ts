export enum Modules {
  account = "account",
  wallet = "wallet",
  workshop = "workshop"
}
type accountModule = {
  Module: Modules.account;
  Name: string;
  Email: string;
  Phone: string;
  Bolge: string;
  Balances: any[];
};
type walletModule = {
  Module: Modules.wallet;
  Name: string;
};
type workshopModule = {
  Module: Modules.workshop;
  Name: string;
};

export const mockAccount: accountModule = {
  Module: Modules.account,
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
  Module: Modules.wallet,
  Name: "Merkez kasa"
};
export const mockWorkshop: workshopModule = {
  Module: Modules.workshop,
  Name: "18 Alyans"
};

export type AnyModule = accountModule | walletModule | workshopModule;
