import React from "react";
import Table from "../../../components/elements/Table";

const TeamPage = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "avatar",
        Cell: ({ row }: any) => {
          return (
            <div className="h-14 w-14">
              <img
                className="max-h-full flex items-start rounded-full"
                src={row.allCells[0].value}
                alt={row.allCells[0].value}
              />
            </div>
          );
        },
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "Assigned Equipment",
        accessor: "equipment",
      },
    ],
    []
  );
  const data = React.useMemo(
    () => [
      {
        id: 1,
        avatar:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpre00.deviantart.net%2F8da8%2Fth%2Fpre%2Ff%2F2015%2F249%2Fa%2F3%2Fbatman_new_52_avatar_by_joedigitalart-d98le6k.png&f=1&nofb=1",
        name: "Irwin Gasticke",
        role: "Electrician",
        equipment: "Grader",
      },
      {
        id: 2,
        avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F215%2F215584.jpg&f=1&nofb=1",
        name: "Molli Poff",
        role: "Engineer",
        equipment: "Excavator",
      },
      {
        id: 3,
        avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F250%2F250229.jpg&f=1&nofb=1",
        name: "Rufus Newvell",
        role: "Supervisor",
        equipment: "Skid-Steer",
      },
      {
        id: 4,
        avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F168%2F168166.jpg&f=1&nofb=1",
        name: "Otto Tieraney",
        role: "Construction Worker",
        equipment: "Scraper",
      },
      {
        id: 5,
        avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F103%2F103484.jpg&f=1&nofb=1",
        name: "Archy Gringley",
        role: "Estimator",
        equipment: "Dragline",
      },
      {
        id: 6,
        avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F146%2F146659.jpg&f=1&nofb=1",
        name: "Evangelin Maase",
        role: "Engineer",
        equipment: "Scraper",
      },
      {
        id: 7,
        avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F245%2Fthumb-1920-245664.jpg&f=1&nofb=1",
        name: "Elizabeth Alexandre",
        role: "Architect",
        equipment: "Bulldozer",
      },
      {
        id: 8,
        avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F905%2Fthumb-1920-90573.jpg&f=1&nofb=1",
        name: "Reidar McGarvey",
        role: "Construction Worker",
        equipment: "Trencher",
      },
      {
        id: 9,
        avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F241%2F241467.jpg&f=1&nofb=1",
        name: "Clerkclaude Shepheard",
        role: "Construction Worker",
        equipment: "Backhoe",
      },
      {
        id: 10,
        avatar: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.indianexpress.com%2F2014%2F08%2Fbatman.jpg&f=1&nofb=1",
        name: "Kendall Cressy",
        role: "Subcontractor",
        equipment: "Dragline",
      },
      {
        id: 11,
        avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fhand-drawn-avatars%2F500%2FAvatars-15-512.png&f=1&nofb=1",
        name: "Inness Housbey",
        role: "Construction Manager",
        equipment: "Trencher",
      },
      {
        id: 12,
        avatar: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Forig08.deviantart.net%2F4ac3%2Ff%2F2012%2F205%2Ff%2F2%2Fbatman_avatar_by_gogglesdegiraffe-d58g148.png&f=1&nofb=1",
        name: "Stu Dilks",
        role: "Project Manager",
        equipment: "Compactor",
      },
      {
        id: 13,
        avatar: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Forig08.deviantart.net%2F4ac3%2Ff%2F2012%2F205%2Ff%2F2%2Fbatman_avatar_by_gogglesdegiraffe-d58g148.png&f=1&nofb=1",
        name: "Gordan Vanyarkin",
        role: "Estimator",
        equipment: "Skid-Steer",
      },
    ],
    []
  );

  return (
    <div className="mt-3">
      <Table columns={columns} data={data} className="bg-white border border-gray-400 rounded-md shadow-md" headerClass="px-6 py-4 text-left text-xs font-medium tracking-wide uppercase font-base text-gray-500" bodyClass="text-gray-900" />
    </div>
  );
};

export default TeamPage;
