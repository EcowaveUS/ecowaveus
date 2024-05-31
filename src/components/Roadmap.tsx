// src/components/Roadmap.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { parseString } from "xml2js";

interface URLData {
  loc: string[];
  changefreq: string[];
  priority: string[];
}

interface RoadmapData {
  urlset: {
    url: URLData[];
  };
}

const Roadmap: React.FC = () => {
  const [roadmapData, setRoadmapData] = useState<RoadmapData | null>(null);

  useEffect(() => {
    const fetchAndParseXML = async () => {
      try {
        const response = await axios.get("/sitemap.xml");
        const wordXML = response.data;

        // Extract the relevant part of the XML (assuming it's in <w:t> tags)
        const regex = /<w:t>(.*?)<\/w:t>/g;
        let matches;
        let extractedXML = "";

        while ((matches = regex.exec(wordXML)) !== null) {
          extractedXML += matches[1];
        }
        extractedXML = extractedXML.replace("\ufeff", "");
        extractedXML = extractedXML
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .trim();

        console.log(extractedXML);
        // Parse the extracted XML
        parseString(extractedXML, (err: Error | null, result: RoadmapData) => {
          if (err) {
            console.error("Error parsing XML:", err);
            return;
          }
          setRoadmapData(result);
        });
      } catch (error) {
        console.error("Error fetching XML:", error);
      }
    };

    fetchAndParseXML();
  }, []);

  if (!roadmapData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hidden">
      <h1>Site Map</h1>
      {roadmapData.urlset.url.map((url, index) => (
        <div key={index}>
          <h2>URL: {url.loc[0]}</h2>
          <p>Change Frequency: {url.changefreq[0]}</p>
          <p>Priority: {url.priority[0]}</p>
        </div>
      ))}
    </div>
  );
};

export default Roadmap;
