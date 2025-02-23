interface Props {
  fullName: string;
  dateOfBirth: string;
  monthOfBirth: string;
  yearOfBirth: string;
}

let soNgay = 0;
let soThang = 0;
let soNam = 0;

const characterToNumber = (character: string) => {
  if (character == "a" || character == "j" || character == "s") {
    return 1;
  } else if (character == "b" || character == "k" || character == "t") {
    return 2;
  } else if (character == "c" || character == "l" || character == "u") {
    return 3;
  } else if (character == "d" || character == "m" || character == "v") {
    return 4;
  } else if (character == "e" || character == "n" || character == "w") {
    return 5;
  } else if (character == "f" || character == "o" || character == "x") {
    return 6;
  } else if (character == "g" || character == "p" || character == "y") {
    return 7;
  } else if (character == "h" || character == "q" || character == "z") {
    return 8;
  } else if (character == "i" || character == "r") {
    return 9;
  }
};

// const countVowel = (name: string) => {
//   const vowels = new Set(["a", "e", "i", "o", "u"]);
//   let count = 0;
//   const loweredName = name.toLowerCase();

//   for (let i = 0; i < loweredName.length; i++) {
//     if (vowels.has(loweredName[i])) {
//       count++;
//     } else if (loweredName[i] === "y") {
//       // Check if y is between vowels
//       const prevIsVowel = i > 0 && vowels.has(loweredName[i - 1]);
//       const nextIsVowel =
//         i < loweredName.length - 1 && vowels.has(loweredName[i + 1]);
//       if (!prevIsVowel || !nextIsVowel) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

const vowelCheck = (name: string) => {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const loweredName = name.toLowerCase();
  const vowelList = [];
  const consonantList = [];

  for (let i = 0; i < loweredName.length; i++) {
    if (vowels.has(loweredName[i])) {
      vowelList.push(loweredName[i]);
    } else if (loweredName[i] === "y") {
      // Check if either neighboring letter is a vowel
      const prevIsVowel = i > 0 && vowels.has(loweredName[i - 1]);
      const nextIsVowel =
        i < loweredName.length - 1 && vowels.has(loweredName[i + 1]);
      if (prevIsVowel || nextIsVowel) {
        consonantList.push(loweredName[i]); // y is a consonant if next to vowel
      } else {
        vowelList.push(loweredName[i]); // y is a vowel if not next to vowel
      }
    } else {
      if (loweredName[i] === " ") {
        continue;
      }
      consonantList.push(loweredName[i]);
    }
  }

  return { vowelList, consonantList };
};

const countMostDuplicateCharactersInName = (name: string) => {
  const name_lower = name.toLowerCase().replace(/\s/g, "");
  const charCount = new Map<string, number>();

  // Count occurrences of each character
  for (const char of name_lower) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Find the maximum count
  const maxCount = Math.max(...Array.from(charCount.values()));

  // Get all characters that appear the maximum number of times
  const mostFrequent: { char: string; count: number }[] = [];
  for (const [char, count] of charCount) {
    if (count === maxCount && maxCount > 1) {
      mostFrequent.push({ char, count });
    }
  }

  return mostFrequent;
};

const convertToSingleDigitWithoutSpecial = (num: number) => {
  let result = num;
  while (result > 9) {
    result = result
      .toString()
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return result;
};

const detectTheFirstVowelInName = (name: string) => {
  const loweredName = name.toLowerCase();
  const words = loweredName.split(" ");
  const lastWord = words[words.length - 1];
  const { vowelList } = vowelCheck(lastWord);
  const firstVowel = vowelList[0];
  return characterToNumber(firstVowel) || 0;
};

const firstCharacterInName = (name: string) => {
  const loweredName = name.toLowerCase();
  const words = loweredName.split(" ");
  const lastWord = words[words.length - 1];
  const firstChar = lastWord.charAt(0);
  return characterToNumber(firstChar) || 0;
};

const lastCharacterInName = (name: string) => {
  const loweredName = name.toLowerCase();
  const words = loweredName.split(" ");
  const lastWord = words[words.length - 1];
  const lastChar = lastWord.charAt(lastWord.length - 1);
  return characterToNumber(lastChar) || 0;
};

const timSoThieuVaSoYeu = (props: Props) => {
  const numbersInName = new Set<number>();
  const name_lower = props.fullName.toLowerCase().replace(/\s/g, "");
  const dobDigits = new Set(
    [...props.dateOfBirth, ...props.monthOfBirth, ...props.yearOfBirth].map(
      Number
    )
  );

  // Convert name characters to numbers
  for (const char of name_lower) {
    const num = characterToNumber(char);
    if (num) numbersInName.add(num);
  }

  const soThieu: number[] = [];
  const soYeu: number[] = [];
  const count = numbersInName.size;

  // Check numbers 1-9
  for (let i = 1; i <= 9; i++) {
    if (!numbersInName.has(i)) {
      if (dobDigits.has(i)) {
        soThieu.push(i);
      } else {
        soYeu.push(i);
      }
    }
  }

  return { soThieu, soYeu, count };
};

const chiSoPhuongTienNhanThucTinhThan = (name: string) => {
  const name_lower = name.toLowerCase();
  let sum = 0;
  const targetChars = new Set(["a", "n", "h", "p", "j", "g", "l"]);

  for (const char of name_lower) {
    if (targetChars.has(char)) {
      const num = characterToNumber(char);
      if (num) sum += num;
    }
  }

  while (sum > 9) {
    sum = sum
      .toString()
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit), 0);
  }

  return sum;
};

const chiSoPhuongTienNhanThucTrucGiac = (name: string) => {
  const name_lower = name.toLowerCase();
  let sum = 0;
  const targetChars = new Set(["k", "f", "c", "v", "q", "u", "y"]);

  for (const char of name_lower) {
    if (targetChars.has(char)) {
      const num = characterToNumber(char);
      if (num) sum += num;
    }
  }

  while (sum > 9) {
    sum = sum
      .toString()
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit), 0);
  }

  return sum;
};

const chiSoPhuongTienNhanThucCamXuc = (name: string) => {
  const name_lower = name.toLowerCase();
  let sum = 0;
  const targetChars = new Set(["s", "o", "i", "r", "z", "b", "t", "x"]);

  for (const char of name_lower) {
    if (targetChars.has(char)) {
      const num = characterToNumber(char);
      if (num) sum += num;
    }
  }

  while (sum > 9) {
    sum = sum
      .toString()
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit), 0);
  }

  return sum;
};

const chiSoPhuongTienNhanThucTheChat = (name: string) => {
  const name_lower = name.toLowerCase();
  let sum = 0;
  const targetChars = new Set(["e", "m", "w", "d"]);

  for (const char of name_lower) {
    if (targetChars.has(char)) {
      const num = characterToNumber(char);
      if (num) sum += num;
    }
  }

  while (sum > 9) {
    sum = sum
      .toString()
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit), 0);
  }

  return sum;
};

const chiSoCanBang = (name: string) => {
  const name_lower = name.toLowerCase();
  const words = name_lower.split(" ");
  let selectedWords = [];

  if (words.length <= 3) {
    selectedWords = words;
  } else {
    selectedWords = [words[0], words[1], words[words.length - 1]];
  }

  let sum = 0;
  for (const word of selectedWords) {
    const firstChar = word.charAt(0);
    const num = characterToNumber(firstChar);
    if (num) sum += num;
  }

  while (sum > 9) {
    sum = sum
      .toString()
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit), 0);
  }

  return sum;
};

const tinhSoNgay = (date: string) => {
  let tongNgaySinh = 0;
  soNgay = 0;

  for (let i = 0; i < date.length; i++) {
    tongNgaySinh += parseInt(date[i]);
  }

  if (tongNgaySinh > 9 && tongNgaySinh != 11) {
    for (let i = 0; i < tongNgaySinh.toString().length; i++) {
      soNgay += parseInt(tongNgaySinh.toString()[i]);
    }
  } else if (tongNgaySinh > 9 && tongNgaySinh == 11) {
    soNgay = 11;
  } else {
    soNgay = tongNgaySinh;
  }
  return soNgay;
};

const tinhSoThang = (month: string) => {
  let tongThangSinh = 0;
  soThang = 0;

  for (let i = 0; i < month.length; i++) {
    tongThangSinh += parseInt(month[i]);
  }

  if (tongThangSinh > 9 && tongThangSinh != 11) {
    for (let i = 0; i < tongThangSinh.toString().length; i++) {
      soThang += parseInt(tongThangSinh.toString()[i]);
    }
  } else if (tongThangSinh > 9 && tongThangSinh == 11) {
    soThang = tongThangSinh;
  } else {
    soThang = tongThangSinh;
  }

  return soThang;
};

const tinhSoNam = (year: string) => {
  let tongNamSinh = 0;
  soNam = 0;

  for (let i = 0; i < year.length; i++) {
    tongNamSinh += parseInt(year[i]);
  }

  if (tongNamSinh > 9) {
    if (
      tongNamSinh == 11 ||
      tongNamSinh == 22 ||
      tongNamSinh == 33 ||
      tongNamSinh == 13 ||
      tongNamSinh == 14 ||
      tongNamSinh == 16 ||
      tongNamSinh == 19
    ) {
      soNam = tongNamSinh;
    } else {
      for (let i = 0; i < tongNamSinh.toString().length; i++) {
        soNam += parseInt(tongNamSinh.toString()[i]);
      }
    }
  } else {
    soNam = tongNamSinh;
  }

  return soNam;
};

export const tinhChiSoDuongDoi = (props: Props) => {
  const tongNgayThangNamSinh =
    tinhSoNgay(props.dateOfBirth) +
    tinhSoThang(props.monthOfBirth) +
    tinhSoNam(props.yearOfBirth);
  let chiSoNgaySinh = 0;

  if (tongNgayThangNamSinh > 9) {
    if (
      tongNgayThangNamSinh === 11 ||
      tongNgayThangNamSinh === 22 ||
      tongNgayThangNamSinh === 33 ||
      tongNgayThangNamSinh === 13 ||
      tongNgayThangNamSinh === 14 ||
      tongNgayThangNamSinh === 16 ||
      tongNgayThangNamSinh === 19
    ) {
      chiSoNgaySinh = tongNgayThangNamSinh;
    } else {
      let sum = tongNgayThangNamSinh;
      while (sum > 9) {
        sum = sum
          .toString()
          .split("")
          .reduce((acc, digit) => acc + parseInt(digit), 0);
      }
      chiSoNgaySinh = sum;
    }
  } else {
    chiSoNgaySinh = tongNgayThangNamSinh;
  }

  return chiSoNgaySinh;
};

export const tinhChiSoTinhCach = (props: Props) => {
  const words = props.fullName.split(" "); // Split full name into words
  let tongPhuAm = 0;

  words.forEach((word) => {
    let tongPhuAmTungTu = 0;
    const consonantList = vowelCheck(word).consonantList;

    // Calculate sum for each word
    consonantList.forEach((element) => {
      const value = characterToNumber(element);
      if (value) tongPhuAmTungTu += value;
    });

    // Reduce to single digit unless it's a master number
    if (
      tongPhuAmTungTu > 9 &&
      ![11, 22, 33, 13, 14, 16, 19].includes(tongPhuAmTungTu)
    ) {
      while (tongPhuAmTungTu > 9) {
        tongPhuAmTungTu = tongPhuAmTungTu
          .toString()
          .split("")
          .reduce((sum, digit) => sum + parseInt(digit), 0);
      }
    }

    // Add to total sum
    tongPhuAm += tongPhuAmTungTu;
  });

  // Calculate final result
  let chiSoTinhCach = tongPhuAm;
  if (tongPhuAm > 9) {
    if ([11, 22, 33, 13, 14, 16, 19].includes(tongPhuAm)) {
      chiSoTinhCach = tongPhuAm;
    } else {
      chiSoTinhCach = tongPhuAm
        .toString()
        .split("")
        .reduce((sum, digit) => sum + parseInt(digit), 0);
    }
  }

  return chiSoTinhCach;
};

export const tinhChiSoNoiTam = (props: Props) => {
  const words = props.fullName.split(" ");
  let tongNguyenAm = 0;

  words.forEach((word) => {
    let tongNguyenAmTungTu = 0;
    const vowelList = vowelCheck(word).vowelList;

    vowelList.forEach((element) => {
      const value = characterToNumber(element);
      if (value) tongNguyenAmTungTu += value;
    });

    if (
      tongNguyenAmTungTu > 9 &&
      ![11, 22, 33, 13, 14, 16, 19].includes(tongNguyenAmTungTu)
    ) {
      while (tongNguyenAmTungTu > 9) {
        tongNguyenAmTungTu = tongNguyenAmTungTu
          .toString()
          .split("")
          .reduce((sum, digit) => sum + parseInt(digit), 0);
      }
    }

    tongNguyenAm += tongNguyenAmTungTu;
  });

  let chiSoNoiTam = tongNguyenAm;
  if (tongNguyenAm > 9) {
    if ([11, 22, 33, 13, 14, 16, 19].includes(tongNguyenAm)) {
      chiSoNoiTam = tongNguyenAm;
    } else {
      chiSoNoiTam = tongNguyenAm
        .toString()
        .split("")
        .reduce((sum, digit) => sum + parseInt(digit), 0);
    }
  }

  return chiSoNoiTam;
};

export const tinhChiSoDamMeTiemAn = (props: Props) => {
  const duplicates = countMostDuplicateCharactersInName(props.fullName);
  const results: number[] = [];

  duplicates.forEach(({ char }) => {
    const numberValue = characterToNumber(char) || 0;
    let product = numberValue;

    if (product > 9) {
      if (![11, 22, 33, 13, 14, 16, 19].includes(product)) {
        while (product > 9) {
          product = product
            .toString()
            .split("")
            .reduce((acc, digit) => acc + parseInt(digit), 0);
        }
      }
    }

    results.push(product);
  });

  return results;
};

export const tinhChiSoNguyenAmDauTrongTen = (props: Props) => {
  const firstVowel = detectTheFirstVowelInName(props.fullName);
  return firstVowel;
};

export const tinhChuDauTrongTen = (props: Props) => {
  const firstChar = firstCharacterInName(props.fullName);
  return firstChar;
};

export const tinhChuCuoiTrongTen = (props: Props) => {
  const lastChar = lastCharacterInName(props.fullName);
  return lastChar;
};

export const tinhChiSoThaiDo = (props: Props) => {
  return tinhSoNgay(props.dateOfBirth) + tinhSoThang(props.monthOfBirth);
};

export const tinhChiSoBanTheTiemThuc = (props: Props) => {
  const result = timSoThieuVaSoYeu(props);

  return 9 - result.soThieu.length - result.soYeu.length;
};

export const tinhChiSoPhuongTienNhanThucTinhThan = (props: Props) => {
  return chiSoPhuongTienNhanThucTinhThan(props.fullName);
};

export const tinhChiSoPhuongTienNhanThucTrucGiac = (props: Props) => {
  return chiSoPhuongTienNhanThucTrucGiac(props.fullName);
};

export const tinhChiSoPhuongTienNhanThucCamXuc = (props: Props) => {
  return chiSoPhuongTienNhanThucCamXuc(props.fullName);
};

export const tinhChiSoPhuongTienNhanThucTheChat = (props: Props) => {
  return chiSoPhuongTienNhanThucTheChat(props.fullName);
};

export const tinhChiSoCanBang = (props: Props) => {
  return chiSoCanBang(props.fullName);
};

export const tinhChiSoThieu = (props: Props) => {
  return timSoThieuVaSoYeu(props).soThieu;
};

export const tinhChiSoYeu = (props: Props) => {
  return timSoThieuVaSoYeu(props).soYeu;
};

export const tinhChiSoSuMenh = (props: Props) => {
  const words = props.fullName.split(" ");
  let tongChiSoSum = 0;

  words.forEach((word) => {
    let wordSum = 0;
    const loweredWord = word.toLowerCase();

    for (const char of loweredWord) {
      const value = characterToNumber(char);
      if (value) wordSum += value;
    }

    if (wordSum > 9) {
      if (![11, 22, 33, 13, 14, 16, 19].includes(wordSum)) {
        while (wordSum > 9) {
          wordSum = wordSum
            .toString()
            .split("")
            .reduce((acc, digit) => acc + parseInt(digit), 0);
        }
      }
    }

    tongChiSoSum += wordSum;
  });

  if (tongChiSoSum > 9) {
    if (![11, 22, 33, 13, 14, 16, 19].includes(tongChiSoSum)) {
      while (tongChiSoSum > 9) {
        tongChiSoSum = tongChiSoSum
          .toString()
          .split("")
          .reduce((acc, digit) => acc + parseInt(digit), 0);
      }
    }
  }

  return tongChiSoSum;
};

export const countNumberOfOccurenceInName = (fullName: string) => {
  const result: { [key: string]: number } = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
  };

  const name_lower = fullName.toLowerCase().replace(/\s/g, "");
  for (const char of name_lower) {
    const num = characterToNumber(char);
    if (num) {
      result[num.toString()]++;
    }
  }

  return result;
};

export const countNumberOfOccurenceInDateOfBirth = (dateOfBirth: string) => {
  const result: { [key: string]: number } = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
  };

  for (const char of dateOfBirth) {
    const num = parseInt(char);
    if (!isNaN(num)) {
      result[num.toString()]++;
    }
  }

  return result;
};

export const tinhNgaySinh1So = (props: Props) => {
  const date = tinhSoNgay(props.dateOfBirth);
  const month = tinhSoThang(props.monthOfBirth);
  const year = tinhSoNam(props.yearOfBirth);

  return {
    date,
    month,
    year,
  };
};

export const timSoLap = (props: Props) => {
  const chiSoDuongDoi = convertToSingleDigitWithoutSpecial(
    tinhChiSoDuongDoi(props)
  );
  const chiSoNgaySinh = convertToSingleDigitWithoutSpecial(
    tinhNgaySinh1So(props).date
  );
  const chiSoTinhCach = convertToSingleDigitWithoutSpecial(
    tinhChiSoTinhCach(props)
  );
  const chiSoNoiTam = convertToSingleDigitWithoutSpecial(
    tinhChiSoNoiTam(props)
  );
  const chiSoThaiDo = convertToSingleDigitWithoutSpecial(
    tinhChiSoThaiDo(props)
  );
  const chisosumenh = convertToSingleDigitWithoutSpecial(
    tinhChiSoSuMenh(props)
  );

  const numbers = [
    chiSoDuongDoi,
    chiSoNgaySinh,
    chiSoTinhCach,
    chiSoNoiTam,
    chiSoThaiDo,
    chisosumenh,
  ];

  const counts = new Map<number, number>();
  const duplicates: number[] = [];

  // Count occurrences
  for (const num of numbers) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  // Find max frequency
  let maxFreq = 0;
  for (const count of counts.values()) {
    if (count > maxFreq) maxFreq = count;
  }

  // Get numbers that appear most frequently
  if (maxFreq > 1) {
    for (const [num, count] of counts.entries()) {
      if (count === maxFreq) {
        duplicates.push(num);
      }
    }
  }

  return duplicates;
};
// export const soTinhCach = (props:Props) =>{
//       const
// }
