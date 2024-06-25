const PageTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="text-3xl uppercase underline font-bold py-5 lg:mb-5 md:mb-3 mb-1 text-center text-cyan-600">
      {title}
    </h2>
  );
};

export default PageTitle;
