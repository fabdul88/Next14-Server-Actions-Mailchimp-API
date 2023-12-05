/* 
There is no proper way to add gradients to react icons. The only way to add the gradient is to add an < svg > element wrapping a < gradient > element to the component.
https://github.com/react-icons/react-icons/issues/251 
https://stackoverflow.com/questions/46916869/react-icons-apply-a-linear-gradient
*/
export default function SVGElement({
  gradientId,
  colorOne,
  colorTwo,
}: GradientIcon) {
  return (
    <svg width="0" height="0">
      <linearGradient id={gradientId} x1="100%" y1="100%" x2="0%" y2="0%">
        <stop stopColor={colorOne} offset="0%" />
        <stop stopColor={colorTwo} offset="100%" />
      </linearGradient>
    </svg>
  );
}
