export default function MainHeading({
  firstHighlight,
  normalText,
  secondHighlight,
}) {
  return (
    <h2 className='main-heading'>
      <span className='bg-primary'>{firstHighlight}</span>
      {normalText}
      <span className='bg-primary'>{secondHighlight}</span>
    </h2>
  );
}
