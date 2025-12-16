export default function LinkButton({ text, url }) {
  return (
    <a className="link-button" href={url} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}
