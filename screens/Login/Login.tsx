import React, { useState } from "react";
import {
  Radio,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Stack,
  Button,
  Center,
  NativeBaseProvider,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("one");

  const onSignInButtonPress = async () => {};

  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <Center w="100%" h="100%">
        <Box w="100%" h="100%" bgColor="white" alignItems="center">
          <Box safeArea p="1" py="60" w="100%" maxW="300">
            <VStack space="4">
              <Heading
                size="lg"
                fontWeight="700"
                color="coolGray.800"
                _dark={{
                  color: "warmGray.800",
                }}
              >
                Welcome!!
              </Heading>
              <Heading
                mt="1"
                _dark={{
                  color: "warmGray.900",
                }}
                color="coolGray.900"
                fontWeight="700"
                size="xs"
              >
                Sign in to continue!
              </Heading>
              <Text fontWeight="400" fontFamily="" py="5" color="warmGray.500">
                Choose Your Role
              </Text>
              <Radio.Group
                style={{ flexDirection: "row" }}
                status="control"
                value={value}
                onChange={(nextValue) => {
                  setValue(nextValue);
                }}
              >
                <Stack
                  direction={{
                    base: "row",
                    md: "row",
                  }}
                  alignItems={{
                    base: "flex-start",
                    md: "center",
                  }}
                  space={4}
                  w="75%"
                  maxW="300px"
                >
                  <Radio value="one">Admin</Radio>
                  <Radio value="two">Seller</Radio>
                  <Radio value="three">Buyer</Radio>
                </Stack>
              </Radio.Group>

              <VStack space={3} mt="5">
                <FormControl>
                  <FormControl.Label>Username</FormControl.Label>
                  <Input
                    placeholder="Enter Name"
                    borderRadius="25"
                    value={name}
                    onChangeText={setName}
                    borderColor="gray.500"
                  />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Password</FormControl.Label>
                  <Input
                    type="password"
                    borderRadius="25"
                    placeholder="Enter password"
                    value={password}
                    onChangeText={setPassword}
                    borderColor="gray.500"
                  />
                </FormControl>
                <Button
                  mt="10"
                  bg="#008080"
                  borderRadius="25"
                  onPress={() => navigation.navigate("Seller")}
                >
                  Sign in
                </Button>
              </VStack>
            </VStack>
          </Box>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default Login;
