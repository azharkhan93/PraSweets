import Link from "next/link";

type ShareLinkProps = {
  href: string;
  icon: any;
};

export const ShareLink: React.FC<ShareLinkProps> = ({ href, icon }) => {
  return (
    <div className="">
      <Link href={href} target="_blank">
        <div>{icon}</div>
      </Link>
    </div>
  );
};
