// assets
import AssetMenuOptions from "../assets/Menu";

// components
import Menu from "../components/menu/Menu";
import Insight from "../components/insight/Insight";

const homepageInsightDefault = `# NOISEDITOR - Less noise, more code

Noiseditor is the ideal tool for storing code snippets without noise. Save your code with text explanations and illustrations, and generate links to share with others.

https://noiseditor.com/
`;

const Homepage = function () {
  return (
    <div className="container">
      <Menu options={AssetMenuOptions} />
      <div className="main">
        <Insight initialInsightValue={homepageInsightDefault} />
      </div>
    </div>
  );
};

export default Homepage;
