import { Layout, Text, Page } from "@vercel/examples-ui";
import { Chat } from "../components/Chat";

function Home() {
  return (
    <Page className="flex flex-col h-screen">
      <section className="pt-1.5 flex flex-col justify-center items-center flex-grow">
        <h2 className="text-3xl md:text-4xl hero" data-text="Ophelia's Chatroom">
          Ophelia&apos;s Chatroom
        </h2>
        <div className="lg:w-3/4 w-5/6 pt-1.5 pb-3 flex-grow">
          <Chat />
        </div>
      </section>
    </Page>
  );
}

Home.Layout = Layout;

export default Home;
