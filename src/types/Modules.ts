export enum Modules {
  Account = "account",
  Wallet = "wallet",
  Workshop = "workshop",
  Building = "Say.Building",
  Section = "Say.Section"
}

export type BalanceType = {

  CUCode: string,
  Amount: number,
  Sign: string

}

type accountModule = {
  Module: Modules.Account;
  id: number,
  Name: string;
  Email: string;
  Phone: string;
  Bolge: string;
  Balances?: BalanceType[];
};

type walletModule = {
  Module: Modules.Wallet;
  Name: string;
  Balances?: BalanceType[];
};

type workshopModule = {
  Module: Modules.Workshop;
  Name: string;
  Mily: number;
  Balances?: BalanceType[];
};

type buildingModel = {
  Module: Modules.Building,
  Name: string
}

type sectionModel = {
  Module: Modules.Section,
  Name: string,
  BuildingId: number,
  DoorNumber: string,
}

export const mockAccount1: accountModule = {
  Module: Modules.Account,
  id:1,
  Name: "Müşteri - 1",
  Email: "musteri1@exampe.com",
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

export const mockAccount2: accountModule = {
  Module: Modules.Account,
  id:2,
  Name: "Müşteri - 2",
  Email: "musteri2@exampe.com",
  Phone: "8957845648",
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
    },
    {
      CUCode: "EUR",
      Amount: 45,
      Sign: "€"
    },
    {
      CUCode: "TL",
      Amount: 45,
      Sign: "₺"
    }
  ]
};

export const mockAccounts : accountModule[] = [
  mockAccount1,
  mockAccount2
] 

export const mockWallet: walletModule = {
  Module: Modules.Wallet,
  Name: "Merkez kasa",
  Balances: [
    {
      CUCode: "YTL",
      Amount: 1210,
      Sign: "₺"
    }
  ]
};
export const mockWorkshop: workshopModule = {
  Module: Modules.Workshop,
  Name: "18 Alyans",
  Mily: 750,
  Balances: [
    {
      CUCode: "22Y",
      Amount: 2323,
      Sign: "Gr"
    }
  ]
};

export const mockBuilding: buildingModel = {
  Module: Modules.Building,
  Name: "A Blok"
};

export const mockSection: sectionModel = {
  Module: Modules.Section,
  Name: "Daire-1",
  BuildingId: 1,
  DoorNumber: "1"
};

export type AnyModule = accountModule | walletModule | workshopModule | buildingModel | sectionModel;
