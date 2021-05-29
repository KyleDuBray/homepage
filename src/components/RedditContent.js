import React, { useEffect } from "react";
import snoowrap from "snoowrap";

const r = new snoowrap({
  userAgent: "Homepage App",
  clientId: "HeAuxBWiLX6rCQ",
  clientSecret: "HaGePce9tnhLsHHiRcnyELgeU90vng",
  refreshToken: "23306006969-9oEp39ujIvpb30bmjq8iVpDbf2r2GQ",
});

const RedditContent = () => {
  console.log(r);
  useEffect(() => {
    r.getSubreddit("AskReddit")
      .getWikiPage("bestof")
      .content_md.then(console.log)
      .catch((err) => console.log(err));
  }, []);
  return <div className="reddit-box">RedditContent</div>;
};

export default RedditContent;
