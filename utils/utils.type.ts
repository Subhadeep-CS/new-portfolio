import AboutMe from "@/components/Home/AboutContainer/AboutMe";

export type HeaderMenuItem = {
  name: string;
  href: string;
};

export interface AboutMe {
  key: string;
  details: string;
}

export interface AboutMeInterface extends AboutMe {
  children: AboutMe[];
}
