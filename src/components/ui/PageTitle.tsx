const PageTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="text-3xl font-bold py-5 mb-5 text-center text-cyan-700">
      {title}
    </h2>
  );
};

export default PageTitle;
