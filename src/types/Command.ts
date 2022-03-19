import { AnyModule, mockAccount, mockWallet, Modules } from "./Modules";

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
  CuCode: "22H",
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
  CuCode: "USD",
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
  From: mockAccount,
  To: mockWallet
};

export const mockCommand = {
  myPermissions: ["add", "edit", "delete", "seal"],
  meta: {
    lastEditedTime: "",
    lastEditedUser: ""
  },
  state: "",
  flags: 1 | 2 | 4 | 8 | 16,
  data: {
    header: commandHeader,
    _xtra: mockExtra,
    lines: [commandLine1, commandLine2]
  }
};
