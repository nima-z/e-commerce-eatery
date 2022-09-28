import { PrismaClient } from "@prisma/client";

//=====================================================
import FeedWide from "../components/feed/FeedWide";
//=====================================================

interface Props {
  feed: {
    id: number;
    title: string;
    desc: string;
    legal?: string;
    image: string;
    linkName: string;
    href: string;
    size: string;
  }[];
}
[];

export default function Home({ feed }: Props) {
  return (
    <div>
      {feed.map((item) => (
        <FeedWide
          key={item.id}
          title={item.title}
          desc={item.desc}
          legal={item.legal}
          image={item.image}
          linkName={item.linkName}
          href={item.href}
          size={item.size}
        />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const feed = await prisma.feed.findMany({
    where: {
      usedFor: "homePage",
    },
  });

  return {
    props: {
      feed,
    },
  };
}
