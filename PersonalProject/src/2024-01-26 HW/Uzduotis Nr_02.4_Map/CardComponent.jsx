export const CardComponent = (props) => {
  const { subtitle, header, link, picture } = props;

  return (
    <div>
      <h1>{header}</h1>
      <p>{subtitle}</p>
      <a target="_blank" href={link} rel="norefferer noreferrer">
        Link to page
      </a>
      <image alt="my picture" src={picture} />
    </div>
  );
};
