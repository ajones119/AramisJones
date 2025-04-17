import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import GithubIcon from "../../assets/logos/github.svg";
import Base1 from "../../assets/projects/appraise-calculator/base1.png";
import Base2 from "../../assets/projects/appraise-calculator/base2.png";
import Base3 from "../../assets/projects/appraise-calculator/base3.png";
import R1 from "../../assets/projects/appraise-calculator/regression1.png";
import R2 from "../../assets/projects/appraise-calculator/regression2.png";
import R3 from "../../assets/projects/appraise-calculator/regression3.png";
import background from "../../assets/projects/appraise-calculator/background.gif";
import Carousel from "../../components/Carousel";

export const Route = createFileRoute("/projects/appraise-csv-parse")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="m-20 text-foreground">
      <motion.h1
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl mb-4 font-bold"
      >
        Appraise CSV Parser
      </motion.h1>
      <section>
        <div className="flex gap-2 mb-2">
          <a
            href="https://appraisecsvvisualize.onrender.com/"
            style={{ backgroundColor: "skyblue" }}
            className="text-white rounded-md p-1 h-10 flex items-center"
          >
            Visit Example
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ajones119/AppraiseCsvVisualize"
            style={{ backgroundColor: "skyblue" }}
            className="text-white rounded-md p-1 h-10"
          >
            <img src={GithubIcon} alt="github repo" className="w-full h-full" />
          </a>
        </div>
      </section>
      <section className="my-4">
        <motion.h3 className="text-xl underline">Description</motion.h3>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 mb-4">
          <div>
            <p className="text-md">
              This app accepts a CSV file downloaded from the MLS, and runs
              several statistical calculations for the comparable sales in order
              to find market trends. It seperates the data into monthly,
              quarterly, or yearly installments around an effective date and
              then calculates mean, median, and mode for
            </p>
            <ul>
              <li>• Sale Price</li>
              <li>• Square Feet</li>
              <li>• Price Per Square Foot</li>
              <li>• Year Built</li>
            </ul>
            <p>
              Then it reders a chart for each section showing the breakdown over
              time.
            </p>
          </div>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            className="max-w-2xl mx-auto"
          >
            <Carousel imageUrls={[background, Base1, Base2, Base3]} />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            className="max-w-2xl mx-auto"
          >
            <Carousel reverse imageUrls={[R1, R2, R3]} />
          </motion.div>
          <div>
            <b>
              * Note - Printing the page removes certain UI elements in order
              for the printed document to show better in reports.
            </b>
            <p className="text-md">
              In the Regression Analysis section, the app takes all of teh data
              from the csv and makes several charts to help aggregate the data,
              it then finds the best fit line for that category and shows slope,
              B, and r-squared values.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
