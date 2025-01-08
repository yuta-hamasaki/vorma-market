import { ChefHat, Globe, CircleEllipsis, PenTool } from "lucide-react";
import { ReactNode } from "react";

interface iAppProps {
  name: string;
  title: string;
  image: ReactNode;
  id: number;
}

export const categoryItems: iAppProps[] = [
  {
    id: 0,
    name: "template",
    title: "Template",
    image: <Globe />,
  },
  {
    id: 1,
    name: "uikit",
    title: "Ui Kit",
    image: <ChefHat />,
  },
  {
    id: 2,
    name: "digitalarts",
    title: "Digital Arts",
    image: <PenTool />,
  },
  {
    id: 3,
    name: "others",
    title: "Ohters",
    image: <CircleEllipsis/>,
  },
];