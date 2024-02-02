export const PostItem = (props) => {
  const { title, text, subElement } = props;
  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
      <p>{subElement}</p>
    </div>
  );
};
// export default PostItem;
