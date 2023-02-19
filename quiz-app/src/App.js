import { ChakraProvider } from "@chakra-ui/react";
import Question from "./components/Question";
import customTheme from "./components/extendTheme";
import React, { useState } from "react";
import { Stack, Radio, RadioGroup, Box, Text } from "@chakra-ui/react";

function App() {
  let quizes = require("./assets/quizes.json");
  const [count, setCount] = useState(0);
  const [quize, changeQuize] = useState(quizes[0]);
  const [result, setResult] = useState("wrong")

  function changePage() {
    if (count == 1) {
      changeQuize(quizes[Math.floor(Math.random() * quizes.length)]);
      setCount(1 - count);
    } else {
      setCount(1 - count);
    }
  }

  function seeTrue(e){
    if (quize.choices[e].correct==true){
      setResult("correct");
    } else {
      console.log(result)
      setResult("wrong")
    }
  }

  if (count == 0) {
    return (
      <ChakraProvider theme={customTheme}>
        <div className="container">
          <div className="title">Quiz For Good</div>
          <div className="center">
            <div className="question">
              <Question question={quize.question}></Question>
            </div>
            <RadioGroup id="choices" onChange={(e)=> seeTrue(e - 1)}>
              <Stack direction="column" gap="17px">
                <Box bg="#EFF1F3" borderRadius="6px">
                  <Radio value="1" p="0.2rem" colorScheme="gray">
                    <Text ml="15px" color="#423E28" fontSize="24px">
                      {quize.choices[0].text}
                    </Text>
                  </Radio>
                </Box>
                <Box bg="#EFF1F3" borderRadius="6px" fontSize="24px">
                  <Radio value="2" p="0.2rem" colorScheme="gray">
                    <Text ml="15px" color="#423E28" fontSize="24px">
                      {quize.choices[1].text}
                    </Text>
                  </Radio>
                </Box>
                <Box bg="#EFF1F3" borderRadius="6px">
                  <Radio value="3" p="0.2rem" colorScheme="gray">
                    <Text ml="15px" color="#423E28" fontSize="24px">
                      {quize.choices[2].text}
                    </Text>
                  </Radio>
                </Box>
                <Box bg="#EFF1F3" borderRadius="6px">
                  <Radio value="4" p="0.2rem" colorScheme="gray">
                    <Text ml="15px" color="#423E28" fontSize="24px">
                      {quize.choices[3].text}
                    </Text>
                  </Radio>
                </Box>
              </Stack>
            </RadioGroup>
            <div className="buttonContainer">
              <button className="button" onClick={changePage}>
                Next
              </button>
            </div>
          </div>
          <div className="footer">
            <p>
              Made by Soma, and Ashley at
              <span className="treehacks">&nbsp;treehacks</span>
            </p>
          </div>
        </div>
      </ChakraProvider>
    );
  } else {
    return (
      <ChakraProvider theme={customTheme}>
        <div className="container">
          <div className="title">Quiz For Good</div>
          <div className="center">
            <div>
              <p className="correctness">{result}</p>
              <Question question={quize.explanation}></Question>
            </div>
            <div className="buttonContainer">
              <button className="button" onClick={changePage}>
                Next
              </button>
            </div>
          </div>
          <div className="footer">
            <p>
              Made by Soma, and Ashley at
              <span className="treehacks">&nbsp;treehacks</span>
            </p>
          </div>
        </div>
      </ChakraProvider>
    );
  }
}

export default App;
