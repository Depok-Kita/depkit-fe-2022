import Link from "next/link";
import { Text } from "@chakra-ui/react";

export const MenuItem = ({ children, isLast, to = "/", ...rest }: any) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};
