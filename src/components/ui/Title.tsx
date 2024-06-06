const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="lg:text-2xl md:text-2xl text-xl text-cyan-500 font-semibold lg:mb-4 md:mb-3 mb-2 ">
      {title}
    </h2>
  );
};

export default Title;
