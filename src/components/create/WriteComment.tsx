const WriteComment = () => {
  return (
    <>
      <h2>Comments</h2>
      <form action="">
        <textarea name="comment" id="comment" cols={100} rows={10} />
        <input type="submit" value="등록" />
      </form>
    </>
  );
};

export default WriteComment;
