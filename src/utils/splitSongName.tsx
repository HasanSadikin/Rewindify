export function splitSongName(str: string): [string, string] {
  const splittedNameArray = str.split(" ");
  const half = Math.floor(splittedNameArray.length / 2);
  return [
    splittedNameArray.splice(0, half).join(" "),
    splittedNameArray.splice(half - 2, splittedNameArray.length).join(" "),
  ];
}
