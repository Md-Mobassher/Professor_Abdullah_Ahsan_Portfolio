const PageTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="text-3xl font-bold py-5 lg:mb-5 md:mb-3 mb-1 text-center text-cyan-700">
      {title}
    </h2>
  );
};

export default PageTitle;
