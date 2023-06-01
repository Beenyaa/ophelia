import { Layout, Page } from "@vercel/examples-ui";
import Image from "next/image";
import { Chat } from "../components/Chat";
import "98.css";

function Home() {
  return (
    <>
      <Image
        className="background-image"
        height="100"
        width="100"
        src="pink.svg"
        alt="pink background"
      />
      <Page className="flex flex-col h-screen relative ">
        <section className="flex flex-col justify-center items-center grow py-3">
          {/* <h2
            className="text-3xl md:text-4xl hero pb-3"
            data-text="Ophelia's Chatroom"
          >
            Ophelia&apos;s Chatroom
          </h2> */}
          <div className="lg:w-3/4 w-5/6 pb-6 grow-0 window h-[90vh]">
            <div className="title-bar">
              <div className="title-bar-text">Ophelia&apos;s Chatroom</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button aria-label="Close" />
              </div>
            </div>
            <div className="grow-0 window-body h-[95%]">
              <Chat />
            </div>
          </div>
        </section>
      </Page>
    </>
  );
}

Home.Layout = Layout;

export default Home;
