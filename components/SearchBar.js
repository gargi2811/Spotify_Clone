import React from "react";
import { VStack, Input, Box, Divider, View, Center } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

function SearchBar() {
  return (
    <View>
      <Center>
        <VStack
          my="3"
          space={1}
          w="100%"
          maxW="350px"
          divider={
            <Box>
              <Divider />
            </Box>
          }
        >
          <VStack w="100%" space={1}>
            <Input
              placeholder="Search"
              width="100%"
              color="white"
              borderRadius="4"
              borderColor="#008080"
              py="2"
              px="5"
              fontSize="14"
              InputLeftElement={
                <Icon name="search" size={25} color="#008080" />
              }
              InputRightElement={<Icon name="mic" size={25} color="#008080" />}
            />
          </VStack>
        </VStack>
      </Center>
    </View>
  );
}

export default SearchBar;
