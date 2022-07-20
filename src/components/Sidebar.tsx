import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" width={64} marginRight={8}>
      <Stack spacing={12} align="flex-start">

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">GERAL</Text>
          <Stack spacing={4} marginTop={8} align="stretch">
            <Link display="flex" flexDirection="row">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text marginLeft={4} fontWeight="medium">Dashboard</Text>
            </Link>

            <Link display="flex" flexDirection="row">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text marginLeft={4} fontWeight="medium">Usuários</Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">AUTOMAÇÃO</Text>
          <Stack spacing={4} marginTop={8} align="stretch">
            <Link display="flex" flexDirection="row">
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text marginLeft={4} fontWeight="medium">Formulários</Text>
            </Link>

            <Link display="flex" flexDirection="row">
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text marginLeft={4} fontWeight="medium">Automação</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
};