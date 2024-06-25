const PageTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="lg:text-3xl md:text-3xl text-2xl uppercase underline font-bold py-5 lg:mb-5 md:mb-3 mb-1 text-center text-cyan-600">
      {title}
    </h2>
  );
};

export default PageTitle;
