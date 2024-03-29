import clsx from "clsx";
import React from "react";
import Balancer from "react-wrap-balancer";

// wrap Balancer to remove type errors :( - @TODO - fix this ugly hack
const BalancerWrapper = (props: any) => <Balancer {...props} />;

type ChatGPTAgent = "user" | "system" | "assistant";

export interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string;
}

// loading placeholder animation for the chat line
export const LoadingChatLine = () => (
  <div className="flex min-w-full animate-pulse px-4 py-5 sm:px-6">
    <div className="flex flex-grow space-x-3">
      <div className="min-w-0 flex-1">
        <p className="font-large text-base text-gray-900">
            Ophelia
        </p>
        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-2 rounded bg-zinc-500"></div>
            <div className="col-span-1 h-2 rounded bg-zinc-500"></div>
          </div>
          <div className="h-2 rounded bg-zinc-500"></div>
        </div>
      </div>
    </div>
  </div>
);

// util helper to convert new lines to <br /> tags
const convertNewLines = (text: string) => {
  // const message: string = JSON.parse(`{${text}`).response;
  return text.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));
};

export const ChatLine = React.forwardRef<HTMLDivElement, ChatGPTMessage>(
  ({ role = "assistant", content }, ref) => {
    if (!content) {
      return null;
    }
    const formattedMessage = convertNewLines(content);

    return (
      <div
        ref={ref}
        className={
          role != "assistant"
            ? "float-right clear-both"
            : "float-left clear-both"
        }
      >
        <BalancerWrapper>
          <div className="float-right mb-5 rounded-lg bg-white px-4 py-5 shadow-lg ring-1 ring-zinc-100 sm:px-6">
            <div className="flex space-x-3">
              <div className="flex-1 gap-4">
                <p className="text-base text-gray-900">
                  <span className="font-bold">
                    {role == "assistant" ? "Ophelia" : "You"}
                  </span>
                </p>
                <p
                  className={clsx(
                    "text-sm"
                    // role == 'assistant' ? 'font-semibold font- ' : 'text-gray-400'
                  )}
                >
                  {formattedMessage}
                </p>
              </div>
            </div>
          </div>
        </BalancerWrapper>
      </div>
    );
  }
);

ChatLine.displayName = "ChatLine";
