type BookParams = {
  params: {
    bookId: string;
  };
};

const BookDetailsPage = ({ params }: BookParams) => {
  console.log(params);
  return (
    <div>
      <h1>This is BookDetailsPage component</h1>
    </div>
  );
};

export default BookDetailsPage;
