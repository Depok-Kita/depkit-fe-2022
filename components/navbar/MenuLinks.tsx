import { Box, Stack, Button, Link, Divider, Spacer } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";
import { Header, Body } from "@components/typography";

export const MenuLinks = ({ isOpen }: any) => {
  const normalMenuItems = () => {
    return (
      <>
        <MenuItem to="/about">
          <Link _hover={{ textColor: "#88BFE8" }}>Tentang Kami</Link>
        </MenuItem>
        <MenuItem to="/fesrak">
          <Link _hover={{ textColor: "#88BFE8" }}>Festival Rakyat</Link>
        </MenuItem>
        <MenuItem to="/donation">
          <Link _hover={{ textColor: "#88BFE8" }}>Donasi</Link>
        </MenuItem>
        <MenuItem to="/gallery">
          <Link _hover={{ textColor: "#88BFE8" }}>Galeri</Link>
        </MenuItem>
        <MenuItem to="/contact">
          <Link _hover={{ textColor: "#88BFE8" }}>Kontak</Link>
        </MenuItem>
      </>
    );
  };

  const underlinedMenuItems = () => {
    return (
      <>
        <MenuItem to="/about">
          <Link _hover={{ textColor: "#88BFE8" }}>
            <Divider />
            <br />
            Tentang Kami
          </Link>
        </MenuItem>
        <MenuItem to="/fesrak">
          <Link _hover={{ textColor: "#88BFE8" }}>
            <Divider />
            <br />
            Festival Rakyat
          </Link>
        </MenuItem>
        <MenuItem to="/donation">
          <Link _hover={{ textColor: "#88BFE8" }}>
            <Divider />
            <br />
            Donasi
          </Link>
        </MenuItem>
        <MenuItem to="/gallery">
          <Link _hover={{ textColor: "#88BFE8" }}>
            <Divider />
            <br />
            Galeri
          </Link>
        </MenuItem>
        <MenuItem to="/contact">
          <Link _hover={{ textColor: "#88BFE8" }}>
            <Divider />
            <br />
            Kontak
          </Link>
        </MenuItem>
      </>
    );
  };

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={[8, 8, 8, 32]}
        // align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[4, 4, 0, 0]}
        mr={[0, 0, 0, 8]}
      >
        {isOpen ? underlinedMenuItems() : normalMenuItems()}
      </Stack>
    </Box>
  );
};
