import { AnyModule, mockAccount1, mockAccount2, mockAccounts, mockSection, mockWallet, mockWorkshop, Modules } from "./Modules";

const commandHeader = {
  printed: true,
  color: "#f0f",
  date: "2022-03-15",
  BelgeNo: "0001",
  total: 123,
  From: {
    Module: Modules.Account,
    Id: 88
  },
  To: {
    Module: Modules.Wallet,
    Id: 1
  },
  meta: {
    a: "b",
    c: "d"
  }
};

const commandLine1 = {
  id: 1,
  Comments: "elden alınan",
  CUCode: "22H",
  Amount: 12.58,
  Mily: 912,
  FromBF: 0,
  Value: 12.01,
  ui: {
    showMily: false,
    showToPb: false
  },
  _xtra: {}
};

const commandLine2 = {
  id: 2,
  Comments: "",
  CUCode: "USD",
  Amount: 100,
  Mily: 0,
  FromBF: 14.6897,
  Value: 1468.97,
  ui: {
    showMily: false,
    showToPb: false
  },
  _xtra: {}
};

type ExtraType = { From: AnyModule; To: AnyModule };

const mockExtra: ExtraType = {
  From: mockAccounts.find((x, id = commandHeader.From.Id) => x.id === id) || mockAccount1,
  To: mockWallet
};

const data = {
  header: commandHeader,
  _xtra: mockExtra,
  lines: [commandLine1, commandLine2]
}

const meta = {
  lastEditedTime: "",
  lastEditedUser: ""
}

export const mockCommand = {
  meta,
  myPermissions: ["add", "edit", "delete", "seal"],
  state: "",
  flags: 1 | 2 | 4 | 8 | 16,
  data
};
