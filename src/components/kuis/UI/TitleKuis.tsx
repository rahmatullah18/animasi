type TypeTitleKuis = {
  title: string;
  color?: string;
};

const TitleKuis = ({ title, color = "text-gray-800" }: TypeTitleKuis) => {
  return <h1 className={`font-bold uppercase text-7xl ${color}`}>{title}</h1>;
};

export default TitleKuis;
