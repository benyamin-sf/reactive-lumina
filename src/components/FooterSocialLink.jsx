export default function FooterSocialLink({ title, url, icon }) {
  return (
    <li>
      <a
        title={`Lumina on ${title}`}
        href={url}
        target='_blank'
        rel='noopener noreferrer'
      >
        {icon}
      </a>
    </li>
  );
}
