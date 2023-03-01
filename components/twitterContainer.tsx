import Script from "next/script";
import React, { useEffect } from "react";

function TwitterContainer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
  }, []);

  return (
    <blockquote className="twitter-tweet" data-theme="dark">
      <Script src="https://platform.twitter.com/widgets.js" />
      <p lang="en" dir="ltr">
        As
        <a href="https://twitter.com/SenGelecekteki?ref_src=twsrc%5Etfw">
          @SenGelecekteki
        </a>
        Web 3.0 talents, proud to be announce our Web 3.0 project Taland will be
        on
        <a href="https://twitter.com/AIBCsummit?ref_src=twsrc%5Etfw">
          @AIBCsummit
        </a>
        stage👊
        <br />
        <br />
        We need your financial support now to attend the AIBC. Contact direct
        message✌
        <a href="https://twitter.com/coinoxsTR?ref_src=twsrc%5Etfw">
          @coinoxsTR
        </a>
        <a href="https://twitter.com/hashtag/decentralized?src=hash&amp;ref_src=twsrc%5Etfw">
          #decentralized
        </a>
        <a href="https://twitter.com/hashtag/talentmarketplace?src=hash&amp;ref_src=twsrc%5Etfw">
          #talentmarketplace
        </a>
        <a href="https://twitter.com/hashtag/learnandearn?src=hash&amp;ref_src=twsrc%5Etfw">
          #learnandearn
        </a>
        <a href="https://t.co/WqaIlk1Lgx">pic.twitter.com/WqaIlk1Lgx</a>
      </p>
      &mdash; Taland (@talandio)
      <a href="https://twitter.com/talandio/status/1629455222425767939?ref_src=twsrc%5Etfw">
        February 25, 2023
      </a>
    </blockquote>
  );
}

export default TwitterContainer;
