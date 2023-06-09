const OutputTerminal = ({ output }) => {
    return (
      <div className="output-terminal-bg output-terminal-height overflow-auto flex flex-col">
        <pre className="padding-top-left-1 text-white">{output}</pre>
      </div>
    );
  };
  
  export default OutputTerminal;
  