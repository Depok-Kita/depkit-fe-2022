import { Divider, Box, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { menus } from "./constant";
import { v4 as uuid } from "uuid";
import { Button } from "@components";

export const MenuLinks = ({ isOpen }: any) => {
  return (
    <Box
      flexBasis={{ base: "100%", md: "auto" }}
      className={`${isOpen ? "block" : "hidden"} tablet:block`}
    >
      <Stack
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[4, 4, 0, 0]}
        mr={[0, 0, 0, 8]}
        className="gap-0 tablet:gap-8 desktop:gap-[85px] w-full"
      >
        {menus.map(({ label, url }) => {
          return (
            <Link href={url} key={uuid()}>
              <div>
                {isOpen && (
                  <Divider borderColor={"#88BFE8"} className="tablet:hidden" />
                )}
                <Button preset="tertiaryDark">{label}</Button>
              </div>
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};