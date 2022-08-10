type Route = {
  url: string;
  name: string;
};

export const NAV_ROUTES: Route[] = [
  { name: "Grand Opening", url: "/grand-opening" },
  { name: "Donasi", url: "/donasi" },
  { name: "Donor Darah", url: "/donordarah" },
  { name: "Sponsor", url: "/sponsor" },
  { name: "Dokumentasi", url: "/dokumentasi" },
];

export default NAV_ROUTES;
