
interface FeedBackProps {
  width?: string;
  height?: string;
}
export const SvgFeedBackPositive: React.FC<FeedBackProps> = ({
  width,
  height
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path d="M10.1818 14.0936L17.0468 7.22864L18.5896 8.77142L10.1818 17.1792L5.41043 12.4078L6.95321 10.865L10.1818 14.0936Z" fill="#1FA500"/>
    </svg>
  )
}
