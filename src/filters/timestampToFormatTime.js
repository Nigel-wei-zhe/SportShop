export default function (timestamp) {
  const month = new Date(timestamp * 1000).getMonth() < 10
    ? 0 + (new Date(timestamp * 1000).getMonth() + 1)
    : new Date(timestamp * 1000).getMonth() + 1;
  const date = new Date(timestamp * 1000).getDate() < 10
    ? 0 + (new Date(timestamp * 1000).getDate())
    : new Date(timestamp * 1000).getDate();
  const formatTime = `${new Date(timestamp * 1000).getFullYear()}-${month}-${date}`;
  return formatTime;
}
