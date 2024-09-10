import { TypeJawaban } from "../type/TypeJawaban";

export const MappingSelectedTrueFalse = (id: number, data: TypeJawaban[]) => {
  // const find = data.find((item) => item.id === id);
  const mapping = data.map((item) => {
    const result =
      item.id === id
        ? {
            ...item,
            isSelected: true,
          }
        : {
            ...item,
          };

    return result;
  });
  return mapping;
};
