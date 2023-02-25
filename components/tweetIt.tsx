import { useState } from "react";

function TweetItButton() {
  const tweetText = `Let's build ✌️ #taland`;
  const quotedTweetUrl = 'https://twitter.com/talandio/status/1629455222425767939';
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(quotedTweetUrl)}`;

  const handleTweetClick = () => {
    window.open(tweetUrl);
  };

  return (
      <button onClick={handleTweetClick}
      className=" max-w-[14rem] py-4 px-6 mb-4 shadow rounded bg-gray-600 hover:bg-gray-600/90 font-medium leading-none text-white text-center flex items-center justify-center mx-auto cursor-pointer"
      >Tweet At!</button>
  );
}

export default TweetItButton