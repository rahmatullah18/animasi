export type TypeJawaban = {
  id: number;
  text: string;
  handleClick: (item: number) => void;
  isSelected: boolean;
  answer: boolean;
};
