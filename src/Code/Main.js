import { useEffect, useState } from "react";
// import {
//   useCreateSubmissionsApi,
//   useGetSubmissionsApi
// } from "../Hooks/useSubmissionsApi";
import CodeEditor from "./CodeEditor";
import CustomInput from "./CustomInput";
import LanguageSelector from "./LanguageSelector";
import { LANGUAGE_OPTIONS } from "./LanguageSelector/constants";
import OutputTerminal from "./OutputTerminal";
import { decodeString, encodeString } from "./utils";

const Main = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGE_OPTIONS[0]);
  const [value, setValue] = useState(selectedLanguage?.stub);
  const [input, setInput] = useState();
  const [output, setOutput] = useState();
  const [isLoading, setIsLoading] = useState(false);

//   const { mutateAsync: runCode } = useCreateSubmissionsApi();
//   const { mutateAsync: getOutput } = useGetSubmissionsApi();

  useEffect(() => {
    setValue(selectedLanguage?.stub);
  }, [selectedLanguage]);
console.log('select',selectedLanguage)
  const runEditorCode = async (e) => {
    try {
      setIsLoading(true);
      setOutput("");

      const { data: submissionData } = await runCode({
        source_code: encodeString(value),
        language_id: selectedLanguage.value,
        stdin: input || ""
      });

      const { data: outputData } = await getOutput(submissionData?.token);

      if (outputData.status_id === 3) {
        setOutput(decodeString(outputData.stdout));
      } else {
        setOutput(decodeString(outputData.stderr));
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <LanguageSelector
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <div className="editor-height mt-5">
        <CodeEditor
          selectedLanguage={selectedLanguage?.title.toLowerCase()}
          value={value}
          onChange={setValue}
        />
      </div>
      <div className="flex mt-5 justify-end">
        <input
          value="Run Code"
          type="button"
          onClick={runEditorCode}
          disabled={isLoading}
        />
      </div>
      <div className="flex flex-col mt-5">
        <label className="mb-2">Custom Input</label>
        <CustomInput input={input} setInput={setInput} />
      </div>
      {output && (
        <>
          <div className="flex mt-5 justify-end">
            <input
              value="Clear Ouput"
              type="button"
              onClick={() => setOutput(false)}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="mb-2">Output</label>
            <OutputTerminal output={output} isLoading={isLoading} />
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
