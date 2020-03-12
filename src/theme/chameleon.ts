export interface ChameleonProps {
    blue: {
      b100: string;
      b200: string;
      b300: string;
      b400: string;
      b500: string;
      b600: string;
    };
    green: {
      g100: string;
      g200: string;
      g300: string;
      g400: string;
      g500: string;
      g600: string;
    };
    purple: {
      p100: string;
      p200: string;
      p300: string;
      p400: string;
      p500: string;
      p600: string;
    };
    yellow: {
      y100: string;
      y200: string;
      y300: string;
      y400: string;
      y500: string;
      y600: string;
    };
    orange: {
      o100: string;
      o200: string;
      o300: string;
      o400: string;
      o500: string;
      o600: string;
    };
    red: {
      r100: string;
      r200: string;
      r300: string;
      r400: string;
      r500: string;
      r600: string;
    };
    neutrals: {
      n000: string;
      n050: string;
      n100: string;
      n150: string;
      n200: string;
      n250: string;
      n300: string;
      n350: string;
      n400: string;
      n450: string;
      n500: string;
      n550: string;
      n600: string;
    };
  }
  
  // Our chameleon colors
  // https://www.chameleondesignsystem.com/foundation/color
  const chameleon: ChameleonProps = {
    blue: {
      b100: '#D9E9FF',
      b200: '#BFDAFF',
      b300: '#80B5FF',
      b400: '#4090FF',
      b500: '#006AFF',
      b600: '#004FBD',
    },
    green: {
      g100: '#D9FFF2',
      g200: '#80FFD2',
      g300: '#00CC85',
      g400: '#00AA6E',
      g500: '#008858',
      g600: '#166549',
    },
    purple: {
      p100: '#E6D9FF',
      p200: '#D5BFFF',
      p300: '#AC80FF',
      p400: '#9B66FF',
      p500: '#7B44E4',
      p600: '#6739BF',
    },
    yellow: {
      y100: '#FFF7D9',
      y200: '#FFE88C',
      y300: '#FFCB00',
      y400: '#D9AD00',
      y500: '#B38F00',
      y600: '#997A00',
    },
    orange: {
      o100: '#FEEDDE',
      o200: '#FFC48C',
      o300: '#F68D2E',
      o400: '#DB781C',
      o500: '#B35F11',
      o600: '#8C4400',
    },
    red: {
      r100: '#FEE2E8',
      r200: '#FABCC8',
      r300: '#FD94A9',
      r400: '#FD4C6F',
      r500: '#E02D52',
      r600: '#A12E45',
    },
    neutrals: {
      n000: '#FFFFFF',
      n050: '#F7F8Fa',
      n100: '#F0F2F5',
      n150: '#DEE4Ec',
      n200: '#E0E4EA',
      n250: '#B3BFCF',
      n300: '#9AA8BB',
      n350: '#828E9E',
      n400: '#6B7582',
      n450: '#5B646F',
      n500: '#4C535D',
      n550: '#383D45',
      n600: '#25282D',
    },
  };
  
  export default chameleon;
  