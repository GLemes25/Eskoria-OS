type BandMemberData = {
  name: string;
  imagePath: string;
  moduleLabel: string;
  statusLines: string[];
};

const BAND_MEMBERS_DATA: BandMemberData[] = [
  {
    name: "PROFETA",
    imagePath: "/boot/profeta.svg",
    moduleLabel: "> VOCAL MODULE",
    statusLines: [
      "> THROAT SYS...... OK",
      "> LYRICS DB....... OK",
      "> STAGE PRESENCE.. 100%",
      "> CHAOS FACTOR.... HIGH",
    ],
  },
  {
    name: "DIAVOLI",
    imagePath: "/boot/daivoli.svg",
    moduleLabel: "> GUITAR MODULE",
    statusLines: [
      "> RIFF ENGINE..... OK",
      "> DISTORTION...... OK",
      "> FINGER SPEED.... 100%",
      "> DESTRUCTION..... MAX",
    ],
  },
  {
    name: "EXECUTOR",
    imagePath: "/boot/executor.svg",
    moduleLabel: "> BASS MODULE",
    statusLines: [
      "> LOW END SYS..... OK",
      "> FREQUENCY....... OK",
      "> GROOVE.......... 100%",
      "> DARK ENERGY..... HIGH",
    ],
  },
  {
    name: "NULL",
    imagePath: "/boot/null.svg",
    moduleLabel: "> DRUM MODULE",
    statusLines: [
      "> PERCUSSION SYS.. OK",
      "> DOUBLE KICK..... OK",
      "> SPEED........... 100%",
      "> IMPACT.......... MAX",
    ],
  },
];

export type { BandMemberData };
export { BAND_MEMBERS_DATA };
